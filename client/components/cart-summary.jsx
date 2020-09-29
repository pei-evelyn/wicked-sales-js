import React from 'react';
import CartSummaryItem from './cart-summary-item';

function CartSummary(props) {
  const cartItems = props.cartList.map(item =>
    <CartSummaryItem key={props.id}/>
  );
  return (
    <div className="container">
      <div className="row">
        <h1 className="col-12">My Cart</h1>
      </div>
      {cartItems}
      <div className="row">
        <h2 className="col-12">
          Total Price:
          <span className="ml-2">$0.00</span>
        </h2>
      </div>
    </div>
  );
}

export default CartSummary;
