import React from "react";
import Header from "../blocks/Header";
import Order from "../../Order";
import { Redirect } from "react-router-dom";
import OrderItems from "../blocks/OrderItems";
import { humanDate } from "../../utils";
import DeliveryMap from "../blocks/DeliveryMap";

class OrderPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      order: new Order(this.props.urlParams.orderId),
    };
  }

  render() {
    if (!this.state.order.exists) {
      return <Redirect to="/" />;
    }
    return (
      <div className="app app-order">
        <Header />
        <main className="container">
          <h1 className="page-title">Заказ №{this.props.urlParams.orderId}</h1>
          <div className="row">
            <div className="col-xs-12 col-md-6">
              <p className="label">Дата и время</p>
              <h3>{humanDate(this.state.order.datetimeCreated)}</h3>
              <p className="label">Сумма</p>
              <h3>{this.state.order.total} &#x20bd;</h3>
            </div>
            <div className="col-xs-12 col-md-6">
              <p className="label">Место доставки</p>
              <DeliveryMap for="order" order={this.state.order} />
            </div>
          </div>
          <OrderItems useCart={false} items={this.state.order.items} />
        </main>
      </div>
    );
  }
}

export default OrderPage;
