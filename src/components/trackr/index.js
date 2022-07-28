import React, { Fragment, useContext, useState, useEffect } from "react";
import glass from "../../images/magnifying_glass.svg";
import Navigation from "../navigation";
import { SearchBar } from "../navigation/style";
import { useHistory } from "react-router-dom";
import useAppzi from "../../hooks/useAppzi";
import useDebounce from "../../hooks/useDebounce";
import {
  MainBody,
  BackgroundDiv,
  Heading,
  ColumnSort,
  Title,
  NewAppBtnDiv,
  NewAppBtn,
  ContentDiv,
  Column,
  HeadingContent,
} from "./style";
import { Button } from "../../styles/shared";
import Application from "./components/applicationfeed/Application";
import EmptyApplication from "./components/applicationfeed/emptyapplication";
import { AuthenticationContext } from "../../AuthenticationContext";
import { firestore } from "../../firebaseSetup";

export default function Trackr(props) {
  useAppzi("rddQu");
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
        sortApplications(updatedOrder, statusOrder, sort, temp);
      });
  };
  useEffect(() => {
    if (authentication["uid"]) {
      getJobs();
    }
  }, [authentication]);
  useEffect(() => {
    if (applications) getJobs();
  }, [statusOrder, updatedOrder, sort]);
  const handleOrderChange = (newSort, newOrder) => {
    setSort(newSort);
    if (newSort === "UPDATED") {
      setUpdatedOrder(newOrder);
    } else {
      setStatusOrder(newOrder);
    }
  };
  console.log("trackr loaded");
  function sortApplications(updatedOrder, statusOrder, sort, applications) {
    console.log("called");
    let updatedApplications = [...applications];
    switch (sort) {
      case "STATUS":
        console.log("sort by status (interested => offer)");
        updatedApplications.sort((a, b) => {
          return statusOrder === "ASC"
            ? a.app_status - b.app_status
            : b.app_status - a.app_status;
        });
        setApplications(updatedApplications);
        break;
      case "UPDATED":
        updatedApplications.sort((a, b) => {
          let aDate = a.date_updated.toDate();
          let bDate = b.date_updated.toDate();
          return updatedOrder === "ASC" ? aDate - bDate : bDate - aDate;
        });
        setApplications(updatedApplications);
        break;
      default:
        return undefined;
    }
  }
  useEffect(() => {
    console.log(statusOrder, updatedOrder, sort);
  }, [statusOrder, updatedOrder, sort]);
  useEffect(() => {
    if (debouncedSearch !== "") {
      history.push({
        pathname: "/mainfeed",
        state: { searchValue: debouncedSearch },
      });
    }
  }, [debouncedSearch]);
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <Fragment>
      <MainBody>
        <Navigation>
          <SearchBar image={glass} onChange={(e) => handleSearch(e)} />
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

              <Button
                primary
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontSize: "16px",
                  lineHeight: "22px",
                }}
                onClick={() => {
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
              </Button>
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
                        ? updatedOrder === "ASC"
                          ? "ASC"
                          : "DESC"
                        : "ASC"
                    }`}
                    onClick={() =>
                      handleOrderChange(
                        "UPDATED",
                        `${updatedOrder === "ASC" ? "DESC" : "ASC"}`
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
                        ? statusOrder === "ASC"
                          ? "ASC"
                          : "DESC"
                        : "ASC"
                    }`}
                    onClick={() =>
                      handleOrderChange(
                        "STATUS",
                        `${statusOrder === "ASC" ? "DESC" : "ASC"}`
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
