import React from 'react';

function CartSummaryItem(props) {
  const priceNum = JSON.stringify(props.price);
  const priceArr = priceNum.split('');
  priceArr.splice((priceArr.length - 2), 0, '.');
  const price = priceArr.join('');

  return (
    <div className="row border mb-4 bg-white">
      <div className="col-md-4 d-flex justify-content-center">
        <img className="cart-summary-img" src={props.image} alt={props.name} />
      </div>
      <div className="col-md-8 d-flex flex-column justify-content-center cart-summary-text">
        <h4 className="mb-3">{props.name}</h4>
        <h5 className="mb-3 text-muted" >${price}</h5>
      </div>
    </div>
  );
}

export default CartSummaryItem;
