import React from "react";
import Header from "../blocks/Header";
import Cart from "../../Cart";
import Pizza from "../pizza/Pizza";
import { capitalize } from "../../utils";
import { Link } from "react-router-dom";
import Toppings from "../../Toppings";

class CartPage extends React.Component {
    constructor(props) {
        super(props);
        this.renderTable = this.renderTable.bind(this);
        this.renderItem = this.renderItem.bind(this);
    }

    renderItem(item) {
        return (
            <tr key={`cart-item-${item[1].id}`}>
                <td className="cart-pizza-td">
                    <Pizza
                        toppings={Toppings.numberToConfig(item[1].toppings)}
                        responsive={true}
                    />
                </td>
                <td className="cart-desc-td">
                    <h4 className="font-pd">{item[1].name}</h4>
                    <p className="pizza-ingredients color-gray">
                        {capitalize(
                            Toppings.numberDescription(item[1].toppings)
                        )}
                    </p>
                </td>
                <td className="cart-count-td">
                    <p
                        onClick={() => {
                            Cart.add(item[1]);
                            this.forceUpdate();
                        }}
                        className="cart-count-control"
                    >
                        +
                    </p>
                    <p className="cart-count-value">{item[2]}</p>
                    <p
                        onClick={() => {
                            Cart.remove(item[1]);
                            this.forceUpdate();
                        }}
                        className="cart-count-control"
                    >
                        -
                    </p>
                </td>
                <td className="cart-price-td">
                    <h4>{item[1].price * item[2]} &#x20bd;</h4>
                </td>
            </tr>
        );
    }

    renderTable() {
        if (Cart.items.length) {
            return (
                <div>
                    <table id="cart-table">
                        <tbody>
                            {Cart.items.map((item) => this.renderItem(item))}
                        </tbody>
                    </table>
                    <p
                        onClick={() => {
                            Cart.clear();
                            this.forceUpdate();
                        }}
                        className="color-accent link"
                    >
                        Очистить корзину
                    </p>
                </div>
            );
        }
        return "";
    }

    render() {
        return (
            <div className="app app-cart">
                <Header />
                <main>
                    <section id="section-cart-main">
                        <div className="container">
                            <h1 className="page-title">Корзина</h1>
                            <div className="row">
                                <div className="col-xs-12 col-lg-9">
                                    {this.renderTable()}
                                </div>
                                {Cart.items.length ? (
                                    <div className="col-xs-12 col-lg-3">
                                        <div className="border">
                                            <h2
                                                className="font-pd"
                                                id="cart-total-label"
                                            >
                                                Итого
                                            </h2>
                                            <h2>{Cart.total} &#x20bd;</h2>
                                            <button
                                                className="button"
                                                onClick={() => {
                                                    alert(
                                                        `Заказ № ${parseInt(
                                                            Math.random() *
                                                                899 +
                                                                100
                                                        )} ${parseInt(
                                                            Math.random() *
                                                                899 +
                                                                100
                                                        )} ${parseInt(
                                                            Math.random() *
                                                                899 +
                                                                100
                                                        )} успешно оформлен!`
                                                    );
                                                    Cart.clear();
                                                    this.forceUpdate();
                                                }}
                                            >
                                                Оформить заказ
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    ""
                                )}
                            </div>
                        </div>
                    </section>
                    {Cart.items.length ? (
                        ""
                    ) : (
                        <section id="section-cart-empty">
                            <p className="container align-center">
                                В корзине пока ничего нет.{" "}
                                <Link to="/pizzas">
                                    Выберите пиццу из каталога
                                </Link>{" "}
                                или <Link to="/builder">соберите свою</Link>, а
                                потом добавьте в корзину!
                            </p>
                        </section>
                    )}
                </main>
            </div>
        );
    }
}

export default CartPage;
