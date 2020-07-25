import React from "react";
import Data from "../../data";
import { Link } from "react-router-dom";

class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-9" id="header-nav">
                            <h3 className="font-pd">
                                <Link to="/">{Data.projectInfo.name}</Link>
                            </h3>
                            <ul id="header-navigation">
                                <li>
                                    <Link to="/pizzas">Пиццы</Link>
                                </li>
                                <li>
                                    <Link to="/builder">Конструктор</Link>
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
                                    {this.props.cart.count} товаров на{" "}
                                    {this.props.cart.total}
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
