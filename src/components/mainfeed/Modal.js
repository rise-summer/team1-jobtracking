import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Button, standardBoxShadow } from "../../styles/shared";
export default function Modal({
  contentType,
  title,
  description,
  buttonValue,
  handleTitleChange,
  handleDescriptionChange,
  handleSubmit,
  handleCancel,
  error,
}) {
  const backgroundRef = useRef();
  return (
    <Background
      ref={backgroundRef}
      onClick={(e) => {
        if (backgroundRef.current === e.target) {
          handleCancel();
        }
      }}
    >
      <ContentModal>
        <Header>
          {contentType}
          <hr />
        </Header>

        {contentType === "Edit Post" ? (
          <>
            <EditTitle
              onChange={(e) => handleTitleChange(e.target.value)}
              defaultValue={title}
              placeholder="What are you up to?"
            ></EditTitle>
            <EditDescription
              onChange={(e) => handleDescriptionChange(e.target.value)}
              defaultValue={description}
              placeholder="Share an update with your community on how you're doing."
            ></EditDescription>
          </>
        ) : (
          <>
            {title && <Title>{title}</Title>}
            <Description>{description}</Description>
          </>
        )}
        <SubmitContainer>
          {error && <div>{error}</div>}
          <Button onClick={handleCancel} secondary>
            Cancel
          </Button>
          <Button style={{ marginLeft: "5px" }} primary onClick={handleSubmit}>
            {buttonValue}
          </Button>
        </SubmitContainer>
      </ContentModal>
    </Background>
  );
}

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(255, 255, 255, 0.6);
`;
const ContentModal = styled.div`
  padding: 30px 30px 10px 30px;
  min-width: 30vw;
  min-height: 30vh;
  background-color: white;
  border-radius: 12px;
  ${standardBoxShadow}
`;
const Title = styled.div`
  font-size: 24px;
  width: 100%;
  line-height: 33px;
  letter-spacing: 0.5px;
  font-weight: bold;
  color: #000000;
  display: inline-block;
  flex: 1;
  font-family: "Open Sans";
`;
const EditTitle = styled.input`
  border: none;
  font-size: 24px;
  width: 100%;
  line-height: 33px;
  letter-spacing: 0.5px;
  font-weight: bold;
  color: #000000;
  display: inline-block;
  flex: 1;
  font-family: "Open Sans";
`;
const Header = styled.div`
  font-size: 32px;
  line-height: 33px;
  width: 100%;
  letter-spacing: 0.5px;
  font-weight: bold;
  color: #000000;
  display: inline-block;
  flex: 1;
  font-family: "Open Sans";
`;
const Description = styled.div`
  border: none;
  display: block;
  font-size: 2vh;
  margin-left: auto;
  margin-right: auto;
  min-height: 7vh;
  resize: none;
  width: 100%;
  font-family: "Open Sans", sans-serif;
`;
const EditDescription = styled.textarea`
  border: none;
  display: block;
  font-size: 2vh;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  min-height: 7vh;
  resize: none;
  width: 100%;
  font-family: "Open Sans", sans-serif;
`;

const SubmitContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 5px;
`;
