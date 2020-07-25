import React from "react";
import Header from "../blocks/Header";
import Footer from "../blocks/Footer";
import Data from "../../data";
import { Pizza } from "../pizza/Pizza";
import { Link } from "react-router-dom";
import Cart from "../../Cart";

class PizzasPage extends React.Component {
    render() {
        return (
            <div className="app app-pizzas">
                <Header />
                <main>
                    <section id="section-pizzas">
                        <div className="container">
                            <h1 className="page-title">Пиццы</h1>
                            <div className="row">
                                {Data.pizzas.map((pizza) => (
                                    <div
                                        className="col-xs-12 col-md-6 col-lg-4 pizzas-pizza"
                                        key={`pizza-${pizza.id}`}
                                    >
                                        <div className="row">
                                            <div className="col-xs-12 col-md-6">
                                                <Pizza
                                                    toppings={pizza.toppings}
                                                    responsive={true}
                                                />
                                            </div>
                                            <div className="col-xs-12 col-md-6">
                                                <h3>{pizza.name}</h3>
                                                <p>{pizza.price} &#x20bd;</p>
                                                <Link to={`/pizza/${pizza.id}`}>
                                                    Подробнее
                                                </Link>
                                                <button
                                                    onClick={() => {
                                                        Cart.add(pizza);
                                                        this.forceUpdate();
                                                    }}
                                                    className="button"
                                                >В корзину</button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </main>
                <Footer />
            </div>
        );
    }
}

export default PizzasPage;
