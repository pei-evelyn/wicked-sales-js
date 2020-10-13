import React from 'react';

function ProductListItem(props) {
  const product = props.product;
  const priceNum = JSON.stringify(product.price);
  const priceArr = priceNum.split('');
  priceArr.splice((priceArr.length - 2), 0, '.');
  const price = priceArr.join('');

  return (
    <div className="col-md-4 d-flex mb-4 mt-3 card-container"
      onClick={() => props.setView('details', { productId: product.productId })}>
      <div className="card">
        <img src={product.image} className="card-img-top product-list-img" alt={product.name} />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">${price}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductListItem;
