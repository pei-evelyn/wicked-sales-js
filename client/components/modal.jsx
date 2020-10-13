import React from 'react';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: false,
      modalMessage: ''
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    let message = '';
    if (this.props.view === 'catalog') {
      message = 'Please note: This is website is for DEMO purposes only and is not a functioning shop.';
    }
    if (this.props.view === 'checkout') {
      message = 'Please do NOT enter any senstive information (ie. credit card).  This is not an actual checkout. Thank you.';
    }
    this.setState({
      isHidden: false,
      modalMessage: message
    });
  }

  handleClick() {
    this.setState({
      isHidden: true
    });
  }

  render() {
    return (
      <div className={`modal fade ${(!this.state.isHidden ? 'show d-block' : 'd-none')}`} tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Hello there!</h4>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true" onClick={() => this.handleClick()}>&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>{this.state.modalMessage}</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
                onClick={() => this.handleClick()}
              >Close</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
