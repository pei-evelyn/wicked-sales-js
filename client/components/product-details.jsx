import React from 'react';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    };
  }

  componentDidMount(productId) {
    fetch(`/api/products/${productId}`)
      .then(res => res.json())
      .then(product => this.setState({
        product: product
      }))
      .catch(err => console.error(err));
  }

  render() {
    return null;
  }
}

export default ProductDetails;
