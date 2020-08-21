import React from "react";
import Header from "../blocks/Header";
import Cart from "../../Cart";
import { Link } from "react-router-dom";
import OrderItems from "../blocks/OrderItems";
import PageTitle from "../blocks/PageTitle";

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
          <a
            href="/"
            onClick={(event) => {
              event.preventDefault();
              Cart.clear();
              this.forceUpdate();
              return false;
            }}
            className="accent-color"
            id="clear-cart"
          >
            Очистить корзину
          </a>
        </div>
      );
    }
    return "";
  }

  render() {
    return (
      <div className="app app-cart">
        <PageTitle title="Корзина" />
        <Header />
        <main className="container">
          <section id="section-cart-main">
            <h1 className="page-title">Корзина</h1>
            <div className="row">
              <div className="col-xs-12">{this.renderTable()}</div>
              {Cart.items.length ? (
                <div className="col-xs-12">
                  <div className="border">
                    <p className="label">Итого</p>
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
