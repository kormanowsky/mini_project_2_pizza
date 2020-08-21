import React from "react";
import { className } from "../../utils";
import "../../scss/blocks/modal.scss";

class Modal extends React.Component {
  render() {
    return (
      <div className={className({ modalOuter: true, open: this.props.open })}>
        <div
          className={className({
            modal: true,
            open: this.props.open,
          })}
          id={this.props.id}
        >
          {this.props.title ? (
            <h3 className="modal-title margin-top-0">{this.props.title}</h3>
          ) : (
            ""
          )}
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Modal;
