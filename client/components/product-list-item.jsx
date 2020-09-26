import React from 'react';

function ProductListItem(props) {

  return (
    <div className="row">
      <div className="col">
        <div className="card" style={{ width: '18rem' }}>
          <img src="" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.item}</h5>
            <p className="card-text">$0.00</p>
            <p className="card-text">Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Quia, dignissimos?</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductListItem;
