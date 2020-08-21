import React from "react";
import "../../scss/blocks/checkbox.scss";
import { className } from "../../utils";

class CheckBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { checked: !!this.props.checked };
  }

  render() {
    return (
      <div
        className={className({
          checkbox: true,
          checkboxChecked: this.props.checked,
        })}
        onClick={() => {
          if (!this.props.onChange) {
            return false;
          }
          if (
            this.props.onChange({
              checked: !this.props.checked,
            })
          ) {
            this.setState({ checked: this.props.checked });
          }
        }}
      >
        <img src="/images/check.svg" alt="Чекбокс" />
      </div>
    );
  }
}

export default CheckBox;
