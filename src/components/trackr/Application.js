import React, { Component, Fragment } from "react";
import edit from "../../images/edit_icon.svg";
import link from "../../images/link.svg";

import { useState } from "react";
import styled from "styled-components";

export function Application(props) {
  const [clicked, setClicked] = useState(false);

  const extend = (e) => {
    e.stopPropagation();
    if (
      !(
        e.target.id === "edit" ||
        e.target.id === "link" ||
        e.target.id === "textarea"
      )
    ) {
      setClicked((prevClicked) => !prevClicked);
    }
  };

  function getStatus(){
    switch (props.stage) {
      case "1":
        return "Interested";
      case "2":
        return "Applied";
      case "3":
        return "Interview";
      case "4":
        return "Offer";
      default:
        return undefined;
    }
  };

  return (
    <div>
      <Content onClick={(e) => extend(e)} class="content">
        <Top>
          <Left>
            <CompanyName>{props.companyName}</CompanyName>
            <PositionName>{props.position}</PositionName>
          </Left>
          <Center>
            <BorderBox>
              <Status>{getStatus()}</Status> 
              <Slider
                type="range"
                min="0"
                max="3"
                value={props.stage}
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
              <a href={props.link} target="_blank">
                {" "}
                <RBtn id="link">
                  link
                  <Svg src={link}></Svg>
                </RBtn>
              </a>
            </ButtonBox>
          </Right>
        </Top>
        {clicked ? (
          <Extra>
            <Topline>
              <TopText>
                <span style={{ fontWeight: "bold" }}>Date Updated:</span>{" "}
                {props.date}
              </TopText>
              <TopText>
                <span style={{ fontWeight: "bold" }}>Deadline:</span>{" "}
                {props.deadline}{" "}
              </TopText>
              <TopText>
                <span style={{ fontWeight: "bold" }}>Location:</span>{" "}
                {props.location}
              </TopText>
            </Topline>
            <Description>{props.description}</Description>
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

const Content = styled.div`
  background: #ffffff;
  border-radius: 5px;
  padding: 10px 40px;
  margin-top: 10px;
  margin-bottom: 10px;
  &:hover {
    background: #fffd66;
  }
`;

const CompanyName = styled.div`
  font-size: 16px;
  line-height: 22px;
`;

const PositionName = styled.div`
  font-weight: 600;
  font-size: 20px;
  line-height: 22px;
`;

const Slider = styled.input``;

const Left = styled.div`
  width: 50%;
`;
const Center = styled.div`
  padding: 10px;
  display: flex;
`;

const Right = styled.div`
  padding: 10px;
  width: 10vw;
`;

const BorderBox = styled.div`
  border: 2px solid #6175a9;
  box-sizing: border-box;
  border-radius: 15px;
  margin: auto 0px;
`;

const Status = styled.div`
  text-align: center;
  font-weight: 800;
  font-size: 16px;
  line-height: 22px;
  /* identical to box height */

  color: #5c5c5c;
`;

const RBtn = styled.button`
  border: 2px solid #6175a9;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 5px;
  font-weight: 600;
  font-size: 17px;
  line-height: 22px;
  /* identical to box height, or 129% */

  color: #979797;
  background: white;
  margin: auto 2px;
  min-width: 5vw;
  height: 5vh;
`;

const ButtonBox = styled.div`
  margin: auto;
  display: flex;
`;

const Extra = styled.div``;

const Top = styled.div`
  display: flex;
`;

const Topline = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3vh;
`;
const TopText = styled.div`
  color: #5a5a5a;
  margin: 0px 3vw;
`;

const Description = styled.div`
  font-weight: 300;
  font-size: 17px;
  line-height: 23px;
  padding: 10px 0px 10px 0px;
  color: #5a5a5a;
`;
const Notes = styled.textarea`
  font-family: sans-serif;
  border: 2px solid #8191ba;
  box-sizing: border-box;
  border-radius: 14px;
  resize: none;
  padding: 5px;
  width: 100%;
  font-size: 16px;
  line-height: 22px;

  /* RISE colors high fidelity */

  color: #5a5a5a;
`;

const Svg = styled.img``;
