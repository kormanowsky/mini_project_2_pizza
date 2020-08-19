import React from "react";
import Pizza from "../pizza/Pizza";
import Data from "../../data";
import { Link } from "react-router-dom";
import Header from "../blocks/Header";
import Footer from "../blocks/Footer";
import Toppings from "../../Toppings";
import DeliveryMap from "../blocks/DeliveryMap";

class HomePage extends React.Component {
  render() {
    const randomToppings = Toppings.random();
    return (
      <div className="app app-home">
        <Header />
        <main>
          <section className="container" id="section-home-top">
            <div className="row align-items-center">
              <div className="col-xs-9" id="home-top-text">
                <h1>{Data.projectInfo.name}</h1>
                <h3>Пиццерия в Чернево-2</h3>
                <a
                  href="#/builder"
                  className="button accent-font"
                  id="home-go-to-builder"
                >
                  Собрать свою пиццу &raquo;
                </a>
              </div>
              <div className="col-xs-3" id="home-top-pizza">
                <Pizza toppings={randomToppings} responsive={true} />
                <p className="text-align-center">
                  Случайная пицца
                  <br />
                  <Link
                    to={`/builder/${Toppings.configToNumber(randomToppings)}`}
                  >
                    Хочу такую!
                  </Link>
                </p>
              </div>
            </div>
          </section>
          <section className="container" id="section-news">
            <div className="section-header">
              <h2 className="section-title accent-font">Наши пиццы</h2>
            </div>
            <div className="row" id="home-new-pizzas">
              {Data.pizzas.map((pizza) => (
                <div
                  className="col-xs-2 home-new-pizza"
                  key={`pizza-${pizza.id}`}
                >
                  <div className="new-pizza-inner">
                    <Pizza toppings={pizza.toppings} responsive={true}></Pizza>
                    <h4 className="new-pizza-title accent-font">
                      <Link to={`/pizza/${pizza.id}`}>{pizza.name} </Link>
                    </h4>
                    <p className="new-pizza-price">{pizza.price} &#x20bd;</p>
                  </div>
                </div>
              ))}
            </div>
            <p id="home-all-pizzas">
              <a
                href="#/pizzas"
                className="button accent-font"
                id="home-go-to-builder"
              >
                Все пиццы &raquo;
              </a>
            </p>
          </section>
          <section className="container" id="section-advantages">
            <div className="section-header">
              <h2 className="section-title accent-font">
                Почему {Data.projectInfo.name}?
              </h2>
            </div>
            <div className="row" id="home-advantages">
              {Data.advantages.map((advantage, index) => (
                <div
                  className="col-xs-4 home-advantage"
                  key={`advantage-${index}`}
                >
                  <div className="advantage-inner">
                    <img
                      src={advantage.icon}
                      alt={advantage.title}
                      className="advantage-icon"
                    />
                    <h3 className="advantage-title accent-font">
                      {advantage.title}
                    </h3>
                    <p className="advantage-description">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
          <section className="container" id="section-feedback">
            <div className="section-header">
              <h2 className="section-title accent-font">Отзывы</h2>
            </div>
            <div className="row" id="home-feedbacks">
              {Data.feedbacks.map((feedback, index) => (
                <div
                  className="col-xs-6 home-feedback"
                  key={`feedback-${index}`}
                >
                  <div className="feedback-inner">
                    <div className="feedback-header d-flex align-items-center">
                      <img
                        src="/images/user.svg"
                        alt={feedback.userName}
                        className="feedback-user-picture"
                      />
                      <div className="feedback-user-data">
                        <h5>{feedback.userName}</h5>
                        <p>{feedback.date}</p>
                      </div>
                    </div>
                    <div className="feedback-main">
                      <h3 className="feedback-content accent-font">
                        {feedback.content}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
          <section className="container" id="section-conatcts">
            <div className="section-header">
              <h2 className="section-title accent-font">Контакты</h2>
            </div>

            <div className="row align-items-center">
              <div className="col-xs-12 col-md-8" id="home-contacts-map">
                <DeliveryMap for="homepage" />
              </div>
              <div className="col-xs-12 col-md-4" id="home-contacts-data">
                <h2 className="accent-font">{Data.projectInfo.name}</h2>
                <p>
                  <img src="/images/map-pin-primary.svg" alt="Адрес"></img>
                  {Data.projectInfo.address}
                </p>
                <p>
                  <img src="/images/phone-primary.svg" alt="Телефон"></img>
                  {Data.projectInfo.phone}
                </p>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }
}

export default HomePage;
