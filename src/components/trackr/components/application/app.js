import React, { Component, Fragment } from "react";
import {
  Content,
  CompanyName,
  PositionName,
  Status,
  Left,
  Center,
  Right,
  BorderBox,
  Slider,
  RBtn,
  ButtonBox,
} from "./style";

class App extends React.Component {
  getStatus() {
    switch (this.props.status) {
      case "1":
        return "Interested";
      case "2":
        return "Applied";
      case "3":
        return "Interview";
      case "4":
        return "Offer";
    }
  }

  render() {
    return (
      <div>
        <Content>
          <Left>
            <CompanyName>{this.props.companyName}</CompanyName>
            <PositionName>{this.props.position}</PositionName>
          </Left>
          <Center>
            <BorderBox>
              <Status>{this.getStatus()}</Status>
              <Slider
                type="range"
                min="0"
                max="3"
                value={this.props.status}
                disabled
              />
            </BorderBox>
          </Center>
          <Right>
            <ButtonBox>
              <RBtn>
                edit{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-pencil-square"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                  <path
                    fill-rule="evenodd"
                    d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                  />
                </svg>
              </RBtn>
              <a href={this.props.link} target="_blank">
                {" "}
                <RBtn>
                  link{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-link"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z" />
                    <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z" />
                  </svg>
                </RBtn>
              </a>
            </ButtonBox>
          </Right>
        </Content>
      </div>
    );
  }
}

export default App;
