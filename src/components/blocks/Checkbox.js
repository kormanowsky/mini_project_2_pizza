import React from "react";
import "../../scss/_checkbox.scss";

class CheckBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { checked: !!this.props.checked };
  }

  render() {
    return (
      <div
        className="checkbox"
        data-checked={this.state.checked.toString()}
        onClick={() => {
          this.setState({ checked: !this.state.checked }, () => {
            this.props.onChange({
              checked: this.state.checked,
            });
          });
        }}
      >
        <img src="/images/check.svg" alt="Чекбокс" />
      </div>
    );
  }
}

export default CheckBox;
