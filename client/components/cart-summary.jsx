import React from 'react';
import CartSummaryItem from './cart-summary-item';

function CartSummary(props) {
  const cartItems = props.cart.map(item =>
    <CartSummaryItem key={props.id}/>
  );
  return (
    <div className="container">
      <div className="row">
        <div className="col m-4">
          <div className="back-arrow" onClick={() => props.setView('catalog', {})}>
            <i className="fas fa-chevron-left mr-2"></i>
            <a>Back to catalog</a>
          </div>
        </div>
      </div>
      <div className="row">
        <h1 className="col">My Cart</h1>
      </div>
      {cartItems}
      <div className="row">
        <h2 className="col">
          Total Price:
          <span className="ml-2">$0.00</span>
        </h2>
      </div>
    </div>
  );
}

export default CartSummary;
