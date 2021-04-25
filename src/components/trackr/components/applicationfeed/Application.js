import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import moment from "moment";
import styled from "styled-components";

import edit from "../../../../images/edit_icon.svg";
import link from "../../../../images/link.svg";
import trash from "../../../../images/trash.svg";
import down from "../../../../images/downarrow.svg";
import up from "../../../../images/uparrow.svg";

import axios from "axios";
import { auth } from "../../../firebaseSetup";

export default function Application(props) {
  const [clicked, setClicked] = useState(false);
  const history = useHistory();

  const extend = (e) => {
    e.stopPropagation();
    setClicked((prevClicked) => !prevClicked);
  };

  function getStatus() {
    switch (props.stage) {
      case "0":
        return "Interested";
      case "1":
        return "Applied";
      case "2":
        return "Interview";
      case "3":
        return "Offer";
      default:
        return undefined;
    }
  }

  const deleteJob = async (event, jobId, deleteApplication) => {
    try {
      deleteApplication(jobId);
      event.preventDefault();

      const token = await auth.currentUser.getIdToken();
      const res = await axios.delete(`/api/job/delete/${jobId}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Content>
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
              <RBtn
                id="edit"
                onClick={() =>
                  history.push({
                    pathname: `/trackr/edit1/${props.id}`,
                    state: JSON.stringify(props),
                  })
                }
              >
                <Svg src={edit}></Svg>
              </RBtn>
              <a href={props.link} target="blank">
                <RBtn id="link">
                  <Svg src={link}></Svg>
                </RBtn>
              </a>
              <RBtn
                onClick={(event) =>
                  deleteJob(event, props.id, props.deleteApplication)
                }
              >
                <Svg src={trash}></Svg>
              </RBtn>
            </ButtonBox>
          </Right>
        </Top>
        {clicked ? (
          <Extra>
            <Topline>
              <TopText>
                <span style={{ fontWeight: "bold" }}>Date Updated:</span>{" "}
                {moment(props.date).format("MM/DD/YY")}
              </TopText>
              <TopText>
                <span style={{ fontWeight: "bold" }}>Deadline:</span>{" "}
                {moment(props.deadline).format("MM/DD/YY")}
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
            >
              {props.notes}
            </Notes>
            <Arwdiv onClick={(e) => extend(e)}>
              <img src={up} />
            </Arwdiv>
          </Extra>
        ) : (
          <Arwdiv onClick={(e) => extend(e)}>
            <img src={down} />
          </Arwdiv>
        )}
      </Content>
    </div>
  );
}

const Content = styled.div`
  background: #ffffff;
  border-radius: 5px;
  padding: 5px 40px;
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

const Left = styled.div`
  width: 80%;
`;
const Center = styled.div`
  padding: 10px;
  display: flex;
`;

const Right = styled.div`
  //padding: 10px;
  width: 100px;
  display: flex;
  //flex-direction: column;
`;

const BorderBox = styled.div`
  border: 2px solid #6175a9;
  box-sizing: border-box;
  border-radius: 10px;
  margin: auto 0px;
  height: 53px;
`;

const Slider = styled.input`
  height: 5px;
`;

const Status = styled.div`
  text-align: left;
  font-weight: 600;
  font-size: 13px;
  line-height: 22px;
  /* identical to box height */
  color: #5c5c5c;
  margin: 2px auto auto 10px;
`;

const ButtonBox = styled.div`
  margin: auto;
  display: block;
`;

const RBtn = styled.button`
  border: none;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 5px;
  //font-weight: 600;
  font-size: 11px;
  /* justify-content: center; */
  /* text-align: center; */
  align-content: center;
  background: #ededed;
  margin: 5px 2px;
  width: 60px;
  height: 23px;
  letter-spacing: 1px;
  display: flex;
  text-decoration: none;
  :hover {
    background: #c0c0c0;
  }
`;

const LinkBtn = styled.a`
  text-decoration: none;
`;

const Extra = styled.div``;

const Top = styled.div`
  display: flex;
  /* height: 100px; */
`;

const Topline = styled.div`
  margin-top: 3vh;
  display: flex;
  justify-content: space-between;
`;

const TopText = styled.div`
  color: #5a5a5a;
  margin: 0px 3vw;
  font-size: 13px;
`;

const Description = styled.div`
  font-weight: 300;
  font-size: 12px;
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
  padding: 10px;
  width: 100%;
  min-height: 80px;
  font-size: 12px;
  line-height: 15px;
  /* RISE colors high fidelity */
  color: #5a5a5a;
  border-radius: 10px;
  outline: none;
`;

const Svg = styled.img`
  width: 80%;
  height: 80%;
`;

const Arwdiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
