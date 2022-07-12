import React, {
  Fragment,
  useRef,
  useContext,
  useState,
  useEffect,
} from "react";
import Navigation from "../navigation";
import { SearchBar } from "../navigation/style";
import { useHistory } from "react-router-dom";
import {
  MainBody,
  BackgroundDiv,
  Heading,
  ColumnSort,
  Title,
  NewAppBtnDiv,
  NewAppBtn,
  Sort,
  ContentDiv,
  Column,
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

export default function Trackr(props) {
  let history = useHistory();
  const { authentication, setAuthentication } = useContext(
    AuthenticationContext
  );
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search);
  const [applications, setApplications] = useState();
  const [order, setOrder] = useState("ASC");
  const [updatedOrder, setUpdatedOrder] = useState("ASC");
  const [statusOrder, setStatusOrder] = useState("ASC");
  const [sort, setSort] = useState("UPDATED");

  const getJobs = async () => {
    const jobs = await firestore
      .collection(`jobs/${authentication["uid"]}/jobs`)
      .orderBy("date_updated", "asc")
      .get()
      .then((snapshot) => {
        const temp = snapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        sortApplications(order, sort, temp);
      });
  };
  useEffect(() => {
    if (authentication["uid"]) {
      getJobs();
    }
  }, [authentication]);
  useEffect(() => {
    if (applications) sortApplications(order, sort, applications);
  }, [order, sort]);
  const handleOrderChange = (newSort, newOrder) => {
    setOrder(newOrder);
    setSort(newSort);
  };
  console.log("trackr loaded");
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
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Title>Your Applications</Title>
              <NewAppBtnDiv>
                <NewAppBtn
                  style={{ fontFamily: "Open Sans" }}
                  onClick={() => {
                    console.log("push");
                    history.push("/trackr/track1");
                  }}
                >
                  <span
                    style={{
                      display: "block",
                      fontSize: "30px",
                      fontWeight: 100,
                      marginRight: "5px",
                    }}
                  >
                    +
                  </span>{" "}
                  Track new application
                </NewAppBtn>
              </NewAppBtnDiv>
            </div>
            <Heading>
              <HeadingContent>
                <Column>Position</Column>
                <Column>Company</Column>
                <Column>
                  Last updated{" "}
                  <ColumnSort
                    direction={`${
                      sort == "UPDATED"
                        ? order === "ASC"
                          ? "ASC"
                          : "DESC"
                        : "ASC"
                    }`}
                    onClick={() =>
                      handleOrderChange(
                        "UPDATED",
                        `${order === "ASC" ? "DESC" : "ASC"}`
                      )
                    }
                  >
                    ▼
                  </ColumnSort>
                </Column>
                <Column>
                  Status{" "}
                  <ColumnSort
                    direction={`${
                      sort === "STATUS"
                        ? order === "ASC"
                          ? "ASC"
                          : "DESC"
                        : "ASC"
                    }`}
                    onClick={() =>
                      handleOrderChange(
                        "STATUS",
                        `${order === "ASC" ? "DESC" : "ASC"}`
                      )
                    }
                  >
                    ▼
                  </ColumnSort>
                </Column>
              </HeadingContent>
            </Heading>
            {applications && applications.length === 0 ? (
              <EmptyApplication></EmptyApplication>
            ) : (
              applications &&
              applications.map((application) => (
                <Application
                  key={application.id}
                  {...application}
                  sortApplications={sortApplications}
                  order={order}
                  sort={sort}
                  getJobs={getJobs}
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
