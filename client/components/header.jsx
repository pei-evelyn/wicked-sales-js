import React from 'react';

function Header(props) {
  const cartCount = props.cartCount;
  let cartItems;

  if (cartCount === 1) {
    cartItems = `${cartCount} ITEM`;
  } else {
    cartItems = `${cartCount} ITEMS`;
  }

  return (
    <header className="sticky-top">
      <nav className="navbar bg-black">
        <div className="ml-2 cursor-pointer d-flex align-items-center" onClick={() => props.setView('catalog', {})}>
          <img className="navbar-logo" src="/images/logo-wht.png" alt="Monocle Logo"/>
          <h6 className="text-white m-0 pl-1">MONOCLE</h6>
        </div>
        <div className="mr-2 text-light cursor-pointer" onClick={() => props.setView('cart', {})}>
          <span className="mr-2">{cartItems}</span>
          <i className="fas fa-shopping-cart"></i>
        </div>
      </nav>
    </header>
  );
}

export default Header;
