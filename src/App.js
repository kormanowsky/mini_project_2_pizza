import React from "react";
import { Pizza, ToppingConfiguration } from "./components/pizza/Pizza";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pizzaSize: 0,
        };
    }
    updatePizzaSize() {
        const newPizzaSize =
            document.querySelector("#section-home-top").offsetWidth / 2;
        if (this.state.pizzaSize !== newPizzaSize) {
            this.setState({
                pizzaSize: newPizzaSize,
            });
        }
    }

    componentDidMount() {
        this.updatePizzaSize();
    }

    componentDidUpdate() {
        this.updatePizzaSize();
    }
    makePizza() {
        if (this.state.pizzaSize) {
            return <Pizza size={this.state.pizzaSize}></Pizza>;
        }
        return "";
    }

    render() {
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
                                {this.makePizza()}
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
                    </section>
                </main>
            </div>
        );
    }
}

export default App;
