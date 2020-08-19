import React from "react";
import { Link } from "react-router-dom";

class NotFoundPage extends React.Component {
  render() {
    return (
      <div className="app app-not-found d-flex align-items-center text-align-center">
        <div>
          <h1 className="text-align-center accent-font">404</h1>
          <h3 className="text-align-center accent-font">Нет такой страницы</h3>
          <Link to="/">На главную</Link>
        </div>
      </div>
    );
  }
}

export default NotFoundPage;
