import React from "react";
import { Content, Comment, Title, Date, Text, RoleInfo } from "./style";
import moment from "moment";

export default function Card({ title, date, content, company, status }) {
  return (
    <div>
      <Content>
        <Title>Title</Title>
        <Date>Date and time</Date>
        <hr />
        <Text>Description</Text>
        <RoleInfo>
          <div>CompanyAndPosition</div>
          {/*Remove Industry, tbd*/}
          <div>Industry</div>
          <div>Status</div>
        </RoleInfo>
      </Content>
      <Comment></Comment>
    </div>
  );
}
