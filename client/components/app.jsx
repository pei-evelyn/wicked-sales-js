import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';
import CartSummary from './cart-summary';

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
    this.addToCart = this.addToCart.bind(this);
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
      .then(cartItems => {
        this.setState({
          cart: cartItems
        });
      })
      .catch(err => console.error(err));
  }

  addToCart(product) {
    fetch('/api/cart', {
      method: 'POST',
      body: JSON.stringify(product),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(productData => this.setState(state => {
        const cartList = state.cart.concat(productData);
        return ({
          cart: cartList
        });
      }))
      .catch(err => console.error(err));
  }

  render() {
    if (this.state.view.name === 'catalog') {
      return (
        <>
          <Header
            text="$ Wicked Sales"
            cartCount={this.state.cart.length}
            setView={this.setView}
          />
          <ProductList className="mt-4" setView={this.setView} />
        </>
      );
    } else if (this.state.view.name === 'details') {
      return (
        <>
          <Header
            text="$ Wicked Sales"
            cartCount={this.state.cart.length}
            setView={this.setView}
          />
          <ProductDetails
            className="mt-4"
            setView={this.setView}
            params={this.state.view.params}
            addToCart={this.addToCart}
          />
        </>
      );
    } else if (this.state.view.name === 'cart') {
      return (
        <>
          <Header
            text="$ Wicked Sales"
            cartCount={this.state.cart.length}
            setView={this.setView}
          />
          <CartSummary cart={this.state.cart} setView={this.setView}/>
        </>
      );
    }
  }
}

export default App;
