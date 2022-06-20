import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import edit from "../../../../images/edit_icon.svg";
import link from "../../../../images/link.svg";
import trash from "../../../../images/trash.svg";
import down from "../../../../images/downarrow.svg";
import up from "../../../../images/uparrow.svg";
import axios from "axios";
import { firestore, auth } from "../../../../firebaseSetup";
import firebase from "../../../../firebaseSetup";
export default function Application({
  app_status,
  company,
  position,
  id,
  deadline,
  location,
  description,
  notes,
  date_updated,
}) {
  // console.log(props)
  console.log(
    app_status,
    company,
    position,
    id,
    deadline,
    location,
    description,
    notes,
    date_updated
  );
  const [clicked, setClicked] = useState(false);
  const [updatedNotes, setUpdatedNotes] = useState(notes);
  const debounced = useDebounce(updatedNotes);
  const history = useHistory();

  const extend = (e) => {
    e.stopPropagation();
    setClicked((prevClicked) => !prevClicked);
  };

  function getStatus() {
    switch (app_status.toString()) {
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

  const update = async (newNotes) => {
    try {
      const update_res = firestore
        .collection(`jobs/${auth.currentUser.uid}/jobs`)
        .doc(id)
        .update({
          link: link,
          position: position,
          company: company,
          deadline: deadline,
          location: location,
          description: description,
          app_status: app_status,
          date_updated: firebase.firestore.Timestamp.now(),
          notes: newNotes,
        });
    } catch (err) {
      console.log(err);
    }
  };

  const deleteApplication = async (event, id) => {
    try {
      const delete_res = firestore
        .collection(`jobs/${auth.currentUser.uid}/jobs`)
        .doc(id)
        .delete();
      event.preventDefault();
      console.log(delete_res);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    if (notes !== debounced) {
      update(debounced);
      console.log(debounced);
    }
  }, [debounced]);

  return (
    <div>
      <Content>
        <Top>
          <Left>
            <CompanyName>{company}</CompanyName>
            <PositionName>{position}</PositionName>
          </Left>
          <Center>
            <BorderBox>
              <Status>{getStatus()}</Status>
              <Slider
                type="range"
                min="0"
                max="3"
                value={app_status}
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
                    pathname: `/trackr/edit1`,
                    state: id,
                  })
                }
              >
                <Svg src={edit}></Svg>
              </RBtn>
              <a href={link} target="blank">
                <RBtn id="link">
                  <Svg src={link}></Svg>
                </RBtn>
              </a>
              <RBtn onClick={(event) => deleteApplication(event, id)}>
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
                {date_updated.toDate().toLocaleString()}
              </TopText>
              <TopText>
                <span style={{ fontWeight: "bold" }}>Deadline:</span>{" "}
                {deadline.toDate().toLocaleString()}
              </TopText>
              <TopText>
                <span style={{ fontWeight: "bold" }}>Location:</span> {location}
              </TopText>
            </Topline>
            <Description>{description}</Description>
            <Notes
              id="textarea"
              placeholder="Notes: 
              Personal application log notes go here. The user can talk about things privately without sharing here. "
              onChange={(e) => setUpdatedNotes(e.target.value)}
            >
              {notes}
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

function useDebounce(notes, delay = 500) {
  const [debounced, setDebounced] = useState(notes);
  useEffect(() => {
    const timer = setTimeout(() => setDebounced(notes), delay);
    return () => clearTimeout(timer);
  }, [notes, delay]);
  return debounced;
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
