import React from "react";
import Sauce from "./Sauce";

class TomatoSauce extends React.Component {
    render() {
        return (
            <Sauce
                name="tomato"
                color="#e50606"
                pizzaSize={this.props.pizzaSize}
                pizzaRadius={this.props.pizzaRadius}
            />
        );
    }
}

export default TomatoSauce;
