import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import Data from "./data";
import PizzaPage from "./components/pages/PizzaPage";
class App extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact>
                        <HomePage />
                    </Route>
                    {Data.pizzas.map((pizza) => (
                        <Route path={`/pizza/${pizza.id}`} exact key={`route-pizza-${pizza.id}`}>
                            <PizzaPage pizza={pizza} />
                        </Route>
                    ))}
                </Switch>
            </Router>
        );
    }
}

export default App;
