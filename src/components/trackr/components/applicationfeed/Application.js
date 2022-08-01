import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import styled, { css } from "styled-components";
import { Button } from "../../../../styles/shared";
import edit from "../../../../images/edit_icon.svg";
import trash from "../../../../images/trash.svg";
import dots from "../../../../images/three_vertical_dots.svg";
import link_svg from "../../../../images/external_link.svg";
import ButtonDropDown from "./ButtonDropDown";
import { ContentGrid, ContentColumn, Content } from "./style";
import { firestore, auth } from "../../../../firebaseSetup";
import firebase from "../../../../firebaseSetup";
import { ApplicationButton } from "../../../../styles/shared";
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
  getJobs,
}) {
  const [statusRef, setStatusRef] = useState();
  const popupRef = useRef();
  const dropDownRef = useRef();
  const firstRender = useRef(true);
  const [clicked, setClicked] = useState(false);
  const [updatedNotes, setUpdatedNotes] = useState(notes);
  const [updatedStatus, setUpdatedStatus] = useState(app_status);
  const [splitDescription, setSplitDescription] = useState([
    description.substring(0, 100),
    description.substring(100, description.length),
  ]);
  const [time, setTime] = useState(date_updated);
  const [popup, setPopup] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [buttonDrop, setButtonDrop] = useState(false);
  const [buttonColor, setButtonColor] = useState([
    "#6175A9",
    "#61A5A9",
    "#A21660",
    "#9FA216",
    "#61A975",
    "#A99161",
    "#A96199",
  ]);
  const buttonRef = useRef();
  const [readMore, setReadMore] = useState(false);
  const debouncedNotes = useDebounce(updatedNotes);
  const debouncedStatus = useDebounce(updatedStatus);

  const history = useHistory();

  const buttonSvg1 = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
      width="1em"
      height="1em"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
    >
      <g transform="translate(24 0) scale(-1 1)">
        <path
          fill="white"
          d="M20 2H8c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM8 16V4h12l.002 12H8z"
        />
        <path
          fill="white"
          d="M4 8H2v12c0 1.103.897 2 2 2h12v-2H4V8zm11-2h-2v3h-3v2h3v3h2v-3h3V9h-3z"
        />
      </g>
    </svg>
  );
  const buttonSvg2 = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
      width="1em"
      height="1em"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke="white"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="m4 12l6 6L20 6"
      />
    </svg>
  );
  const buttonSvg3 = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
      width="1em"
      height="1em"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
    >
      <g fill="none" stroke="white" stroke-width="2">
        <circle cx="12" cy="7" r="5" />
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M17 14h.352a3 3 0 0 1 2.976 2.628l.391 3.124A2 2 0 0 1 18.734 22H5.266a2 2 0 0 1-1.985-2.248l.39-3.124A3 3 0 0 1 6.649 14H7"
        />
      </g>
    </svg>
  );

  const svgOrder = [
    buttonSvg1,
    buttonSvg2,
    buttonSvg3,
    buttonSvg2,
    buttonSvg1,
    buttonSvg1,
    buttonSvg1,
  ];

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

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (popup && popupRef.current && !popupRef.current.contains(e.target)) {
        setPopup(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [popup]);

  const extend = (e) => {
    e.stopPropagation();
    setClicked((prevClicked) => !prevClicked);
  };
  const handlePopup = (newTime) => {
    // handle popup logic on update
    setPopup(true);
    localStorage.setItem(
      "lastPopupDate",
      JSON.stringify(newTime.toDate().getTime())
    );
    //setPopup(true);
    // update localstorage
  };
  // move checkifclickedoutside to hook
  // popup check ifclickoutside
  // have x button
  // if button to update, history.push(mainfeed, {position, status})
  // make sure new status is pushed!!!

  const getStatus = () => {
    switch (updatedStatus.toString()) {
      case "0":
        return "Interested";
      case "1":
        return "Applied";
      case "2":
        return "Interviewed";
      case "3":
        return "Offered";
      case "4":
        return "Accepted";
      case "5":
        return "Rejected";
      case "6":
        return "Declined";
    }
  };

  const update = async (newNotes, newStatus) => {
    try {
      const newTime = firebase.firestore.Timestamp.now();
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
          date_updated: newTime,
          notes: newNotes,
        })
        .then(() => {
          setTime(newTime);
          if (app_status != newStatus) {
            const lastPopupDate = JSON.parse(
              localStorage.getItem("lastPopupDate")
            );
            if (lastPopupDate !== null) {
              console.log(typeof lastPopupDate);
              const diff =
                Math.abs(newTime.toDate().getTime() - lastPopupDate) / 3600000; // get hour diff between times
              if (diff >= 24) {
                handlePopup(newTime);
              }
            } else {
              handlePopup(newTime);
            }
          }
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
        .delete()
        .then(() => {
          getJobs();
        });
      event.preventDefault();
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
            {time.toDate().toLocaleDateString(undefined, {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
            <br />
            {time.toDate().toLocaleTimeString(undefined, {
              hour: "numeric",
              minute: "numeric",
            })}
          </ContentColumn>
          <ContentColumn
            style={{ position: "relative" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/*<Slider
              ref={setStatusRef}
              type="range"
              min="0"
              max="3"
              value={updatedStatus}
              onChange={(e) => {
                setUpdatedStatus(e.target.value);
              }}
            ></Slider>*/}

            <ApplicationButton
              style={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              drop={buttonDrop}
              color={buttonColor[updatedStatus]}
              onClick={() => setButtonDrop(!buttonDrop)}
              ref={buttonRef}
            >
              {svgOrder[updatedStatus]}{" "}
              <span style={{ marginLeft: "5px" }}>{getStatus(app_status)}</span>
              {buttonDrop && (
                <ButtonDropDown
                  color={
                    buttonColor[updatedStatus ? updatedStatus : app_status]
                  }
                  setUpdatedStatus={setUpdatedStatus}
                  setButtonDrop={setButtonDrop}
                  class={"button--dropdown"}
                />
              )}
            </ApplicationButton>
            <PostPopup ref={popupRef} active={popup}>
              <p style={{ margin: "4px", textAlign: "center" }}>Good job!</p>
              <Button
                onClick={() =>
                  history.push({
                    pathname: "mainfeed",
                    state: {
                      application: JSON.stringify({
                        position: position,
                        app_status: debouncedStatus,
                        company: company,
                      }),
                    },
                  })
                }
                style={{ fontSize: "14px", padding: "4px 8px" }}
                primary
              >
                Share
              </Button>
            </PostPopup>
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
                    width: "170px",
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
                  {link && (
                    <ExternalLink
                      href={link}
                      target="_blank"
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      <RBtn>
                        <Svg src={link_svg}></Svg>
                        <span
                          style={{
                            display: "block",
                            fontSize: "12px",
                            marginLeft: "10px",
                          }}
                        >
                          View Application
                        </span>
                      </RBtn>
                    </ExternalLink>
                  )}
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
            style={{ fontWeight: 400, width: "98%" }}
          >
            {splitDescription[0]}
            {readMore && splitDescription[1]}
            {splitDescription[1] && (
              <ReadMore
                onClick={(e) => {
                  e.stopPropagation();
                  setReadMore(!readMore);
                }}
                style={{ marginLeft: `${!readMore ? "0px" : "3px"}` }}
              >
                {!readMore && (
                  <span style={{ fontWeight: 400, marginLeft: "3px" }}>
                    ...
                  </span>
                )}
                {!readMore ? "Read More" : " Read Less"}
              </ReadMore>
            )}
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
  width: 99%;
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
const PostPopup = styled.div`
  position: absolute;
  top: -80px;
  width: 100%;
  height: 80px;
  transition: 0.3s ease;
  background-color: #fff;
  opacity: 0;
  pointer-events: none;
  box-shadow: 0px 5px 13px -7px #5c5c5c,
    5px 5px 15px 5px rgba(100, 100, 100, 0.1);
  cursor: default;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 4px;

  ${(props) =>
    props.active &&
    `
  opacity:1;
  pointer-events:auto;

  `};
`;
