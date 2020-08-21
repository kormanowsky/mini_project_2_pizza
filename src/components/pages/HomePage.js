import React from "react";
import Pizza from "../pizza/Pizza";
import Data from "../../data";
import { Link } from "react-router-dom";
import Header from "../blocks/Header";
import Footer from "../blocks/Footer";
import Toppings from "../../Toppings";
import DeliveryMap from "../blocks/DeliveryMap";
import data from "../../data";

class HomePage extends React.Component {
  render() {
    const randomToppings = Toppings.random();
    return (
      <div className="app app-home">
        <Header />
        <main>
          <section id="section-home-top" className="primary-background">
            <div className="container">
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
                  <Pizza
                    toppings={randomToppings}
                    bgColor={data.projectInfo.colors.primary}
                    responsive={true}
                  />
                  <p className="text-align-center">
                    <Link
                      to={`/builder/${Toppings.configToNumber(randomToppings)}`}
                    >
                      Хочу такую пиццу!
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="container" id="section-news">
            <div className="row align-items-center">
              <h1 className="page-title">Наши пиццы</h1>
              <Link to="/pizzas" id="home-pizzas-link" className="accent-font">
                Все пиццы
              </Link>
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
          </section>
          <section id="section-advantages" className="black-background">
            <div className="container">
              <h1 className="page-title">Почему {Data.projectInfo.name}?</h1>
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
                      <h3 className="advantage-title accent-font margin-top-0">
                        {advantage.title}
                      </h3>
                      <p className="advantage-description">
                        {advantage.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section id="section-feedback" className="primary-background">
            <div className="container">
              <h1 className="page-title">Отзывы</h1>
              <div className="row" id="home-feedbacks">
                {Data.feedbacks.map((feedback, index) => (
                  <div
                    className="col-xs-6 home-feedback"
                    key={`feedback-${index}`}
                  >
                    <div className="feedback-inner">
                      <div className="feedback-header display-flex align-items-center">
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
            </div>
          </section>
          <section id="section-conatcts">
            <div className="container" id="home-contacts-data">
              <h1 className="page-title">Контакты</h1>
              <p>
                <img src="/images/phone-primary.svg" alt="Телефон"></img>
                {Data.projectInfo.phone}
              </p>
              <p>
                <img src="/images/map-pin-primary.svg" alt="Адрес"></img>
                {Data.projectInfo.address}
              </p>
            </div>
            <DeliveryMap for="homepage" />
          </section>
        </main>
        <Footer />
      </div>
    );
  }
}

export default HomePage;
