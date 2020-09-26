import React from 'react';

function ProductListItem(props) {
  const product = props.product;
  const priceNum = JSON.stringify(product.price);
  const priceArr = priceNum.split('');
  priceArr.splice((priceArr.length - 2), 0, '.');
  const price = priceArr.join('');

  return (
    <div className="col-sm-4 d-flex align-items-stretch mb-4">
      <div className="card">
        <img src={product.image} className="card-img-top" alt={product.name} />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">${price}</p>
          <p className="card-text">{product.shortDescription}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductListItem;
