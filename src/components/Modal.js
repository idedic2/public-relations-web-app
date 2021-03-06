import React from "react";
import "../Modal.css";
import PropTypes from "prop-types";

export default class Modal extends React.Component {
  onClose = e => { if(window.confirm('Do you want to discard this review?'))
    this.props.onClose && this.props.onClose(e);
  };
   handleCancel = e => { 
    this.props.onClose && this.props.onClose(e); 
  }; 
  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div class="irma modal" id="modal">
         <h2>{this.props.valueFromParent.businessName}, {this.props.valueFromParent.address}</h2>
        <div class="irma content">
          {this.props.children}</div>
        <div class="irma  actions">
        <button id="btnCancel" class="irma toggle-button" onClick={this.handleCancel}>
          </button>
          <button class="irma toggle-button" onClick={this.onClose}>
            Close
          </button>
        </div>
      </div>
    );
  }
}
Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired
};
