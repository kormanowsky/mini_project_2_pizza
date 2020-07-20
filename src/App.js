import React from "react";
import { Pizza, ToppingConfiguration } from "./components/pizza/Pizza";

function App() {
    return (
        <div className="app app-home">
            <main>
                <section className="container" id="section-home-top">
                    <div className="row" id="home-top-row">
                        <div className="col-xs-6" id="home-top-text">
                            <h1>Project 2</h1>
                            <h3>Пиццерия в Чернево-2</h3>
                        </div>
                        <div className="col-xs-6" id="home-top-pizza">
                            <Pizza size={600} />
                            <p style={{ textAlign: "center" }}>
                                <a href="#/builder" className="button">
                                    Собрать свою пиццу &raquo;
                                </a>
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default App;
