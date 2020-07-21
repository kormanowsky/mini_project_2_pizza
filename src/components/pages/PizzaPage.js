import React from "react";
import Header from "../blocks/Header";
import Footer from "../blocks/Footer";
import { Pizza } from "../pizza/Pizza";

class PizzaPage extends React.Component {
    render() {
        return (
            <div className="app app-pizza">
                <Header />
                <main>
                    <div class="container">
                        <div class="row">
                            <div class="col-xs-4">
                                <Pizza
                                    responsive={true}
                                    toppings={this.props.pizza.toppings}
                                />
                            </div>
                            <div class="col-xs-6">
                                <h1>{this.props.pizza.name}</h1>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }
}

export default PizzaPage;
