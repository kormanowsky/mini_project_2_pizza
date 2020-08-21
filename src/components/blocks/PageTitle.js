import React from "react";
import { Helmet } from "react-helmet";
import data from "../../data";

class PageTitle extends React.Component {
  render() {
    return (
      <Helmet>
        <title>
          {this.props.title ? `${this.props.title} | ` : ""}
          {data.projectInfo.name}
        </title>
      </Helmet>
    );
  }
}

export default PageTitle;
