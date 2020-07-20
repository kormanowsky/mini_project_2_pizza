import React from "react";
import Sauce from "./Sauce";

class BBQSauce extends React.Component {
    render() {
        return (
            <Sauce
                name="bbq"
                color="#690b0b"
                pizzaSize={this.props.pizzaSize}
                pizzaRadius={this.props.pizzaRadius}
            />
        );
    }
}

export default BBQSauce;
