import React from "react";
import Data from "../../data";
import { Link } from "react-router-dom";
import "../../scss/blocks/footer.scss";

class Footer extends React.Component {
  render() {
    return (
      <footer className="primary-dark-background">
        <div className="container">
          <div className="row align-items-center" id="footer-row">
            <div className="col-xs-12 col-md-4" id="footer-contacts">
              <h1>
                <Link to="/">{Data.projectInfo.name}</Link>
              </h1>
              <p>
                <img src="./images/map-pin-white.svg" alt="Адрес"></img>
                {Data.projectInfo.address}
              </p>
              <p>
                <img src="./images/phone-white.svg" alt="Телефон"></img>
                {Data.projectInfo.phone}
              </p>
            </div>
            <div className="col-xs-12 col-md-4 col-md-offset-4">
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
                Все данные на этом сайте - вымышленные. Совпадения с реальными
                данными случайны.
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
