import React from "react";
import Header from "../blocks/Header";
import Cart from "../../Cart";
import { Pizza, ToppingConfiguration } from "../pizza/Pizza";
import { capitalize } from "../../utils";

class CartPage extends React.Component {
    constructor(props) {
        super(props);
        this.renderTable = this.renderTable.bind(this);
        this.renderItem = this.renderItem.bind(this);
    }

    renderItem(item) {
        return (
            <tr key={`cart-item-${item[1].id}`}>
                <td>{item[1].id}</td>
                <td>
                    <Pizza toppings={item[1].toppings} responsive={true} />
                </td>
                <td>
                    <h4>{item[1].name}</h4>
                    <p>
                        {capitalize(
                            ToppingConfiguration.getDescription(
                                item[1].toppings
                            )
                        )}
                    </p>
                </td>
                <td>{item[1].price} &#x20bd;</td>
                <td>
                    {item[2]}
                    <p
                        onClick={() => {
                            Cart.add(item[1]);
                            this.forceUpdate();
                        }}
                    >
                        Увеличить
                    </p>
                    <p
                        onClick={() => {
                            Cart.remove(item[1]);
                            this.forceUpdate();
                        }}
                    >
                        Уменьшить
                    </p>
                </td>
                <td>{item[1].price * item[2]} &#x20bd;</td>
            </tr>
        );
    }

    renderTable() {
        if (Cart.items.length) {
            return (
                <div>
                    <table id="cart-table">
                        <thead>
                            <tr>
                                <th>ID товара</th>
                                <th>Изображение</th>
                                <th>Описание</th>
                                <th>Цена</th>
                                <th>Количество</th>
                                <th>Стоимость</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Cart.items.map((item) => this.renderItem(item))}
                        </tbody>
                    </table>
                    <p
                        onClick={() => {
                            Cart.clear();
                            this.forceUpdate();
                        }}
                    >
                        Очистить корзину
                    </p>
                </div>
            );
        }
        return <p>В корзине пока ничего нет.</p>;
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
                                        <h2>К оплате</h2>
                                        <h2>{Cart.total} &#x20bd;</h2>
                                        <button
                                            className="button"
                                            onClick={() => {
                                                alert(
                                                    `Оплачено! Номер заказа ${parseInt(
                                                        Math.random() * 899 +
                                                            100
                                                    )} ${parseInt(
                                                        Math.random() * 899 +
                                                            100
                                                    )} ${parseInt(
                                                        Math.random() * 899 +
                                                            100
                                                    )}`
                                                );
                                                Cart.clear();
                                                this.forceUpdate();
                                            }}
                                        >
                                            Оплатить
                                        </button>
                                    </div>
                                ) : (
                                    ""
                                )}
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        );
    }
}

export default CartPage;
