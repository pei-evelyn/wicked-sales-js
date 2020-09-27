import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: {
        name: 'catalog',
        params: {}
      }
    };
    this.setView = this.setView.bind(this);
  }

  setView(name, params) {
    this.setState({
      view: {
        name: name,
        params: params
      }
    });
  }

  render() {
    if (this.state.view.name === 'catalog') {
      return (
        <>
          <Header text="$ Wicked Sales" />
          <ProductList className="mt-4" setView={this.setView} />
        </>
      );
    } else {
      return (
        <>
          <Header text="$ Wicked Sales" />
          <ProductDetails className="mt-4" setView={this.setView} />
        </>
      );
    }

  }
}

export default App;
