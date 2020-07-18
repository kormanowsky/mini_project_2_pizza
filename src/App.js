import React from "react";
import { Pizza, ToppingConfiguration } from "./components/Pizza";

function App() {
    return (
        <div className="App">
            <Pizza
                size={1000}
                toppings={new ToppingConfiguration()
                    .addTomatoes()
                    .addMushrooms()}
                innerRadiusFraction={0.92}
            ></Pizza>
        </div>
    );
}

export default App;
