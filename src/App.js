import React from "react";
import { Pizza, ToppingConfiguration } from "./components/Pizza";
import "./App.css";

function App() {
    return (
        <div className="App">
            <Pizza
                size={500}
                toppings={new ToppingConfiguration()
                    .addTomatoes()
                    .addMushrooms()
                    .addPepper()}
                innerRadiusFraction={0.92}
                bgColor="#FFEB3B"
            ></Pizza>
        </div>
    );
}

export default App;
