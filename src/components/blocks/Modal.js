import React from "react";

function className(names) {
  return Object.keys(names)
    .filter((key) => names[key])
    .map((key) => key.replace(/([A-Z])/g, (found) => `-${found.toLowerCase()}`))
    .join(" ");
}

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
            <h3 className="modal-title">{this.props.title}</h3>
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
