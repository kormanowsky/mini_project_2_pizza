import React from "react";
import { Pizza, ToppingConfiguration } from "./components/pizza/Pizza";
import Data from "./data";
import data from "./data";

class App extends React.Component {
    render() {
        return (
            <div className="app app-home">
                <main>
                    <section className="container" id="section-home-top">
                        <div className="row" id="home-top-row">
                            <div className="col-xs-8" id="home-top-text">
                                <h1>{data.projectInfo.name}</h1>
                                <h3>Пиццерия в Чернево-2</h3>
                            </div>
                            <div className="col-xs-4" id="home-top-pizza">
                                <Pizza responsive={true} />
                                <p style={{ textAlign: "center" }}>
                                    <a href="#/builder" className="button">
                                        Собрать свою пиццу &raquo;
                                    </a>
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
                            {data.newPizzas.map((pizza) => (
                                <div className="col-xs-3 home-new-pizza">
                                    <div className="new-pizza-inner">
                                        <Pizza
                                            toppings={pizza.toppings}
                                            responsive={true}
                                        ></Pizza>
                                        <h4 className="new-pizza-title font-pd">
                                            {pizza.name}
                                        </h4>
                                        <p className="new-pizza-price">
                                            {pizza.price} &#x20bd;
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <p id="home-all-pizzas">
                            <a href="/#pizzas" id="home-all-pizzas-link">
                                Все пиццы
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
                            {data.advantages.map((advantage) => (
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
                            {data.feedbacks.map((feedback) => (
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
                                            <h3 className="feedback-content">
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
                        <div className="row">
                            <div
                                className="col-xs-12 col-md-6"
                                id="home-contacts-map"
                            >
                                <iframe
                                    title="Карта"
                                    src="https://yandex.ru/map-widget/v1/?um=constructor%3A7dbe79e036dda60a8ac6773dd57712468c0e0c27fd4cf55ffc34a2ed1580b56d&amp;source=constructor"
                                    width="100%"
                                    height="400"
                                    frameborder="0"
                                    id="home-contacts-map-iframe"
                                ></iframe>
                            </div>
                            <div
                                className="col-xs-12 col-md-6"
                                id="home-contacts-data"
                            >
                                <h2>{Data.projectInfo.name}</h2>
                                <p>{Data.projectInfo.address}</p>
                                <p>{Data.projectInfo.phone}</p>
                            </div>
                        </div>
                    </section>
                </main>
                <footer>
                    <div className="container">
                        <div class="row">
                            <div class="col-xs-12 col-md-4">
                                <h1>{Data.projectInfo.name}</h1>
                                <p>&copy; 2020 {Data.projectInfo.name}</p>
                                <p>{Data.projectInfo.address}</p>
                                <p>{Data.projectInfo.phone}</p>
                            </div>
                            <div class="col-xs-12 col-md-4">
                                <ul>
                                    <li>
                                        <a href="/">Главная</a>
                                    </li>
                                    <li>
                                        <a href="/#pizzas">Пиццы</a>
                                    </li>
                                    <li>
                                        <a href="/#builder">Конструктор</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-xs-12 col-md-4">
                                <p>
                                    Разработка сайта -{" "}
                                    <a
                                        href="https://vk.com/kormanowsky"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Михаил Кормановский
                                    </a>
                                </p>
                                <p>
                                    Все данные на этом сайте - вымышленные.
                                    Совпадения с реальными данными случайны.
                                </p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default App;
