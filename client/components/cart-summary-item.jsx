import React from 'react';

function CartSummaryItem(props) {
  // const item = props.cartItem;
  // const priceNum = JSON.stringify(product.price);
  // const priceArr = priceNum.split('');
  // priceArr.splice((priceArr.length - 2), 0, '.');
  // const price = priceArr.join('');

  return (
    <div className="row">
      <div className="col-4">
        <img src="" alt=""/>
      </div>
      <div className="col-8">
        <h1>Title</h1>
        <h4>$0.00</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste vero
          quibusdam odit impedit error corporis explicabo sunt. Consequuntur,
          quas unde.</p>
      </div>
    </div>
  );
}

export default CartSummaryItem;
