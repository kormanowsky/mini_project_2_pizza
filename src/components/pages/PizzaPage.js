import React from "react";
import Header from "../blocks/Header";

class PizzaPage extends React.Component {
    render() {
        return (
            <div className="app app-pizza">
                <Header />
                <main>Pizza with ID {this.props.pizza.id}</main>
            </div>
        );
    }
}

export default PizzaPage;
