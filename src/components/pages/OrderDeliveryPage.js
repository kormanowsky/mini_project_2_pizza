import React from "react";
import Header from "../blocks/Header";
import data from "../../data";
import { Placemark } from "react-yandex-maps";
import Modal from "../blocks/Modal";
import { Redirect, Link } from "react-router-dom";
import Order from "../../Order";
import DeliveryMap from "../blocks/DeliveryMap";

class OrderDeliveryPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      order: new Order(this.props.urlParams.orderId),
      modals: { deliveryUnsupported: false },
      doRedirect: true,
    };

    this.setOrderDestination = this.setOrderDestination.bind(this);
  }

  setOrderDestination(destination) {
    this.setState({
      doRedirect: false,
      order: Object.assign(this.state.order, { destination }),
    });
  }

  render() {
    if (!this.state.order.exists) {
      return <Redirect to="/" />;
    } else if (this.state.order.destination) {
      if (this.state.doRedirect) {
        return <Redirect to={`/order/${this.state.order.id}`} />;
      }
    }
    return (
      <div className="app app-order app-order-delivery">
        <Header />
        <main>
          <section id="section-pizza-info">
            <div className="container">
              <h1 className="page-title">
                Заказ №{this.state.order.id} успешно оформлен!
              </h1>
              <h3 className="page-subtitle">
                Покажите на карте, куда необходимо доставить заказ:
              </h3>
              <DeliveryMap
                for="delivery"
                onMapClick={() =>
                  this.setState({ modals: { deliveryUnsupported: true } })
                }
                onCircleClick={(event) =>
                  this.setOrderDestination(event.get("coords"))
                }
              >
                <Placemark
                  geometry={this.state.order.destination}
                  options={{
                    preset: "islands#circleIcon",
                    iconColor: data.projectInfo.colors.accent,
                  }}
                />
              </DeliveryMap>

              <div className="row">
                <div className="col-xs-12">
                  <Link
                    to={`/order/${this.state.order.id}/pay`}
                    className="button"
                    disabled={!this.state.order.destination}
                  >
                    Перейти к оплате
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <Modal
            id="delivery-unsupported-modal"
            open={this.state.modals.deliveryUnsupported}
            title="Предупреждение"
          >
            <p>Доставка в данную точку не поддерживается.</p>
            <button
              onClick={() =>
                this.setState({ modals: { deliveryUnsupported: false } })
              }
            >
              Понятно
            </button>
          </Modal>
        </main>
      </div>
    );
  }
}

export default OrderDeliveryPage;
