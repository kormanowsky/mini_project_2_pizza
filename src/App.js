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
                                Наши новинки
                            </h2>
                        </div>
                        <div className="row">
                            {data.newPizzas.map((pizza) => (
                                <div className="col-xs-3 home-new-pizza">
                                    <div class="new-pizza-inner">
                                        <Pizza
                                            toppings={pizza.toppings}
                                            responsive={true}
                                        ></Pizza>
                                        <h4 className="new-pizza-title font-pd">{pizza.name}</h4>
                                        <p className="new-pizza-price">{pizza.price} &#x20bd;</p>
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
