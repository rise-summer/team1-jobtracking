import React from "react";
import styled from "styled-components";

export default function EmptyApplication() {
  return (
    <div>
      <Content>
        <Top>
          <Center>
            <b>Log a new application here</b>
          </Center>
        </Top>
      </Content>
    </div>
  );
}

const Content = styled.div`
  background: #ffffff;
  border-radius: 5px;
  padding: 10px 40px;
  margin-top: 10px;
  margin-bottom: 10px;
  transition: 0.3s ease;
  &:hover {
    background: #eff4fc;
  }
`;

const Center = styled.div`
  padding: 10px;
  display: flex;
`;

const Top = styled.div`
  display: flex;
`;
