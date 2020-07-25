import React from "react";
import Header from "../blocks/Header";
import Footer from "../blocks/Footer";
import { Pizza, ToppingConfiguration } from "../pizza/Pizza";
import { Link } from "react-router-dom";
import Cart from "../../Cart";
import { capitalize } from "../../utils";

class PizzaPage extends React.Component {
    render() {
        return (
            <div className="app app-pizza">
                <Header />
                <main>
                    <section id="section-pizza-info">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-4">
                                    <Pizza
                                        responsive={true}
                                        toppings={this.props.pizza.toppings}
                                    />
                                </div>
                                <div className="col-xs-6">
                                    <div id="pizza-info">
                                        <Link to="/pizzas">&laquo; Пиццы</Link>
                                        <h1>{this.props.pizza.name}</h1>
                                        <h3>Состав</h3>
                                        <p>
                                            {capitalize(
                                                ToppingConfiguration.getDescription(
                                                    this.props.pizza.toppings
                                                )
                                            )}
                                        </p>
                                        <h2>
                                            {this.props.pizza.price}
                                            &nbsp;&#x20bd;
                                        </h2>
                                        <button
                                            className="add-to-card button"
                                            onClick={() =>
                                                Cart.add(
                                                    this.props.pizza
                                                ).then(() => this.forceUpdate())
                                            }
                                        >
                                            В корзину
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                <Footer />
            </div>
        );
    }
}

export default PizzaPage;
