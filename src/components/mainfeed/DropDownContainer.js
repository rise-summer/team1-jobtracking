import React, { useRef, useEffect } from "react";
import { Icon } from "@iconify/react";
import styled from "styled-components";
const DropDownContainer = (props) => {
  const ref = useRef();
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (props.drop && ref.current && !ref.current.contains(e.target)) {
        props.handleDrop();
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [props.drop]);
  return (
    <Options ref={ref}>
      <Icon
        icon="bi:three-dots-vertical"
        alt="options"
        color="#888888"
        onClick={props.handleDrop}
        onBlur={props.handleDrop}
      />
      {props.drop && (
        <DropDownContent>
          <Link onClick={props.handleEdit}>
            <Icon icon="charm:pencil" />
            <DropDownText>Edit comment</DropDownText>
          </Link>
          <Link onClick={props.handleDelete}>
            {" "}
            <Icon icon="bx:trash" />
            <DropDownText>Delete comment</DropDownText>
          </Link>
        </DropDownContent>
      )}
    </Options>
  );
};
export default DropDownContainer;
const Options = styled.div`
  position: relative;
  display: inline-block;
`;
const DropDownText = styled.div`
  padding-left: 5px;
`;

const DropDownContent = styled.div`
  position: absolute;
  overflow: hidden;
  background-color: #f1f1f1;
  min-width: 150px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  z-index: 1;
`;

const Link = styled.button`
  color: black;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 12px 16px;
  border: none;
  transition: 0.3s ease;
  &:hover {
    background-color: #eff4fc;
  }
  cursor: pointer;
`;
