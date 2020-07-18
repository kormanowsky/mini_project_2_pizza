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
                    .addPepper()
                    .addOnion()}
                innerRadiusFraction={0.92}
                bgColor="aliceblue"
            ></Pizza>
        </div>
    );
}

export default App;
