import React from 'react';

function Header(props) {
  return (
    <div className="container-fluid">
      <header className="row">
        <nav className="navbar navbar-dark bg-dark col">
          <a className="navbar-brand pl-5" href="/">{props.text}</a>
        </nav>
      </header>
    </div>
  );
}

export default Header;
