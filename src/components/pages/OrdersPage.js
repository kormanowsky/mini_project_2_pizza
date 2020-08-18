import React from "react";
import Header from "../blocks/Header";
import Order from "../../Order";
import { Link } from "react-router-dom";
import moment from "../../moment";

class OrdersPage extends React.Component {
  render() {
    const orders = JSON.parse(window.localStorage.getItem("orders") || "[]");
    return (
      <div className="app app-orders">
        <Header />
        <main className="container">
          <h1 className="page-title">Мои заказы</h1>
          <div className="row with-border">
            {orders.length ? (
              orders.reverse().map((orderId) => {
                const order = new Order(orderId);
                if (!order.exists) {
                  return "";
                }
                return (
                  <div
                    className="orders-order col-xs-12 col-md-6 col-lg-4"
                    key={orderId}
                  >
                    <div className="border">
                      <h2 className="font-pd">
                        <Link to={`/order/${order.id}/`}>
                          Заказ №{order.id}
                        </Link>
                      </h2>
                      <p>Дата и время</p>
                      <h4>
                        {moment(order.datetimeCreated).format(
                          "D MMMM Y года в H:m"
                        )}
                      </h4>
                      <p>Сумма</p>
                      <h4>{order.total} &#x20bd;</h4>
                    </div>
                  </div>
                );
              })
            ) : (
              <p className="container align-center">
                У Вас пока нет заказов.{" "}
                <Link to="/pizzas">Выберите пиццу из каталога</Link> или{" "}
                <Link to="/builder">соберите свою</Link>, добавьте в корзину и
                сделайте заказ!
              </p>
            )}
          </div>
        </main>
      </div>
    );
  }
}

export default OrdersPage;