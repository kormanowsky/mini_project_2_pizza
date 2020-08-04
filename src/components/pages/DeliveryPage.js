import React from "react";
import Header from "../blocks/Header";
import data from "../../data";
import { YMaps, Map, Circle } from "react-yandex-maps";

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
                      zoom: 15,
                      behaviors: ["drag"],
                    }}
                    className="col-xs-12"
                    id="delivery-map"
                  >
                    <Circle
                      geometry={[data.projectInfo.geolocation, 10000]}
                      options={{
                        draggable: true,
                        fillColor: data.projectInfo.colors.primary,
                        fillOpacity: 0.4,
                      }}
                    />
                  </Map>
                </YMaps>
              </div>
              <div>
                <button className="button">Перейти к оплате</button>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }

  componentDidMount() {}
}

export default DeliveryPage;
