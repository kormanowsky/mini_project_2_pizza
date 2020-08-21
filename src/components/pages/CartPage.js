import React from "react";
import Header from "../blocks/Header";
import Cart from "../../Cart";
import { Link } from "react-router-dom";
import OrderItems from "../blocks/OrderItems";

class CartPage extends React.Component {
  constructor(props) {
    super(props);
    this.renderTable = this.renderTable.bind(this);
  }

  renderTable() {
    if (Cart.items.length) {
      return (
        <div>
          <OrderItems useCart={true} onUpdate={() => this.forceUpdate()} />
          <p
            onClick={() => {
              Cart.clear();
              this.forceUpdate();
            }}
            className="color-accent link"
          >
            Очистить корзину
          </p>
        </div>
      );
    }
    return "";
  }

  render() {
    return (
      <div className="app app-cart">
        <Header />
        <main>
          <section id="section-cart-main">
            <div className="container">
              <h1 className="page-title">Корзина</h1>
              <div className="row">
                <div className="col-xs-12 col-lg-9">{this.renderTable()}</div>
                {Cart.items.length ? (
                  <div className="col-xs-12 col-lg-3">
                    <div className="border">
                      <h2 className="accent-font margin-top-0">Итого</h2>
                      <h2>{Cart.total} &#x20bd;</h2>
                      <button
                        className="button"
                        onClick={() => {
                          Cart.checkout().then((order) => {
                            this.props.history.push(
                              `/order/${order.id}/delivery`
                            );
                          });
                          this.forceUpdate();
                        }}
                      >
                        Оформить заказ
                      </button>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </section>
          {Cart.items.length ? (
            ""
          ) : (
            <section id="section-cart-empty">
              <p className="container text-align-center">
                В корзине пока ничего нет.{" "}
                <Link to="/pizzas">Выберите пиццу из каталога</Link> или{" "}
                <Link to="/builder">соберите свою</Link>, а потом добавьте в
                корзину!
              </p>
            </section>
          )}
        </main>
      </div>
    );
  }
}

export default CartPage;
