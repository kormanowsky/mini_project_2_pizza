import React from "react";
import Data from "../../data";
import { Link } from "react-router-dom";
import Cart from "../../Cart";

import "../../scss/blocks/header.scss";
import Conjugator from "../../Conjugator";
import { className } from "../../utils";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileMenuOpen: false,
    };
  }

  render() {
    return (
      <header className="primary-background">
        <div className="container">
          <div className="row">
            <div id="header-nav">
              <ul
                className="margin-0 padding-0 display-flex width-100"
                id="header-navigation"
              >
                <li>
                  <button
                    id="mobile-nav"
                    className="align-items-center justify-content-center"
                    onClick={() =>
                      this.setState({
                        mobileMenuOpen: !this.state.mobileMenuOpen,
                      })
                    }
                  >
                    <img
                      src={
                        this.state.mobileMenuOpen
                          ? "/images/x.svg"
                          : "/images/menu.svg"
                      }
                      alt={this.state.mobileMenuOpen ? "Закрыть" : "Меню"}
                    />
                  </button>
                </li>
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
        <div
          id="mobile-menu"
          className={className({ open: this.state.mobileMenuOpen })}
        >
          <ul>
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
      </header>
    );
  }
}

export default Header;
