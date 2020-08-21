import React from "react";
import Header from "../blocks/Header";
import { Link } from "react-router-dom";
import Order from "../../Order";
import NotFoundPage from "./NotFoundPage";

class OrderAfterDonationPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      order: new Order(this.props.urlParams.orderId),
    };
  }

  render() {
    if (!this.state.order.exists) {
      return <NotFoundPage />
    }
    return (
      <div className="app app-order app-order-after-donation">
        <Header />
        <main className="container">
          <div className="row">
            <h1 className="page-title text-align-center col-xs-12">
              Спасибо за пожертвование!
            </h1>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <p className="text-align-center">
                <Link to={`/order/${this.state.order.id}`} className="button">
                  Перейти к заказу
                </Link>
              </p>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default OrderAfterDonationPage;
