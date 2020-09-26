import React from 'react';
import ProductListItem from './product-list-item';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  render() {
    return (
      <>
        <div className="row">
          <div className="col-lg">
            <ProductListItem item="Sock" />
            <ProductListItem item="Sock" />
            <ProductListItem item="Sock" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg">
            <ProductListItem item="Sock" />
            <ProductListItem item="Sock" />
            <ProductListItem item="Sock" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg">
            <ProductListItem item="Sock" />
            <ProductListItem item="Sock" />
            <ProductListItem item="Sock" />
          </div>
        </div>
      </>
    );
  }
}

export default ProductList;
