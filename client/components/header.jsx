import React from 'react';

function Header(props) {
  return (
    <header className="row">
      <nav className="navbar navbar-expand-xl navbar-dark bg-dark col">
        <a className="navbar-brand" href="/">{props.text}</a>
      </nav>
    </header>
  );
}

export default Header;
