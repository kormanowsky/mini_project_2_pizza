import React from "react";

class PizzaPage extends React.Component {
    render() {
        return <div>Pizza with ID {this.props.pizza.id}</div>;
    }
}

export default PizzaPage;
