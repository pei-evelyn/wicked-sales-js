import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';
import CartSummary from './cart-summary';
import CheckoutForm from './checkout-form';
import Modal from './modal';

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
    this.placeOrder = this.placeOrder.bind(this);
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

  placeOrder(order) {
    fetch('/api/orders', {
      method: 'POST',
      body: JSON.stringify(order),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => this.setState({
        view: { name: 'catalog', params: {} },
        cart: []
      }))
      .catch(err => console.error(err));
  }

  render() {
    if (this.state.view.name === 'catalog') {
      return (
        <>
          <Modal view={this.state.view.name} />
          <Header
            cartCount={this.state.cart.length}
            setView={this.setView}
          />
          <main className="container-fluid p-0">
            <div className="hero-img">
              <div className="jumbotron hero-text">
                <div className="container">
                  <h1 className="display-4">Fluid jumbotron</h1>
                  <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                  <hr/>
                </div>
              </div>
            </div>
            <ProductList className="mt-4" setView={this.setView} />
          </main>
        </>
      );
    }

    if (this.state.view.name === 'details') {
      return (
        <>
          <Header
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
    }

    if (this.state.view.name === 'cart') {
      return (
        <>
          <Header
            cartCount={this.state.cart.length}
            setView={this.setView}
          />
          <CartSummary cart={this.state.cart} setView={this.setView}/>
        </>
      );
    }

    if (this.state.view.name === 'checkout') {
      return (
        <>
          <Modal view={this.state.view.name} />
          <Header
            cartCount={this.state.cart.length}
            setView={this.setView}
          />
          <CheckoutForm
            setView={this.setView}
            placeOrder={this.placeOrder}
            cart={this.state.cart}
          />
        </>
      );
    }
  }
}

export default App;
