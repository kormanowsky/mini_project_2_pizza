import React from "react";
import Data from "../../data";
import { Link } from "react-router-dom";
class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="container">
                    <div class="row" id="footer-row">
                        <div class="col-xs-12 col-md-4" id="footer-contacts">
                            <h1>
                                <Link to="/">{Data.projectInfo.name}</Link>
                            </h1>
                            <p>
                                <img
                                    src="/images/map-pin-white.svg"
                                    alt="Адрес"
                                ></img>
                                {Data.projectInfo.address}
                            </p>
                            <p>
                                <img
                                    src="/images/phone-white.svg"
                                    alt="Телефон"
                                ></img>
                                {Data.projectInfo.phone}
                            </p>
                        </div>
                        <div class="col-xs-12 col-md-4 col-md-offset-4">
                            <p>
                                Разработал{" "}
                                <a
                                    href="https://vk.com/kormanowsky"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Михаил Кормановский
                                </a>{" "}
                                в 2020 году.
                            </p>
                            <p>
                                Все данные на этом сайте - вымышленные.
                                Совпадения с реальными данными случайны.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
