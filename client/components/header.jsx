import React from 'react';

function Header(props) {
  const cartCount = props.cartCount;
  let cartItems;

  if (cartCount === 1) {
    cartItems = `${cartCount} Item`;
  } else {
    cartItems = `${cartCount} Items`;
  }

  return (
    <div className="container-fluid">
      <header className="row">
        <nav className="navbar navbar-dark bg-dark col">
          <a className="navbar-brand ml-5 pl-5" href="/">{props.text}</a>
          <div className="text-light mr-5 pr-5">
            <span className="mr-2">{cartItems}</span>
            <i className="fas fa-shopping-cart"></i>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
