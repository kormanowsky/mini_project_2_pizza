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
                            <div className="col-xs-6" id="home-top-text">
                                <h1>{data.projectInfo.name}</h1>
                                <h3>Пиццерия в Чернево-2</h3>
                            </div>
                            <div className="col-xs-6" id="home-top-pizza">
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
                                    <div class="new-pizza-inner">
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
                    <section className="container" id="section-advantages">
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
                                            <h3 class="feedback-content font-pd">
                                                {feedback.content}
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </main>
            </div>
        );
    }
}

export default App;
