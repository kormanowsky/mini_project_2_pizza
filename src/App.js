import React from "react";
import { Pizza, ToppingConfiguration } from "./components/pizza/Pizza";

function App() {
    return (
        <div className="app app-home">
            <main>
                <section class="container" id="section-home-top">
                    <div class="row" id="home-top-row">
                        <div class="col-xs-8" id="home-top-text">
                            <h1>Project 2</h1>
                        </div>
                        <div class="col-xs-4" id="home-top-pizza">
                            <Pizza size={600} />
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default App;
