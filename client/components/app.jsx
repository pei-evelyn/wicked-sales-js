import React from 'react';
import Header from './header';
import ProductList from './product-list';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Header text="$ Wicked Sales" />
        <ProductList className="mt-4"/>
      </>
    );
  }
}

export default App;
