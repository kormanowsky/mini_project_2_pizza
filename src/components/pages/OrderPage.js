import React from "react";
import Header from "../blocks/Header";
import Order from "../../Order";
import OrderItems from "../blocks/OrderItems";
import { humanDate } from "../../utils";
import DeliveryMap from "../blocks/DeliveryMap";
import NotFoundPage from "./NotFoundPage";
import PageTitle from "../blocks/PageTitle";

class OrderPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      order: new Order(this.props.urlParams.orderId),
    };
  }

  render() {
    if (!this.state.order.exists || !this.state.order.destination) {
      return <NotFoundPage />;
    }
    return (
      <div className="app app-order">
        <PageTitle title={`Заказ №${this.state.order.id}`} />
        <Header />
        <main className="container">
          <section>
            <h1 className="page-title">
              Заказ №{this.props.urlParams.orderId}
            </h1>
            <div className="row">
              <div className="col-xs-12 col-md-4">
                <p className="label">Дата и время</p>
                <h3>{humanDate(this.state.order.datetimeCreated)}</h3>
              </div>
              <div className="col-xs-12 col-md-4">
                <p className="label">Сумма</p>
                <h3>{this.state.order.total} &#x20bd;</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <p className="label">Место доставки</p>
                <DeliveryMap for="order" order={this.state.order} />
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <p className="label">Состав заказа</p>
                <OrderItems useCart={false} items={this.state.order.items} />
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default OrderPage;
