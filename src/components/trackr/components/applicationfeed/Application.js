import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import styled, { css } from "styled-components";

import edit from "../../../../images/edit_icon.svg";
//import share from "../../../../images/link.svg";
import trash from "../../../../images/trash.svg";
import dots from "../../../../images/three_vertical_dots.svg";

import party from "party-js";
import { ContentGrid, ContentColumn } from "./style";
import { firestore, auth } from "../../../../firebaseSetup";
import firebase from "../../../../firebaseSetup";
export default function Application({
  link,
  app_status,
  company,
  position,
  id,
  deadline,
  location,
  description,
  notes,
  date_updated,
  sortApplications,
  order,
  sort,
  getJobs,
}) {
  console.log("application loaded");
  const [statusRef, setStatusRef] = useState();
  const dropDownRef = useRef();
  const firstRender = useRef(true);
  const [clicked, setClicked] = useState(false);
  const [updatedNotes, setUpdatedNotes] = useState(notes);
  const [updatedStatus, setUpdatedStatus] = useState(app_status);
  const [splitDescription, setSplitDescription] = useState([
    description.substring(0, 100),
    description.substring(100, description.length),
  ]);
  const [dropDown, setDropDown] = useState(false);
  const [readMore, setReadMore] = useState(false);
  const debouncedNotes = useDebounce(updatedNotes);
  const debouncedStatus = useDebounce(updatedStatus);
  const history = useHistory();

  useLayoutEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
  });

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (
        dropDown &&
        dropDownRef.current &&
        !dropDownRef.current.contains(e.target)
      ) {
        setDropDown(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [dropDown]);

  const extend = (e) => {
    e.stopPropagation();
    setClicked((prevClicked) => !prevClicked);
  };

  function getStatus() {
    switch (updatedStatus.toString()) {
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

  const update = async (newNotes, newStatus) => {
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
          app_status: newStatus,
          date_updated: firebase.firestore.Timestamp.now(),
          notes: newNotes,
        });
    } catch (err) {
      console.log(err);
    }
  };

  const deleteApplication = async (event, id) => {
    try {
      const delete_res = await firestore
        .collection(`jobs/${auth.currentUser.uid}/jobs`)
        .doc(id)
        .delete();
      event.preventDefault();
      getJobs();
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    if (
      !firstRender.current &&
      (debouncedNotes !== notes || app_status !== debouncedStatus)
    ) {
      update(debouncedNotes, debouncedStatus);
    }
  }, [debouncedNotes, debouncedStatus]);

  return (
    <div>
      <Content clicked={clicked} onClick={(e) => extend(e)}>
        <ContentGrid>
          <ContentColumn>{position}</ContentColumn>
          <ContentColumn>{company}</ContentColumn>
          <ContentColumn fontSize="14px">
            {date_updated.toDate().toLocaleDateString(undefined, {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
            <br />
            {date_updated.toDate().toLocaleTimeString(undefined, {
              hour: "numeric",
              minute: "numeric",
            })}
          </ContentColumn>
          <ContentColumn onClick={(e) => e.stopPropagation()}>
            <Status>{getStatus()}</Status>
            <Slider
              ref={setStatusRef}
              type="range"
              min="0"
              max="3"
              value={updatedStatus}
              onChange={(e) => {
                party.confetti(statusRef, {
                  count: party.variation.range(30, 45),
                  spread: party.variation.range(15, 50),

                  color: () =>
                    party.Color.fromHsl(
                      party.random.randomRange(0, 360),
                      100,
                      50
                    ),
                  shapes: [
                    "square",
                    "rectangle",
                    "roundedSquare",
                    "roundedRectangle",
                    "circle",
                  ],
                });
                setUpdatedStatus(e.target.value);
              }}
            />
          </ContentColumn>
          <ContentColumn>
            <ButtonBox style={{ position: "relative" }}>
              <Svg
                style={{ transform: "rotate(90deg)", width: "20px" }}
                onClick={(e) => {
                  e.stopPropagation();
                  setDropDown(!dropDown);
                }}
                src={dots}
              ></Svg>
              {dropDown && (
                <div
                  style={{
                    position: "absolute",
                    bottom: "-70px",
                    zIndex: "10",
                    right: 0,
                    width: "150px",
                    backgroundColor: "#fff",
                    boxShadow:
                      "0px 5px 13px -7px #5c5c5c, 5px 5px 15px 5px rgba(100,100,100,0.1)",
                  }}
                  ref={dropDownRef}
                  onClick={(e) => e.stopPropagation()}
                >
                  <RBtn
                    id="edit"
                    onClick={() =>
                      history.push({
                        pathname: `/trackr/edit1`,
                        state: id,
                      })
                    }
                  >
                    <Svg style={{}} src={edit}></Svg>
                    <span
                      style={{
                        display: "block",
                        fontSize: "12px",
                        marginLeft: "10px",
                      }}
                    >
                      Edit row
                    </span>
                  </RBtn>
                  <RBtn onClick={(event) => deleteApplication(event, id)}>
                    <Svg src={trash}></Svg>
                    <span
                      style={{
                        display: "block",
                        fontSize: "12px",
                        marginLeft: "10px",
                      }}
                    >
                      Delete row
                    </span>
                  </RBtn>
                </div>
              )}
            </ButtonBox>
          </ContentColumn>
        </ContentGrid>
        <Extra clicked={clicked}>
          <Subtitle>
            Deadline:{" "}
            {deadline.toDate().toLocaleDateString() ===
            new Date(0).toLocaleDateString()
              ? "N/A"
              : deadline.toDate().toLocaleDateString()}
          </Subtitle>
          <Subtitle>Location: {location ? `${location}` : "N/A"}</Subtitle>
          {link && (
            <Subtitle>
              <ExternalLink
                onClick={(e) => e.stopPropagation()}
                target="_blank"
                href={link}
              >
                Go to application page.
              </ExternalLink>
            </Subtitle>
          )}
          <Notes
            onClick={(e) => e.stopPropagation()}
            id="textarea"
            placeholder="Notes: 
              Personal application log notes go here. The user can talk about things privately without sharing here. "
            onChange={(e) => setUpdatedNotes(e.target.value)}
          >
            {notes}
          </Notes>
          <Description
            onClick={(e) => e.stopPropagation()}
            style={{ fontWeight: 400 }}
          >
            {splitDescription[0]}
            {readMore && splitDescription[1]}
            <ReadMore
              onClick={(e) => {
                e.stopPropagation();
                setReadMore(!readMore);
              }}
              style={{ marginLeft: `${!readMore ? "0px" : "3px"}` }}
            >
              {!readMore && (
                <span style={{ fontWeight: 400, marginLeft: "3px" }}>...</span>
              )}
              {!readMore ? "Read More" : " Read Less"}
            </ReadMore>
          </Description>
        </Extra>
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
  padding: 10px 0;
  margin: 10px auto;
  min-height: 70px;
  max-height: 70px;
  &:hover {
    background: #eff4fc;
    cursor: pointer;
  }
  transition: all 0.3s ease-out;
  ${({ clicked }) =>
    clicked &&
    css`
      max-height: 4500px;
    `}
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

const Subtitle = styled.p`
  margin: 4px;
  font-size: 12px;
`;

const ExternalLink = styled.a`
  text-decoration: none;
  color: #5c5c5c;
  font-weight: 600;
  transition: 0.3s ease;
  &:hover {
    color: #175596;
  }
`;

const RBtn = styled.button`
  border: none;
  box-sizing: border-box;
  border-radius: 5px;
  display: flex;
  cursor: pointer;
  //font-weight: 600;
  font-size: 11px;
  align-items: center;
  justify-content: flex-start;
  background: #fff;
  width: 100%;
  height: 40px;
  letter-spacing: 1px;
  text-decoration: none;
  :hover {
    background: #ededed;
  }
  transition: all 0.3s ease;
`;

const LinkBtn = styled.a`
  text-decoration: none;
  transition: all 0.3s ease;
`;

const Extra = styled.div`
  margin-left: 40px;
  overflow: hidden;
  opacity: 0;
  max-height: 0px;
  transition: all 0.3s ease-out;
  ${({ clicked }) =>
    clicked &&
    css`
      max-height: 100%;
      opacity: 1;
    `}
`;

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
  &:hover {
    cursor: text;
  }
`;

const ReadMore = styled.span`
  display: inline-block;
  font-weight: 700;
  cursor: pointer;
`;

const Notes = styled.textarea`
  margin-top: 15px;
  font-family: "Open Sans", sans-serif;
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
  height: 50%;
`;

const Arwdiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const A = styled.a`
  color: black;
  transition: all 0.3s ease;
  &:hover {
    color: #175596;
  }
`;
