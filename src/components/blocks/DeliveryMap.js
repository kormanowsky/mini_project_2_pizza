import React from "react";
import { YMaps, Map, Circle, Placemark } from "react-yandex-maps";
import data from "../../data";

class DeliveryMap extends React.Component {
  renderDeliveryZone() {
    return (
      <div id="delivery-zone" className="col-xs-12">
        <div id="delivery-zone-color"></div>Зона доставки
      </div>
    );
  }
  render() {
    return (
      <div className="row">
        <YMaps key={data.keys.yandexMaps}>
          <Map
            defaultState={{
              center:
                this.props.for === "order"
                  ? this.props.order.destination
                  : data.projectInfo.geolocation,
              zoom: this.props.for === "delivery" ? 12 : 15,
            }}
            className="col-xs-12"
            id="delivery-map"
            onClick={(event) =>
              this.props.for === "delivery" && this.props.onMapClick
                ? this.props.onMapClick(event)
                : false
            }
          >
            {this.props.for !== "order" ? (
              <Circle
                geometry={[data.projectInfo.geolocation, 10000]}
                options={{
                  draggable: false,
                  fillColor: data.projectInfo.colors.primary,
                  fillOpacity: 0.3,
                  strokeWidth: 1,
                  strokeColor: data.projectInfo.colors.primaryDark,
                }}
                onClick={(event) =>
                  this.props.for === "delivery" && this.props.onCircleClick
                    ? this.props.onCircleClick(event)
                    : false
                }
              />
            ) : (
              ""
            )}
            {this.props.for === "order" ? (
              <Placemark
                geometry={this.props.order.destination}
                options={{
                  preset: "islands#circleIcon",
                  iconColor: data.projectInfo.colors.accent,
                }}
              />
            ) : (
              <Placemark
                geometry={data.projectInfo.geolocation}
                options={{
                  preset: "islands#circleDotIcon",
                  iconColor: data.projectInfo.colors.accent,
                }}
                properties={{ iconCaption: data.projectInfo.name }}
              />
            )}
            {this.props.children}
          </Map>
        </YMaps>
        {this.props.for === "homepage" ? (
          <div className="container">
            <div className="row">{this.renderDeliveryZone()}</div>
          </div>
        ) : this.props.for !== "order" ? (
          this.renderDeliveryZone()
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default DeliveryMap;
