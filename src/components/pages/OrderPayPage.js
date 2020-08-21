import React from "react";
import data from "../../data";
import Order from "../../Order";
import { Link } from "react-router-dom";
import Header from "../blocks/Header";
import Radio from "../blocks/Radio";
import NotFoundPage from "./NotFoundPage";
import PageTitle from "../blocks/PageTitle";

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
      return <NotFoundPage />;
    }
    return (
      <div className="app app-order app-order-pay">
        <PageTitle title={`Оплата | Заказ №${this.state.order.id}`} />
        <Header />
        <main className="container  text-align-center">
          <section>
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
              <input
                type="hidden"
                name="successURL"
                value={`/#/order/${this.state.order.id}/after-donation`}
              />

              <input
                type="hidden"
                name="paymentType"
                value={this.state.paymentType}
              />

              <div className="margin-top-0">
                <p className="label">Номер заказа</p>
                <h3 className="margin-0">{this.state.order.id}</h3>
              </div>

              <div>
                <p className="label">Сумма пожертвования</p>
                <h3 className="margin-0">
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
                <p className="label">Способ оплаты</p>
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
                <p className="label">Комментарий</p>
                <textarea name="comment"></textarea>
              </div>

              <button>Пожертвовать</button>
            </form>

            <p>
              <Link to={`/order/${this.state.order.id}`}>
                Не жертвовать, перейти к заказу
              </Link>
            </p>
          </section>
        </main>
      </div>
    );
  }
}
export default OrderPayPage;
