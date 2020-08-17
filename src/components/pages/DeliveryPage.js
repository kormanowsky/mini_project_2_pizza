import React from "react";
import Header from "../blocks/Header";
import data from "../../data";
import { YMaps, Map, Circle } from "react-yandex-maps";
import Modal from "../blocks/Modal";

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
      modals: { deliveryUnsupported: false },
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
              <h3 className="page-subtitle">Выберите, куда его доставить:</h3>
              <div className="row">
                <YMaps key={data.keys.yandexMaps}>
                  <Map
                    defaultState={{
                      center: data.projectInfo.geolocation,
                      zoom: 12,
                    }}
                    className="col-xs-12"
                    id="delivery-map"
                    onClick={() =>
                      this.setState({ modals: { deliveryUnsupported: true } })
                    }
                  >
                    <Circle
                      geometry={[data.projectInfo.geolocation, 10000]}
                      options={{
                        draggable: false,
                        fillColor: data.projectInfo.colors.primary,
                        fillOpacity: 0.4,
                        strokeWidth: 0,
                      }}
                      onClick={(event) =>
                        console.log("Delivery to", event.get("coords"))
                      }
                    />
                  </Map>
                </YMaps>
              </div>
              <div>
                <button className="button">Перейти к оплате</button>
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

  componentDidMount() {}
}

export default DeliveryPage;
