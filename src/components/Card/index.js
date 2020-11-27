import React from "react";
import { Content, Comment, Title, Date, Text } from "./style";
import moment from "moment";

export default function Card({ title, date, content, company, status }) {
  return (
    <div>
      <Content>
        <Title>Title</Title>
        <Date>Date</Date>
        <hr />
        <Text>Content</Text>
        <div></div>
      </Content>
      <Comment></Comment>
    </div>
  );
}
