import React, { Fragment, useContext, useState, useEffect } from "react";
import Navigation from "../navigation";
import { SearchBar } from "../navigation/style";
import { useHistory } from "react-router-dom";
import {
  MainBody,
  BackgroundDiv,
  Headding,
  Title,
  NewAppBtnDiv,
  NewAppBtn,
  Sort,
  ContentDiv,
  Option,
  HeadingContent,
  SortContainer,
  Arrow,
  ArrowContainer,
  CustomSortContainer,
  CustomSortArrow,
  CustomSortButton,
  CustomSortOptions,
  // ProfileDiv,
  // Name,
  // EditBtn,
  // ExitBtn,
  // BtnDiv,
  // Info,
  // HashTagDiv,
  // HashTag,
  // SearchDiv,
  // Searches,
  // ViewPostBtnDiv,
  // ViewPostBtn,
  // SearchTitle,
  // InfoPrompt,
  // InfoDiv,
} from "./style";
import Application from "./components/applicationfeed/Application";
import EmptyApplication from "./components/applicationfeed/emptyapplication";
import { AuthenticationContext } from "../../AuthenticationContext";
import { firestore } from "../../firebaseSetup";
import { useCollectionData } from "react-firebase-hooks/firestore";

export default function Trackr(props) {
  let history = useHistory();
  const { authentication, setAuthentication } = useContext(
    AuthenticationContext
  );
  const applicationRef = firestore
    .collection(`jobs/${authentication["uid"]}/jobs`)
    .orderBy("date_updated", "asc");
  let [applicationsInitialValue] = useCollectionData(applicationRef, {
    idField: "id",
  });
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search);
  const [applications, setApplications] = useState();
  const [order, setOrder] = useState("ASC");
  const [sort, setSort] = useState("UPDATED");
  useEffect(() => {
    //setApplications(sortApplications(order, sort, applicationsInitialValue));
    if (applicationsInitialValue) {
      sortApplications(order, sort, applicationsInitialValue);
    }
  }, [applicationsInitialValue]);
  useEffect(() => {
    if (applications) sortApplications(order, sort, applications);
  }, [order, sort]);
  function sortApplications(order, sort, applications) {
    console.log("called");
    let updatedApplications = [...applications];
    switch (sort) {
      case "DEADLINE":
        console.log("sort by deadline from furthest to closest");
        updatedApplications.sort((a, b) => {
          let aDate = a.deadline.toDate();
          let bDate = b.deadline.toDate();
          if (aDate.getTime() === new Date(0).getTime()) return bDate;
          if (aDate.getTime() === new Date(0).getTime()) return aDate;
          return order === "ASC" ? aDate - bDate : bDate - aDate;
        });
        setApplications(updatedApplications);
        break;
      case "STATUS":
        console.log("sort by status (interested => offer)");
        updatedApplications.sort((a, b) => {
          return order === "ASC"
            ? a.app_status - b.app_status
            : b.app_status - a.app_status;
        });
        setApplications(updatedApplications);
        break;
      case "UPDATED":
        updatedApplications.sort((a, b) => {
          let aDate = a.date_updated.toDate();
          let bDate = b.date_updated.toDate();
          return order === "ASC" ? aDate - bDate : bDate - aDate;
        });
        setApplications(updatedApplications);
        break;
      default:
        return undefined;
    }
  }
  useEffect(() => {
    if (debouncedSearch !== "") {
      history.push("/mainfeed", { searchValue: debouncedSearch });
    }
  }, [debouncedSearch]);
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  // if search is used, redirect to
  return (
    <Fragment>
      <MainBody>
        <Navigation>
          <SearchBar onChange={(e) => handleSearch(e)} />
        </Navigation>
        <BackgroundDiv>
          <ContentDiv>
            <Headding>
              <HeadingContent>
                <Title>Your Applications</Title>
                <NewAppBtnDiv>
                  <NewAppBtn
                    onClick={() => {
                      console.log("push");
                      history.push("/trackr/track1");
                    }}
                  >
                    New App
                  </NewAppBtn>
                </NewAppBtnDiv>
                <SortContainer>
                  <Sort onChange={(e) => setSort(e.target.value)}>
                    <Option value="UPDATED">Sort by recently updated</Option>
                    <Option value="DEADLINE"> Deadline</Option>
                    <Option value="STATUS"> Status</Option>
                  </Sort>
                  <ArrowContainer>
                    <Arrow
                      style={{
                        color: `${order === "ASC" ? "#175596" : "black"}`,
                      }}
                      onClick={() => setOrder("ASC")}
                    >
                      ▲
                    </Arrow>
                    <Arrow
                      style={{
                        color: `${order === "DESC" ? "#175596" : "black"}`,
                      }}
                      onClick={() => setOrder("DESC")}
                    >
                      ▼
                    </Arrow>
                  </ArrowContainer>
                </SortContainer>
              </HeadingContent>
            </Headding>
            {applications && applications.length === 0 ? (
              <EmptyApplication></EmptyApplication>
            ) : (
              applications &&
              applications.map((application) => (
                <Application
                  key={application.id}
                  {...application}
                  sortApplications={sortApplications}
                />
              ))
            )}
          </ContentDiv>
        </BackgroundDiv>
      </MainBody>
    </Fragment>
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

/*
<Sort
                  className="dropdown"
                  onChange={(e) => setOrder(e.target.value)}
                >
                  <Option value="ASC">Asc</Option>
                  <Option value="DESC">Desc</Option>
                </Sort>
*/
