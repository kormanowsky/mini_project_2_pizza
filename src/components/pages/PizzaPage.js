import React from "react";
import Header from "../blocks/Header";
import Pizza from "../pizza/Pizza";
import { Link } from "react-router-dom";
import Cart from "../../Cart";
import { capitalize } from "../../utils";
import Toppings from "../../Toppings";
import data from "../../data";

class PizzaPage extends React.Component {
    constructor(props) {
        super(props);
        let pizza = data.pizzas.find(
            (pizza) => pizza.id === parseInt(this.props.urlParams.id)
        );
        this.state = {
            pizza,
        };
    }
    render() {
        if (!this.state.pizza) {
            return "404";
        }
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
                                        toppings={this.state.pizza.toppings}
                                    />
                                </div>
                                <div className="col-xs-6">
                                    <div id="pizza-info">
                                        <Link to="/pizzas">&laquo; Пиццы</Link>
                                        <h1 className="page-title">
                                            {this.state.pizza.name}
                                        </h1>
                                        <h3 id="pizza-ingredients-label">
                                            Состав
                                        </h3>
                                        <p id="pizza-ingredients">
                                            {capitalize(
                                                Toppings.description(
                                                    this.state.pizza.toppings
                                                )
                                            )}
                                        </p>
                                        <h2>
                                            {this.state.pizza.price}
                                            &nbsp;&#x20bd;
                                        </h2>
                                        <button
                                            className="add-to-card button"
                                            onClick={() =>
                                                Cart.add(
                                                    Object.assign(
                                                        {},
                                                        this.state.pizza,
                                                        {
                                                            toppings: Toppings.configToNumber(
                                                                this.state.pizza
                                                                    .toppings
                                                            ),
                                                        }
                                                    )
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
            </div>
        );
    }
}

export default PizzaPage;
