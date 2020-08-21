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
            <div className="col-xs-12" id="header-nav">
              <ul
                className="margin-0 padding-0 display-flex width-100"
                id="header-navigation"
              >
                <li>
                  <Link to="/">
                    <h3 className="accent-font">{Data.projectInfo.name}</h3>
                  </Link>
                </li>
                <li>
                  <Link to="/pizzas">Пиццы</Link>
                </li>
                <li>
                  <Link to="/builder">Конструктор</Link>
                </li>
                <li>
                  <Link to="/orders">Мои заказы</Link>
                </li>
                <li className="margin-left-auto">
                  <Link to="/cart">
                    <div id="header-cart-info">
                      <img
                        src="/images/shopping-cart.svg"
                        alt="Корзина"
                        id="header-cart-icon"
                      ></img>
                      <p className="margin-0">
                        <span id="header-cart-count">
                          {Cart.count}{" "}
                          {Conjugator.getWordCaseForCount("товар", Cart.count)}{" "}
                          на{" "}
                        </span>
                        {Cart.total}
                        &#x20bd;
                      </p>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
