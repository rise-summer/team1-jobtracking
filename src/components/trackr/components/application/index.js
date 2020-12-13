import React, { Component, Fragment } from "react";
import App from "./app";

class ApplicationFeed extends React.Component {
  render() {
    return (
      <div>
        <App companyName = "Facebook" position = "Software Engineer 2021 Summer Intern" status = "1" />
      </div>
    );
  }
}

export default ApplicationFeed;
