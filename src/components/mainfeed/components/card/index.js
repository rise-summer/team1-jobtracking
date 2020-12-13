import React from "react";
import CommentSection from '../comment-section';
import {
  Feed,
  Content,
//  Comment,
  Title,
  Date,
  Description,
  RoleInfo,
} from "./style";
import moment from "moment";

export default function Card({ title, date, content, company, status }) {
  return (
    <Feed>
      <Content>
        <Title>Title</Title>
        <Date>Date and time</Date>
        <hr /> {/* Line */}
        <Description>
          Description:Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Description>
        <RoleInfo>
          <div>CompanyAndPosition</div>
          {/*Remove Industry, tbd*/}
          <div>Industry</div>
          <div>Status</div>
        </RoleInfo>
      </Content>
      <CommentSection />
    </Feed>
  );
}
