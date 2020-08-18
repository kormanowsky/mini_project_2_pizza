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
import OrderPayPage from "./components/pages/OrderPayPage";
import OrdersPage from "./components/pages/OrdersPage";
import OrderPage from "./components/pages/OrderPage";
import OrderAfterDonationPage from "./components/pages/OrderAfterDonationPage";

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
          <Route path="/orders" exact component={OrdersPage} />
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
            path="/order/:orderId"
            children={<WithURLParams component={OrderPage} />}
          />

          <Route
            exact
            path="/order/:orderId/delivery"
            children={<WithURLParams component={OrderDeliveryPage} />}
          />

          <Route
            exact
            path="/order/:orderId/pay"
            children={<WithURLParams component={OrderPayPage} />}
          />

          <Route
            exact
            path="/order/:orderId/after-donation"
            children={<WithURLParams component={OrderAfterDonationPage} />}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
