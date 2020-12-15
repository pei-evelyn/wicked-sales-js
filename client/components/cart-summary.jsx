import React from 'react';
import CartSummaryItem from './cart-summary-item';

function SumTotal(props) {
  const cartItems = props.cart;
  if (cartItems.length === 0) {
    return '$0.00';
  }
  const priceArr = [];
  cartItems.forEach(item => {
    priceArr.push(item.price);
  });
  const sum = (price, currentVal) => price + currentVal;
  const total = priceArr.reduce(sum, 0);

  const totalArr = JSON.stringify(total).split('');
  totalArr.splice((totalArr.length - 2), 0, '.');
  const formatPrice = totalArr.join('');
  return `$${formatPrice}`;
}

function CartSummary(props) {
  const cartItems = props.cart.map(item =>
    <CartSummaryItem
      key={item.cartItemId}
      cartItemId={item.cartItemId}
      price={item.price}
      productId={item.productId}
      image={item.image}
      name={item.name}
      shortDesc={item.shortDescription}
    />
  );
  return (
    <div className="container height-80">
      <div className="row">
        <div className="col-md my-4">
          <div className="back-arrow" onClick={() => props.setView('catalog', {})}>
            <i className="fas fa-chevron-left mr-2"></i>
          </div>
        </div>
      </div>
      <div className="row mb-3">
        <h2 className="col-md">My Cart</h2>
      </div>
      {cartItems}
      <div className="row my-5">
        <h4 className="col-md-6 pl-0 total-price">
          Total Price:
          <span className="ml-3">
            <SumTotal cart={props.cart}/>
          </span>
        </h4>
        <div className="col-md-6 pr-0 checkout-btn">
          <button className="btn btn-secondary" onClick={() => props.setView('checkout', {})}>CHECKOUT</button>
        </div>
      </div>
    </div>
  );
}

export default CartSummary;
