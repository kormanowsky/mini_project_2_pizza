import React from "react";
import { Pizza, ToppingConfiguration } from "./components/Pizza";

function App() {
    console.log(new ToppingConfiguration().addTomatoes());
    return (
        <div className="App">
            <Pizza toppings={new ToppingConfiguration().addTomatoes()}></Pizza>
        </div>
    );
}

export default App;
