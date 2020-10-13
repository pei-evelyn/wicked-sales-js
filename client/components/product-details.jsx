import React from 'react';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    };
    this.formatPrice = this.formatPrice.bind(this);
  }

  componentDidMount() {
    fetch(`/api/products/${this.props.params.productId}`)
      .then(res => res.json())
      .then(product => this.setState({
        product: product
      }))
      .catch(err => console.error(err));
  }

  formatPrice() {
    if (this.state.product) {
      const unformatPrice = this.state.product.price;
      const priceArr = JSON.stringify(unformatPrice).split('');
      priceArr.splice((priceArr.length - 2), 0, '.');
      const formatPrice = priceArr.join('');
      return formatPrice;
    }
  }

  render() {
    if (this.state.product) {
      return (
        <div className="container my-5 border bg-white detail-container">
          <div className="row">
            <div className="col m-4">
              <div className="back-arrow" onClick={() => this.props.setView('catalog', {})}>
                <i className="fas fa-chevron-left mr-2 cursor-pointer"></i>
              </div>
            </div>
          </div>
          <div className="row mb-3 mt-4">
            <div className="col-6 img-container d-flex justify-content-center align-items-center">
              <img src={this.state.product.image} alt="" className="product-details-img" />
            </div>
            <div className="col-6">
              <h1 className="mb-4">{this.state.product.name}</h1>
              <h4 className="mb-4 text-muted">${this.formatPrice()}</h4>
              <p className="mr-3">{this.state.product.shortDescription}</p>
              <button className="btn btn-secondary mt-3" onClick={() => this.props.addToCart(this.state.product)}>Add to Cart</button>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col m-4">
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
