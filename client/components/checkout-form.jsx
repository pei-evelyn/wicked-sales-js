import React from 'react';

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      creditCard: '',
      shippingAddress: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.SumTotal = this.SumTotal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const info = {};
    info.name = this.state.name;
    info.creditCard = this.state.creditCard;
    info.shippingAddress = this.state.shippingAddress;
    this.props.placeOrder(info);
  }

  SumTotal(props) {
    const cartItems = this.props.cart;
    if (cartItems.length === 0) {
      return '$0.00';
    }
    const priceArr = [];
    cartItems.forEach(item => {
      priceArr.push(item.price);
    });
    const sum = (price, currentVal) => price + currentVal;
    const total = priceArr.reduce(sum, 0);

    const totalArr = JSON.stringify(total).split('');
    totalArr.splice((totalArr.length - 2), 0, '.');
    const formatPrice = totalArr.join('');
    return `$${formatPrice}`;
  }

  render() {
    return (
      <div className="container">
        <div className="row mb-4">
          <div className="col">
            <h1 className="mt-5 mb-4">Checkout</h1>
            <h4 className="text-secondary mt-2">
              Order Total:
              <span className="ml-3">{this.SumTotal()}</span>
            </h4>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="creditCard">Credit Card Number</label>
                <input
                  type="tel"
                  className="form-control"
                  id="creditCard"
                  value={this.state.creditCard}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="shippingAddress">Shipping Address</label>
                <textarea
                  className="form-control"
                  id="shippingAddress"
                  rows="3"
                  value={this.state.shippingAddress}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div className="d-flex justify-content-between">
                <div className="back-arrow" onClick={() => this.props.setView('catalog', {})}>
                  <i className="fas fa-chevron-left mr-2"></i>
                </div>
                <input
                  type="submit"
                  className="btn btn-secondary"
                  value="Place Order"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default CheckoutForm;
