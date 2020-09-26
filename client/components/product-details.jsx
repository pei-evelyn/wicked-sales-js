import React from 'react';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    };
  }

  componentDidMount() {
    fetch('/api/products/1')
      .then(res => res.json())
      .then(product => this.setState({
        product: product
      }))
      .catch(err => console.error(err));
  }

  render() {
    if (this.state.product) {
      return (
        <div className="container mt-5">
          <div className="row">
            <div className="col mb-5">
              <a >Back to catalog</a>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-6">
              <img src={this.state.product.image} alt="" />
            </div>
            <div className="col-6">
              <h1 className="mb-3">{this.state.product.name}</h1>
              <h3 className="mb-3">{this.state.product.price}</h3>
              <p>{this.state.product.shortDescription}</p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p>{this.state.product.longDescription}</p>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default ProductDetails;
