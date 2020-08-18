import React from "react";
import Header from "../blocks/Header";
import Order from "../../Order";
import { Redirect } from "react-router-dom";
import OrderItems from "../blocks/OrderItems";

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
          <OrderItems useCart={false} items={this.state.order.items} />
        </main>
      </div>
    );
  }
}

export default OrderPage;
