import React from "react";
import Header from "../blocks/Header";
import Footer from "../blocks/Footer";
import { Pizza, ToppingConfiguration } from "../pizza/Pizza";
import { Link } from "react-router-dom";
import Cart from "../../Cart";

class PizzaPage extends React.Component {
    render() {
        console.log(this.state);
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
                                <Link to="/pizzas">&laquo; Пиццы</Link>
                                <h1>{this.props.pizza.name}</h1>
                                <h3>Состав</h3>
                                <p>
                                    {ToppingConfiguration.getDescription(
                                        this.props.pizza.toppings
                                    )}
                                </p>
                                <h2>{this.props.pizza.price}&nbsp;&#x20bd;</h2>
                                <button
                                    className="add-to-card button"
                                    onClick={() =>
                                        Cart.add(
                                            this.props.pizza,
                                            this.setState
                                        )
                                    }
                                >
                                    В корзину
                                </button>
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
