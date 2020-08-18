import React from "react";
import { YMaps, Map, Circle, Placemark } from "react-yandex-maps";
import data from "../../data";

class DeliveryMap extends React.Component {
  render() {
    return (
      <div className="row">
        <YMaps key={data.keys.yandexMaps}>
          <Map
            defaultState={{
              center: data.projectInfo.geolocation,
              zoom: this.props.clickable ? 12 : 15,
            }}
            className="col-xs-12"
            id="delivery-map"
            onClick={(event) =>
              this.props.clickable && this.props.onMapClick
                ? this.onMapClick(event)
                : false
            }
          >
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
                this.props.clickable && this.props.onCircleClick
                  ? this.props.onCircleClick(event)
                  : false
              }
            />
            <Placemark
              geometry={data.projectInfo.geolocation}
              options={{
                preset: "islands#circleDotIcon",
                iconColor: data.projectInfo.colors.accent,
              }}
              properties={{ iconCaption: data.projectInfo.name }}
            />
            {this.props.children}
          </Map>
        </YMaps>
        <div id="delivery-zone" className="col-xs-12">
          <div id="delivery-zone-color"></div>Зона доставки
        </div>
      </div>
    );
  }
}

export default DeliveryMap;
