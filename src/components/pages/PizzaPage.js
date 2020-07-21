import React from "react";
import Header from "../blocks/Header";
import Footer from "../blocks/Footer";

class PizzaPage extends React.Component {
    render() {
        return (
            <div className="app app-pizza">
                <Header />
                <main>Pizza with ID {this.props.pizza.id}</main>
                <Footer />
            </div>
        );
    }
}

export default PizzaPage;
