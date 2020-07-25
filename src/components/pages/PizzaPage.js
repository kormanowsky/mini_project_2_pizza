import React from "react";
import Header from "../blocks/Header";
import Footer from "../blocks/Footer";
import { Pizza, ToppingConfiguration } from "../pizza/Pizza";

class PizzaPage extends React.Component {
    render() {
        return (
            <div className="app app-pizza">
                <Header />
                <main>
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-4">
                                <Pizza
                                    responsive={true}
                                    toppings={this.props.pizza.toppings}
                                />
                            </div>
                            <div className="col-xs-6">
                                <h1>{this.props.pizza.name}</h1>
                                <p>
                                    {ToppingConfiguration.getDescription(
                                        this.props.pizza.toppings
                                    )}
                                </p>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }
}

export default PizzaPage;
