import React from "react";
import Header from "../blocks/Header";
import Footer from "../blocks/Footer";
import { Pizza, ToppingConfiguration } from "../pizza/Pizza";
import Cart from "../../Cart";
import data from "../../data";
import CheckBox from "../blocks/Checkbox";

class BuilderPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toppings: new ToppingConfiguration().emptyConfiguration(),
        };

        this.getPizzaTotalPrice = this.getPizzaTotalPrice.bind(this);
        this.addToCart = this.addToCart.bind(this);
    }

    getPizzaTotalPrice() {
        let activeToppings = Object.keys(this.state.toppings).filter(
            (item) => this.state.toppings[item]
        );
        if (!activeToppings.length) {
            return data.basePrice;
        }
        return (
            data.basePrice +
            activeToppings
                .map((topping) => data.toppingPrices[topping])
                .reduce((a, b) => a + b)
        );
    }

    addToCart() {
        let pizzaId = 0;
        Object.keys(this.state.toppings).forEach((value, index) => {
            if (this.state.toppings[value]) {
                pizzaId += 2 ** index;
            }
        });
        pizzaId += 2 * 10 ** (Object.keys(this.state.toppings).length + 2);
        let pizza = {
            id: pizzaId,
            toppings: this.state.toppings,
            price: this.getPizzaTotalPrice(),
            name: "Ваша пицца",
        };
        Cart.add(pizza);
        this.forceUpdate();
    }

    render() {
        return (
            <div className="app app-builder">
                <Header />
                <main>
                    <section id="section-builder">
                        <div className="container">
                            <h1 className="page-title">Конструктор</h1>
                            <h3>Соберите свою пиццу!</h3>
                            <div className="row">
                                <div className="col-xs-12 col-md-6">
                                    <Pizza
                                        toppings={this.state.toppings}
                                        responsive={true}
                                    />
                                </div>
                                <div className="col-xs-12 col-md-6">
                                    <h2>Основа</h2>
                                    <h4>{data.basePrice} &#x20bd;</h4>
                                    <h2>Начинки</h2>
                                    <div id="builder-toppings">
                                        {Object.keys(this.state.toppings).map(
                                            (topping) => (
                                                <div
                                                    className="builder-topping"
                                                    key={topping}
                                                >
                                                    <CheckBox
                                                        checked={
                                                            this.state.toppings[
                                                                topping
                                                            ]
                                                        }
                                                        onChange={(event) => {
                                                            console.log(event);
                                                            this.setState({
                                                                toppings: Object.assign(
                                                                    this.state
                                                                        .toppings,
                                                                    {
                                                                        [topping]:
                                                                            event.checked,
                                                                    }
                                                                ),
                                                            });
                                                        }}
                                                    />
                                                    {data.toppings[topping]}{" "}
                                                    <b>
                                                        {
                                                            data.toppingPrices[
                                                                topping
                                                            ]
                                                        }{" "}
                                                        &#x20bd;
                                                    </b>
                                                </div>
                                            )
                                        )}
                                    </div>
                                    <h2>Итоговая цена</h2>
                                    {this.getPizzaTotalPrice()} &#x20bd;
                                    <button
                                        className="button"
                                        onClick={this.addToCart}
                                    >
                                        Добавить в корзину
                                    </button>
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

export default BuilderPage;