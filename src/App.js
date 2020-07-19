import React from "react";
import { Pizza, ToppingConfiguration } from "./components/Pizza";
import "./App.css";

function App() {
    return (
        <div className="App">
            <Pizza
                size={600}
                toppings={new ToppingConfiguration()
                    .addTomatoes()
                    .addMushrooms()
                    .addPepper()
                    .addOnion()
                    .addMeat()
                    .addSausages()
                    .addGreens()
                    .removeMushrooms()
                    .addPepperoni()}
                innerRadiusFraction={0.92}
                bgColor="aliceblue"
            ></Pizza>
        </div>
    );
}

export default App;
