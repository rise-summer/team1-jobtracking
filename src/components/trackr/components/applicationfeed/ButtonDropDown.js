import React, { useState, useRef } from "react";
const ButtonDropDown = (props) => {
  const statusConverter = [
    "Interested",
    "Applied",
    "Interviewed",
    "Offered",
    "Accepted",
    "Rejected",
    "Declined",
  ];

  const handleClick = (i) => {
    //const index = statusConverter.indexOf(item.innerText);
    props.setUpdatedStatus(i);
    props.setButtonDrop(false);
  };
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      style={{
        backgroundColor: props.color,
        zIndex: 1,
        position: "absolute",
        top: "100%",
        left: 0,
        width: "100%",
        color: "white",
        borderRadius: "0 0 12px 12px",
      }}
    >
      {statusConverter.map((status, i) => {
        return (
          <div
            style={{ padding: "4px 8px" }}
            onClick={() => {
              handleClick(i);
            }}
          >
            {status}
          </div>
        );
      })}
    </div>
  );
};
export default ButtonDropDown;
