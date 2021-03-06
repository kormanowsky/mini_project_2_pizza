import React from "react";
import { Link } from "react-router-dom";
import PageTitle from "../blocks/PageTitle";

class NotFoundPage extends React.Component {
  render() {
    return (
      <div className="app app-not-found display-flex align-items-center text-align-center primary-dark-background">
        <PageTitle title="Ошибка 404" />
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
