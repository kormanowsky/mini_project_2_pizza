import React from "react";
import Header from "../blocks/Header";

class DeliveryPage extends React.Component {
    constructor(props) {
        super(props);
        let orderId = parseInt(this.props.urlParams.orderId),
            order = null;
        if (window.localStorage.getItem(`order_${orderId}_items_count`)) {
            order = {
                id: orderId,
                items: JSON.parse(
                    window.localStorage.getItem(`order_${orderId}_items`)
                ),
                count: parseInt(
                    window.localStorage.getItem(`order_${orderId}_items_count`)
                ),
                total: parseInt(
                    window.localStorage.getItem(`order_${orderId}_total`)
                ),
            };
        }
        this.state = {
            order,
        };
    }
    render() {
        if (!this.state.order) {
            return "404";
        }
        return (
            <div className="app app-pizza">
                <Header />
                <main>
                    <section id="section-pizza-info">
                        <div className="container">
                            <h1 className="page-title">
                                Заказ №{this.state.order.id} успешно оформлен!
                            </h1>
                            <h3 className="page-subtitle">
                                Выберите, куда его доставить:
                            </h3>
                            <div className="row">
                                Тут карта
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        );
    }
}

export default DeliveryPage;
