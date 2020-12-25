import React, { Component, Fragment } from "react";
import edit from "../../../../images/edit_icon.svg";
import link from "../../../../images/link.svg";
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
  Extra,
  Top,
  Topline,
  TopText,
  Description,
  Notes,
  Svg,
} from "./style";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
    this.extend = this.extend.bind(this);
    console.log(this.state);
  }

  extend(e) {
    e.stopPropagation();
    if (
      !(
        e.target.id == "edit" ||
        e.target.id == "link" ||
        e.target.id == "textarea"
      )
    ) {
      this.setState({ clicked: !this.state.clicked });
    }
    // console.log(e.target.id);
  }

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
        <Content onClick={(e) => this.extend(e)} class="content">
          <Top>
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
                <RBtn id="edit">
                  edit
                  <a>
                    <Svg src={edit}></Svg>
                  </a>
                </RBtn>
                <a href={this.props.link} target="_blank">
                  {" "}
                  <RBtn id="link">
                    link
                    <a>
                      <Svg src={link}></Svg>
                    </a>
                  </RBtn>
                </a>
              </ButtonBox>
            </Right>
          </Top>
          {this.state.clicked ? (
            <Extra>
              <Topline>
                <TopText>
                  <span style={{ fontWeight: "bold" }}>Date Updated:</span>{" "}
                  {this.props.date}
                </TopText>
                <TopText>
                  <span style={{ fontWeight: "bold" }}>Deadline:</span>{" "}
                  {this.props.deadline}{" "}
                </TopText>
                <TopText>
                  <span style={{ fontWeight: "bold" }}>Location:</span>{" "}
                  {this.props.location}
                </TopText>
              </Topline>
              <Description>{this.props.description}</Description>
              <Notes id="textarea"></Notes>
            </Extra>
          ) : (
            <div></div>
          )}
        </Content>
      </div>
    );
  }
}

export default App;
