import React from "react";
import data from "../../data";
import Order from "../../Order";
import { Redirect } from "react-router-dom";
import Header from "../blocks/Header";
import Radio from "../blocks/Radio";

class OrderPayPage extends React.Component {
  constructor(props) {
    super(props);
    const order = new Order(this.props.urlParams.orderId);
    this.state = {
      order,
      donationSum: order.total,
      donationTitle: `${data.projectInfo.name}. Пожертвование`,
      paymentType: "PC",
    };
  }

  render() {
    if (!this.state.order.exists) {
      return <Redirect to="/" />;
    }
    return (
      <div className="app app-order app-order-pay">
        <Header />
        <main className="container">
          <h1>Спасибо за Ваш заказ!</h1>
          <h3>
            На этом сайте нет реальной пиццы, это всего лишь работа для
            портфолио. <br />
            Так как Вы зашли на эту страницу, предлагаю Вам оставить
            пожертвование в размере суммы заказа:
          </h3>
          <form
            method="POST"
            action="https://money.yandex.ru/quickpay/confirm.xml"
          >
            <input
              type="hidden"
              name="receiver"
              value={data.projectInfo.donationsTarget}
            />

            <input type="hidden" name="quickpay-form" value="donate" />

            <input
              type="hidden"
              name="targets"
              value={this.state.donationTitle}
            />

            <input type="hidden" name="sum" value={this.state.donationSum} />

            <input
              type="hidden"
              name="formcomment"
              value={this.state.donationTitle}
            />

            <input
              type="hidden"
              name="short-dest"
              value={this.state.donationTitle}
            />

            <input type="hidden" name="label" value={this.state.order.id} />

            {/* TODO: real url */}
            <input type="hidden" name="successURL" value="/#/after-donate/" />

            <input
              type="hidden"
              name="paymentType"
              value={this.state.paymentType}
            />

            <div>
              <p>Номер заказа</p>
              <h3>{this.state.order.id}</h3>
            </div>

            <div>
              <p>Сумма пожертвования</p>
              <h3>
                <input
                  type="number"
                  value={this.state.donationSum}
                  min={this.state.order.total}
                  onChange={(event) =>
                    this.setState({
                      donationSum: Math.max(
                        event.target.value,
                        this.state.order.total
                      ),
                    })
                  }
                />
                &nbsp;&#x20bd;
              </h3>
            </div>

            <div>
              <p>Способ оплаты</p>
              <Radio
                values={{
                  PC: "Яндекс.Деньги",
                  AC: "Банковская карта",
                  MC: "Баланс мобильного",
                }}
                value={this.state.paymentType}
                onChange={({ value }) => {
                  this.setState({ paymentType: value });
                }}
              />
            </div>

            <div>
              <p>Комментарий</p>
              <textarea name="comment"></textarea>
            </div>

            <button>Пожертвовать</button>
          </form>
        </main>
      </div>
    );
  }
}
export default OrderPayPage;
