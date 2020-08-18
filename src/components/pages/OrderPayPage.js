import Recact from "react";
import data from "../../data";
import Order from "../../Order";
import { Redirect } from "react-router-dom";
import Header from "../blocks/Header";

class OrderPayPage extends React.Component {
  constructor(props) {
    super(props);
    const order = new Order(this.props.urlParams.orderId);
    this.state = {
      order,
      donationSum: order.total,
      donationTitle: `${data.projectInfo.name}. Пожертвование`,
    };
  }

  render() {
    if (!this.state.order.exists) {
      return <Redirect to="/" />;
    }
    return (
      <div className="app app-order app-order-pay">
        <Header />
        <main>
          <div>
            <h1>Спасибо за Ваш заказ!</h1>
            <h2>
              На этом сайте нет реальной пиццы, это всего лишь работа для
              портфолио. Но если Вы зашли на эту страницу, предлагаю Вам
              оставить пожертвование в размере суммы заказа:
            </h2>
          </div>
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

            <div>
              <p>Номер заказа</p>
              <h4>{this.state.order.id}</h4>
            </div>

            <div>
              <p>Сумма пожертвования</p>
              <h4>
                <input
                  type="number"
                  value={this.state.donationSum}
                  min={this.state.order.total}
                />
              </h4>
            </div>

            <div>
              <p>Способ оплаты</p>
              <label>
                <input type="radio" name="paymentType" value="PC" />
                Яндекс.Деньги
              </label>
              <label>
                <input type="radio" name="paymentType" value="AC" />
                Банковская карта
              </label>
              <label>
                <input type="radio" name="paymentType" value="MC" />
                Баланс мобильного
              </label>
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
