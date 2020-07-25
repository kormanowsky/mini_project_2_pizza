import React from "react";
import Header from "../blocks/Header";
import Footer from "../blocks/Footer";
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
            <tr>
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
                <td>{item[2]}</td>
                <td>{item[1].price * item[2]} &#x20bd;</td>
            </tr>
        );
    }

    renderTable() {
        if (Cart.items) {
            return (
                <table>
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
                            {this.renderTable()}
                        </div>
                    </section>
                </main>
                <Footer />
            </div>
        );
    }
}

export default CartPage;
