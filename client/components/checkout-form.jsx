import React from 'react';

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      creditCard: '',
      shippingAddress: ''
    };
  }

  render() {
    return (
      <div className="container">
        <div className="row mb-4">
          <div className="col">
            <h1>Checkout</h1>
            <h4>
              Order Total:
              <span>$0.00</span>
            </h4>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name"/>
              </div>
              <div className="form-group">
                <label htmlFor="creditCard">Name</label>
                <input type="text" className="form-control" id="creditCard" />
              </div>
              <div className="form-group">
                <label htmlFor="shippingAddress">Name</label>
                <textarea className="form-control" id="shippingAddress" rows="3"></textarea>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default CheckoutForm;
