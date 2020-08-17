import React from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  useParams,
  useHistory,
} from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import PizzaPage from "./components/pages/PizzaPage";
import CartPage from "./components/pages/CartPage";
import PizzasPage from "./components/pages/PizzasPage";
import BuilderPage from "./components/pages/BuilderPage";
import OrderDeliveryPage from "./components/pages/OrderDeliveryPage";

function WithURLParams(props) {
  let params = useParams(),
    Component = props.component,
    componentProps = Object.assign({}, props);
  delete componentProps.component;
  componentProps["urlParams"] = params;
  return <Component {...componentProps} />;
}

function WithHistory(props) {
  let history = useHistory(),
    Component = props.component,
    componentProps = Object.assign({}, props);
  delete componentProps.component;
  componentProps["history"] = history;
  return <Component {...componentProps} />;
}

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route
            path="/cart"
            exact
            children={<WithHistory component={CartPage} />}
          />
          <Route path="/pizzas" exact component={PizzasPage} />
          <Route path="/builder" exact component={BuilderPage} />
          <Route
            exact
            path="/builder/:toppings"
            children={<WithURLParams component={BuilderPage} />}
          />
          <Route
            exact
            path="/pizza/:id"
            children={<WithURLParams component={PizzaPage} />}
          />
          <Route
            exact
            path="/order/:orderId/delivery"
            children={<WithURLParams component={OrderDeliveryPage} />}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
