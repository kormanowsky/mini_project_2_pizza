import React from "react";
import Header from "../blocks/Header";
import Footer from "../blocks/Footer";

class PizzasPage extends React.Component {
    render() {
        return (
            <div className="app app-pizzas">
                <Header />
                <main>
                    <section id="section-pizzas">
                        <div className="container">
                            <h1 className="page-title">Пиццы</h1>
                        </div>
                    </section>
                </main>
                <Footer />
            </div>
        );
    }
}

export default PizzasPage;
