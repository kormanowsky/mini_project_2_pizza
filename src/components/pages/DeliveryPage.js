import React from "react";
import Header from "../blocks/Header";

class DeliveryPage extends React.Component {
    constructor(props) {
        super(props);
        let orderId = parseInt(this.props.urlParams.orderId),
            order = null;
        if (
            this.getOrderInfo(orderId, "items_count") &&
            !this.getOrderInfo(orderId, "destination")
        ) {
            order = {
                id: orderId,
                items: JSON.parse(this.getOrderInfo(orderId, "items")),
                count: parseInt(this.getOrderInfo(orderId, "items_count")),
                total: parseInt(this.getOrderInfo(orderId, "total")),
            };
        }
        this.state = {
            order,
        };
    }

    getOrderInfo(id, key) {
        return window.localStorage.getItem(`order_${id}_${key}`);
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
                            <div className="row">Тут карта</div>
                            <pre>
                                {JSON.stringify(this.state.order, null, 4)}
                            </pre>
                            <div>
                                <button className="button">
                                    Перейти к оплате
                                </button>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        );
    }
}

export default DeliveryPage;
