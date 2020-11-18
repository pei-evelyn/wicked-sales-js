import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';
import CartSummary from './cart-summary';
import CheckoutForm from './checkout-form';
import Modal from './modal';
import Footer from './footer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: {
        name: 'homepage',
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
    if (this.state.view.name === 'homepage') {
      return (
        <>
          <Modal view={this.state.view.name} setView={this.setView}/>
          <Header
            cartCount={this.state.cart.length}
            setView={this.setView}
          />
          <main className="container-fluid p-0">
            <div className="hero-img">
              <div className="jumbotron hero-banner">
                <div className="jumbo-container container d-flex flex-column justify-content-center align-items-center">
                  <h1 className="mb-4 hero-heading">Fragrance with a conscience.</h1>
                  <p className="lead hero-text mb-4">
                    Inspiring positive change by creating the world&apos;s best
                    100% natural perfume, without compromising on ethics or aesthetics.
                    At Monocle, that is our promise to you.
                  </p>
                  <img src="/images/favicon.png" alt="Monocle Logo Black" />
                </div>
              </div>
            </div>
          </main>
        </>
      );
    }

    if (this.state.view.name === 'catalog') {
      return (
        <>
          <Header
            cartCount={this.state.cart.length}
            setView={this.setView}
          />
          <main className="container-fluid p-0">
            <div className="hero-img">
              <div className="jumbotron hero-banner">
                <div className="jumbo-container container d-flex flex-column justify-content-center align-items-center">
                  <h1 className="mb-4 hero-heading">Fragrance with a conscience.</h1>
                  <p className="lead hero-text mb-4">
                    Inspiring positive change by creating the world&apos;s best
                    100% natural perfume, without compromising on ethics or aesthetics.
                    At Monocle, that is our promise to you.
                  </p>
                  <img src="/images/favicon.png" alt="Monocle Logo Black" />
                </div>
              </div>
            </div>
            <ProductList className="mt-4" setView={this.setView} />
          </main>
          <Footer />
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
          <Footer />
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
          <Footer />
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
          <Footer />
        </>
      );
    }
  }
}

export default App;
