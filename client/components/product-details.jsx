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
      .then(product => {
        this.setState({
          product: product
        });
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <a>Back to catalog</a>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <img src="server\public\images\shake-weight.jpg" alt=""/>
          </div>
          <div className="col-6">
            <h1 className="mb-3">Name</h1>
            <h3 className="mb-3">$0.00</h3>
            <p>Product short description: Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Adipisci suscipit provident delectus voluptatibus
              perspiciatis aliquid consectetur. Molestiae?</p>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col">
            <p>Product long description: Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ipsam ipsum reprehenderit illo ipsa provident iure
              repellendus perferendis facere voluptatem, eveniet doloribus excepturi
              consequuntur quam perspiciatis architecto, veniam cupiditate labore
              distinctio laudantium aperiam aliquid. Magni, non ad? Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Sequi, cumque praesentium
              velit quod debitis illo est similique cupiditate laudantium. Facilis?</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetails;
