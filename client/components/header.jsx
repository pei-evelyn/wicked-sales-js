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
        <nav className="navbar col bg-black">
          <div className="ml-2 cursor-pointer d-flex align-items-center" onClick={() => props.setView('catalog', {})}>
            <img className="navbar-logo" src="/images/logo-wht.png" alt="Monocle Logo"/>
            <h4 className="text-white m-0 pl-1">MONOCLE</h4>
          </div>
          <div className="text-light cursor-pointer" onClick={() => props.setView('cart', {})}>
            <span className="mr-2">{cartItems}</span>
            <i className="fas fa-shopping-cart"></i>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
