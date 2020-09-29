require('dotenv/config');
const express = require('express');

const db = require('./database');
const ClientError = require('./client-error');
const staticMiddleware = require('./static-middleware');
const sessionMiddleware = require('./session-middleware');

const app = express();

app.use(staticMiddleware);
app.use(sessionMiddleware);

app.use(express.json());

app.get('/api/products', (req, res, next) => {
  const sql = `
    select "productId",
           "name",
           "price",
           "image",
           "shortDescription"
      from "products";
  `;

  db.query(sql)
    .then(result => {
      res.status(200).json(result.rows);
    })
    .catch(err => next(err));
});

app.get('/api/products/:productId', (req, res, next) => {
  const productId = parseInt(req.params.productId, 10);
  if (productId < 0 || isNaN(productId)) {
    return res.status(400).json({
      error: 'Product ID must be valid'
    });
  }

  const sql = `
    select *
    from "products"
    where "productId" = $1
  `;

  const value = [productId];

  db.query(sql, value)
    .then(result => {
      if (result.rows.length === 0) {
        next(new ClientError(`ProductId ${productId} does not exist`, 404));
      } else {
        res.status(200).json(result.rows[0]);
      }
    })
    .catch(err => next(err));
});

app.get('/api/cart', (req, res, next) => {
  if (!req.session.cartId) {
    res.json([]);
  } else {
    const cartId = req.session.cartId;
    const sql = `
      select "ci"."cartItemId",
             "ci"."price",
             "p"."productId",
             "p"."image",
             "p"."name",
             "p"."shortDescription"
        from "cartItems" as "ci"
        join "products" as "p" using ("productId")
       where "ci"."cartId" = $1
      `;
    const params = [cartId];

    return db.query(sql, params)
      .then(result => {
        return res.status(200).json(result.rows);
      })
      .catch(err => console.error(err));
  }
});

app.post('/api/cart', (req, res, next) => {
  const productId = req.body.productId;
  if (typeof productId === 'undefined') {
    return res.status(400).json({
      error: 'Missing required value'
    });
  }

  if (productId < 0 || isNaN(productId)) {
    return res.status(400).json({
      error: `${productId} must be valid integer`
    });
  }

  const sql = `
    select "price"
    from "products"
    where "productId" = $1;
  `;
  const value = [productId];

  db.query(sql, value)
    .then(result => {
      if (result.rows.length === 0) {
        throw (new ClientError(`ProductId ${productId} does not exist`, 400));
      }

      const price = result.rows[0].price;
      const insertSql = `
        insert into "carts" ("cartId", "createdAt")
        values (default, default)
        returning "cartId"
      `;

      if (!req.session.cartId) {
        return db.query(insertSql)
          .then(insertResult => {
            const cartId = insertResult.rows[0].cartId;
            return ({
              cartId: cartId,
              price: price
            });
          })
          .catch(err => console.error(err));
      } else {
        return ({
          cartId: req.session.cartId,
          price: price
        });
      }

    })
    .then(result => {
      req.session.cartId = result.cartId;
      const sql = `
        insert into "cartItems" ("cartId", "productId", "price")
        values ($1, $2, $3)
        returning "cartItemId"
      `;
      const params = [result.cartId, productId, result.price];
      return db.query(sql, params);
    })
    .then(result => {
      const cartItemId = result.rows[0].cartItemId;
      const sql = `
        select "ci"."cartItemId",
               "ci"."price",
               "p"."productId",
               "p"."image",
               "p"."name",
               "p"."shortDescription"
          from "cartItems" as "ci"
          join "products" as "p" using ("productId")
         where "ci"."cartItemId" = $1
      `;
      const params = [cartItemId];
      return db.query(sql, params)
        .then(queryResult => {
          res.status(201).json(queryResult.rows[0]);
        });
    })
    .catch(err => next(err));
});

app.post('/api/orders', (req, res, next) => {
  if (!req.session.cartId) {
    return res.status(400).json({
      error: 'CartId is required'
    });
  }
});

app.use('/api', (req, res, next) => {
  next(new ClientError(`cannot ${req.method} ${req.originalUrl}`, 404));
});

app.use((err, req, res, next) => {
  if (err instanceof ClientError) {
    res.status(err.status).json({ error: err.message });
  } else {
    console.error(err);
    res.status(500).json({
      error: 'an unexpected error occurred'
    });
  }
});

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port', process.env.PORT);
});
