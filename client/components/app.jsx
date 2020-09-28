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
      },
      cart: []
    };
    this.setView = this.setView.bind(this);
    this.getCartItems = this.getCartItems.bind(this);
  }

  componentDidMount() {
    this.getCartItems();
  }

  setView(name, params) {
    this.setState({
      view: {
        name: name,
        params: params
      }
    });
  }

  getCartItems() {
    fetch('/api/cart')
      .then(res => res.json())
      .then(data => this.setState({
        cart: data
      }))
      .catch(err => console.error(err));
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
          <ProductDetails className="mt-4" setView={this.setView} params={this.state.view.params} />
        </>
      );
    }

  }
}

export default App;
