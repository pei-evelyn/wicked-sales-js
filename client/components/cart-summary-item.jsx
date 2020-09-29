import React from 'react';

function CartSummaryItem(props) {
  const priceNum = JSON.stringify(props.price);
  const priceArr = priceNum.split('');
  priceArr.splice((priceArr.length - 2), 0, '.');
  const price = priceArr.join('');

  return (
    <div className="row border mb-4 bg-white p-3">
      <div className="col-4 d-flex justify-content-center">
        <img className="cart-summary-img" src={props.image} alt={props.name} />
      </div>
      <div className="col-8 d-flex flex-column justify-content-center">
        <h2 className="mb-3">{props.name}</h2>
        <h4 className="mb-3">${price}</h4>
        <p>{props.shortDesc}</p>
      </div>
    </div>
  );
}

export default CartSummaryItem;
