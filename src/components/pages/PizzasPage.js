import React from "react";
import Header from "../blocks/Header";
import Data from "../../data";
import Pizza from "../pizza/Pizza";
import { Link } from "react-router-dom";
import Cart from "../../Cart";
import Toppings from "../../Toppings";

class PizzasPage extends React.Component {
  render() {
    return (
      <div className="app app-pizzas">
        <Header />
        <main>
          <section id="section-pizzas">
            <div className="container">
              <h1 className="page-title">Пиццы</h1>
              <div className="row with-border">
                {Data.pizzas.map((pizza) => (
                  <div
                    className="col-xs-12 col-md-6 col-lg-4 pizzas-pizza"
                    key={`pizza-${pizza.id}`}
                  >
                    <div className="row border align-items-center">
                      <div className="col-xs-12 col-md-6">
                        <Pizza toppings={pizza.toppings} responsive={true} />
                      </div>
                      <div className="col-xs-12 col-md-6">
                        <h3 className="font-serif">
                          <Link to={`/pizza/${pizza.id}`}>{pizza.name}</Link>
                        </h3>
                        <button
                          onClick={() => {
                            Cart.add(
                              Object.assign({}, pizza, {
                                toppings: Toppings.configToNumber(
                                  pizza.toppings
                                ),
                              })
                            );
                            this.forceUpdate();
                          }}
                          className="button d-flex align-items-center small"
                          type="button"
                        >
                          <img
                            src="/images/shopping-cart.svg"
                            alt="Добавить в корзину"
                            title="Добавить в корзину"
                            className="icon"
                          ></img>
                          {pizza.price} &#x20bd;
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section id="section-pizzas-builder">
            <p className="container text-align-center">
              Не нашли пиццу по вкусу? <Link to="/builder">Соберите свою!</Link>
            </p>
          </section>
        </main>
      </div>
    );
  }
}

export default PizzasPage;
