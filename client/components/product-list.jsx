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
      .then(products => {
        this.setState({ products: products });
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className="container mt-5 bg-light">
        <div className="row mb-4">
          <div className="col-lg">
            <ProductListItem item="Sock" />
          </div>
          <div className="col-lg">
            <ProductListItem item="Sock" />
          </div>
          <div className="col-lg">
            <ProductListItem item="Sock" />
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-lg">
            <ProductListItem item="Sock" />
          </div>
          <div className="col-lg">
            <ProductListItem item="Sock" />
          </div>
          <div className="col-lg">
            <ProductListItem item="Sock" />
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-lg">
            <ProductListItem item="Sock" />
          </div>
          <div className="col-lg">
            <ProductListItem item="Sock" />
          </div>
          <div className="col-lg">
            <ProductListItem item="Sock" />
          </div>
        </div>
      </div>
    );
  }
}

export default ProductList;
