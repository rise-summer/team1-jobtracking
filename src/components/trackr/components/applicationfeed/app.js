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
  }

  getStatus() {
    switch (this.props.status) {
      case "0":
        return "Interested";
      case "1":
        return "Applied";
      case "2":
        return "Interview";
      case "3":
        return "Offer";
      default:
        console.log("error")
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
                <a href="/trackr/edit1">
                  <RBtn id="edit">
                    edit
                    <Svg src={edit}></Svg>
                  </RBtn>
                </a>
                <a href={this.props.link} target="_blank">
                  {" "}
                  <RBtn id="link">
                    link
                    <Svg src={link}></Svg>
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
              <Notes
                id="textarea"
                placeholder="Notes: 
              Personal application log notes go here. The user can talk about things privately without sharing here. "
              />
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
