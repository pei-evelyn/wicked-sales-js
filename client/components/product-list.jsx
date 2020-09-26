import React from 'react';
import ProductListItem from './product-list-item';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
    this.getProducts = this.getProducts.bind(this);
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts() {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => {
        this.setState({
          products: data
        });
      })
      .catch(err => console.error(err));
  }

  render() {
    const products = this.state.products.map(product =>
      <ProductListItem key={product.productId} product={product} />
    );
    return (
      <div className="container mt-5">
        <div className="row mb-4 d-flex flex-wrap">
          {products}
        </div>
      </div>
    );
  }
}

export default ProductList;
