import React, { Component, Fragment } from "react";
import App from "./app";

class ApplicationFeed extends React.Component {
  render() {
    return (
      <div>
        <App
          companyName="Facebook"
          position="Software Engineer 2021 Summer Intern"
          status="1"
          link="https://www.linkedin.com/jobs/view/2203322085/?refId=8215620981604709514680&trackingId=OxhduUV3E9J1gHPQXKUkcw%3D%3D"
        />
      </div>
    );
  }
}

export default ApplicationFeed;
