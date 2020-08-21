import React from "react";
import Data from "../../data";
import { Link } from "react-router-dom";
import Cart from "../../Cart";

import "../../scss/blocks/header.scss";
import Conjugator from "../../Conjugator";

class Header extends React.Component {
  render() {
    return (
      <header className="primary-background">
        <div className="container">
          <div className="row">
            <div className="col-xs-9" id="header-nav">
              <h3 className="accent-font">
                <Link to="/">{Data.projectInfo.name}</Link>
              </h3>
              <ul id="header-navigation">
                <li>
                  <Link to="/pizzas">Пиццы</Link>
                </li>
                <li>
                  <Link to="/builder">Конструктор</Link>
                </li>
                <li>
                  <Link to="/orders">Мои заказы</Link>
                </li>
              </ul>
            </div>
            <div className="col-xs-3" id="header-cart-info">
              <img
                src="/images/shopping-cart.svg"
                alt="Корзина"
                id="header-cart-icon"
              ></img>
              <p>
                <Link to="/cart">
                  {Cart.count}{" "}
                  {Conjugator.getWordCaseForCount("товар", Cart.count)} на{" "}
                  {Cart.total}
                  &#x20bd;
                </Link>
              </p>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
