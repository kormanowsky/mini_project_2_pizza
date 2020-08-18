import React from "react";
import Cart from "../../Cart";
import Pizza from "../pizza/Pizza";
import { capitalize } from "../../utils";
import Toppings from "../../Toppings";

class OrderItems extends React.Component {
  renderItem(item) {
    return (
      <tr key={`cart-item-${item[1].id}`}>
        <td className="cart-pizza-td">
          <Pizza
            toppings={Toppings.numberToConfig(item[1].toppings)}
            responsive={true}
          />
        </td>
        <td className="cart-desc-td">
          <h4 className="font-pd">{item[1].name}</h4>
          <p className="pizza-ingredients color-gray">
            {capitalize(Toppings.numberDescription(item[1].toppings))}
          </p>
        </td>
        <td className="cart-count-td">
          {this.props.useCart ? (
            <p
              onClick={() => {
                Cart.add(item[1]);
                this.forceUpdate();
                if (this.props.onUpdate) {
                  this.props.onUpdate();
                }
              }}
              className="cart-count-control"
            >
              +
            </p>
          ) : (
            ""
          )}
          <p className="cart-count-value">{item[2]} шт.</p>
          {this.props.useCart ? (
            <p
              onClick={() => {
                Cart.remove(item[1]);
                this.forceUpdate();
                if (this.props.onUpdate) {
                  this.props.onUpdate();
                }
              }}
              className="cart-count-control"
            >
              -
            </p>
          ) : (
            ""
          )}
        </td>
        <td className="cart-price-td">
          <h4>{item[1].price * item[2]} &#x20bd;</h4>
        </td>
      </tr>
    );
  }
  render() {
    return (
      <table id="cart-table">
        <tbody>
          {(this.props.useCart ? Cart.items : this.props.items).map((item) =>
            this.renderItem(item)
          )}
        </tbody>
      </table>
    );
  }
}

export default OrderItems;
