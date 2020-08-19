import React from "react";
import "../../scss/radio.scss";

class Radio extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: this.props.value };
  }

  render() {
    return (
      <div className="radio-container">
        {Object.keys(this.props.values).map((key) => (
          <div
            className="radio"
            data-checked={this.state.value === key}
            onClick={() => {
              this.setState({ value: key }, () => {
                this.props.onChange({
                  value: key,
                });
              });
            }}
          >
            <div className="radio-circle"></div>
            <div className="radio-label">{this.props.values[key]}</div>
          </div>
        ))}
      </div>
    );
  }
}

export default Radio;
