import React from 'react';

function Header(props) {
  return (
    <div className="container-fluid">
      <header className="row">
        <nav className="navbar navbar-expand-xl navbar-dark bg-dark col">
          <a className="navbar-brand" href="/">{props.text}</a>
        </nav>
      </header>
    </div>

  );
}

export default Header;
