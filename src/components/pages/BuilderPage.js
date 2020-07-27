import React from "react";
import Header from "../blocks/Header";
import Pizza from "../pizza/Pizza";
import Cart from "../../Cart";
import data from "../../data";
import CheckBox from "../blocks/Checkbox";
import QueryString from "query-string";
import Toppings from "../../Toppings";

class BuilderPage extends React.Component {
    constructor(props) {
        super(props);
        let toppings = Toppings.empty();
        if (this.props.urlParams && "toppings" in this.props.urlParams) {
            toppings = Toppings.numberToConfig(
                parseInt(this.props.urlParams.toppings)
            );
        }
        this.state = {
            toppings,
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
        let toppingsNumber = Toppings.configToNumber(this.state.toppings);
        let pizzaId = 2 * 10 ** 8 + toppingsNumber;
        let pizza = {
            id: pizzaId,
            toppings: toppingsNumber,
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
                            <h3 className="page-subtitle">
                                Соберите свою пиццу!
                            </h3>
                            <div className="row">
                                <div className="col-xs-12 col-md-5">
                                    <Pizza
                                        toppings={this.state.toppings}
                                        responsive={true}
                                    />
                                </div>
                                <div
                                    className="col-xs-12 col-md-7"
                                    id="builder-data"
                                >
                                    <h2>Основа</h2>
                                    <h4>{data.basePrice} &#x20bd;</h4>
                                    <h2>Начинки</h2>
                                    <div id="builder-toppings">
                                        {Toppings.names().map((topping) => (
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
                                                    onChange={(event) =>
                                                        this.setState({
                                                            toppings: Object.assign(
                                                                this.state
                                                                    .toppings,
                                                                {
                                                                    [topping]:
                                                                        event.checked,
                                                                }
                                                            ),
                                                        })
                                                    }
                                                />
                                                {Toppings.humanNames()[topping]}{" "}
                                                <b>
                                                    {Toppings.prices()[topping]}{" "}
                                                    &#x20bd;
                                                </b>
                                            </div>
                                        ))}
                                    </div>
                                    <h2>Итоговая цена</h2>
                                    <h2 id="builder-total">
                                        {this.getPizzaTotalPrice()} &#x20bd;
                                    </h2>
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
            </div>
        );
    }
}

export default BuilderPage;
