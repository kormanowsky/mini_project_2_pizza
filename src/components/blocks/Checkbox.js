import React from "react";

class CheckBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = { checked: !!this.props.checked};
    }

    render() {
        return (
            <div
                className="checkbox"
                data-checked={this.state.checked.toString()}
                onClick={(event) => {
                    this.setState({ checked: !this.state.checked });
                    this.props.onChange({
                        checked: this.state.checked,
                    });
                }}
            >
                <img src="/images/check.svg" alt="Чекбокс" />
            </div>
        );
    }
}

export default CheckBox;
