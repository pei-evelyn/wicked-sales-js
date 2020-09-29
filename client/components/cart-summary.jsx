import React from 'react';
import CartSummaryItem from './cart-summary-item';

function SumTotal(props) {
  const cartItems = props.cart;
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
    <div className="container">
      <div className="row">
        <div className="col my-4">
          <div className="back-arrow" onClick={() => props.setView('catalog', {})}>
            <i className="fas fa-chevron-left mr-2"></i>
            <a>Back to catalog</a>
          </div>
        </div>
      </div>
      <div className="row mb-3">
        <h1 className="col">My Cart</h1>
      </div>
      {cartItems}
      <div className="row my-5">
        <h2 className="col">
          Total Price:
          <span className="ml-3">
            <SumTotal cart={props.cart}/>
          </span>
        </h2>
      </div>
    </div>
  );
}

export default CartSummary;
