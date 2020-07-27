import React from "react";
import Header from "../blocks/Header";
import Pizza from "../pizza/Pizza";
import { Link } from "react-router-dom";
import Cart from "../../Cart";
import { capitalize } from "../../utils";
import Toppings from "../../Toppings";

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
                                        <h1 className="page-title">
                                            {this.props.pizza.name}
                                        </h1>
                                        <h3 id="pizza-ingredients-label">
                                            Состав
                                        </h3>
                                        <p id="pizza-ingredients">
                                            {capitalize(
                                                Toppings.description(
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
                                                    Object.assign(
                                                        {},
                                                        this.props.pizza,
                                                        {
                                                            toppings: Toppings.configToNumber(
                                                                this.props.pizza
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
