import React from "react";
import Pizza from "../pizza/Pizza";
import Data from "../../data";
import { Link } from "react-router-dom";
import Header from "../blocks/Header";
import Footer from "../blocks/Footer";
import Toppings from "../../Toppings";

class HomePage extends React.Component {
    render() {
        const randomToppings = Toppings.random();
        return (
            <div className="app app-home">
                <Header />
                <main>
                    <section className="container" id="section-home-top">
                        <div className="row" id="home-top-row">
                            <div className="col-xs-9" id="home-top-text">
                                <h1>{Data.projectInfo.name}</h1>
                                <h3>Пиццерия в Чернево-2</h3>
                                <a
                                    href="#/builder"
                                    className="button font-pd"
                                    id="home-go-to-builder"
                                >
                                    Собрать свою пиццу &raquo;
                                </a>
                            </div>
                            <div className="col-xs-3" id="home-top-pizza">
                                <Pizza
                                    toppings={randomToppings}
                                    responsive={true}
                                />
                                <p id="home-top-pizza-caption">
                                    Случайная пицца
                                    <br />
                                    <Link
                                        to={`/builder/${Toppings.configToNumber(
                                            randomToppings
                                        )}`}
                                    >
                                        Хочу такую!
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </section>
                    <section className="container" id="section-news">
                        <div className="section-header">
                            <h2 className="section-title font-pd">
                                Наши пиццы
                            </h2>
                        </div>
                        <div className="row" id="home-new-pizzas">
                            {Data.pizzas.map((pizza) => (
                                <div
                                    className="col-xs-2 home-new-pizza"
                                    key={`pizza-${pizza.id}`}
                                >
                                    <div className="new-pizza-inner">
                                        <Pizza
                                            toppings={pizza.toppings}
                                            responsive={true}
                                        ></Pizza>
                                        <h4 className="new-pizza-title font-pd">
                                            <Link to={`/pizza/${pizza.id}`}>
                                                {pizza.name}{" "}
                                            </Link>
                                        </h4>
                                        <p className="new-pizza-price">
                                            {pizza.price} &#x20bd;
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <p id="home-all-pizzas">
                            <a
                                href="#/pizzas"
                                className="button font-pd"
                                id="home-go-to-builder"
                            >
                                Все пиццы &raquo;
                            </a>
                        </p>
                    </section>
                    <section className="container" id="section-advantages">
                        <div className="section-header">
                            <h2 className="section-title font-pd">
                                Почему {Data.projectInfo.name}?
                            </h2>
                        </div>
                        <div className="row" id="home-advantages">
                            {Data.advantages.map((advantage) => (
                                <div className="col-xs-4 home-advantage">
                                    <div className="advantage-inner">
                                        <img
                                            src={advantage.icon}
                                            alt={advantage.title}
                                            className="advantage-icon"
                                        />
                                        <h3 className="advantage-title font-pd">
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
                            <h2 className="section-title font-pd">Отзывы</h2>
                        </div>
                        <div className="row" id="home-feedbacks">
                            {Data.feedbacks.map((feedback) => (
                                <div className="col-xs-6 home-feedback">
                                    <div className="feedback-inner">
                                        <div className="feedback-header">
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
                                            <h3 className="feedback-content font-pd">
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
                            <h2 className="section-title font-pd">Контакты</h2>
                        </div>
                        <div className="row" id="home-contacts-row">
                            <div
                                className="col-xs-12 col-md-8"
                                id="home-contacts-map"
                            >
                                <iframe
                                    title="Карта"
                                    src="https://yandex.ru/map-widget/v1/?um=constructor%3A7dbe79e036dda60a8ac6773dd57712468c0e0c27fd4cf55ffc34a2ed1580b56d&amp;source=constructor"
                                    width="100%"
                                    height="400"
                                    frameBorder="0"
                                    id="home-contacts-map-iframe"
                                ></iframe>
                            </div>
                            <div
                                className="col-xs-12 col-md-4"
                                id="home-contacts-data"
                            >
                                <h2 className="font-pd">
                                    {Data.projectInfo.name}
                                </h2>
                                <p>
                                    <img
                                        src="/images/map-pin-primary.svg"
                                        alt="Адрес"
                                    ></img>
                                    {Data.projectInfo.address}
                                </p>
                                <p>
                                    <img
                                        src="/images/phone-primary.svg"
                                        alt="Телефон"
                                    ></img>
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
