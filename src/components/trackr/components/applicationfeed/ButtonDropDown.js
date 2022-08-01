import React, { useState, useRef } from "react";
import { Menu } from "./style";
const ButtonDropDown = (props) => {
  const buttonSvg1 = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
      width="1em"
      height="1em"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
    >
      <g transform="translate(24 0) scale(-1 1)">
        <path
          fill="white"
          d="M20 2H8c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM8 16V4h12l.002 12H8z"
        />
        <path
          fill="white"
          d="M4 8H2v12c0 1.103.897 2 2 2h12v-2H4V8zm11-2h-2v3h-3v2h3v3h2v-3h3V9h-3z"
        />
      </g>
    </svg>
  );
  const buttonSvg2 = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
      width="1em"
      height="1em"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke="white"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="m4 12l6 6L20 6"
      />
    </svg>
  );
  const buttonSvg3 = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
      width="1em"
      height="1em"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
    >
      <g fill="none" stroke="white" stroke-width="2">
        <circle cx="12" cy="7" r="5" />
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M17 14h.352a3 3 0 0 1 2.976 2.628l.391 3.124A2 2 0 0 1 18.734 22H5.266a2 2 0 0 1-1.985-2.248l.39-3.124A3 3 0 0 1 6.649 14H7"
        />
      </g>
    </svg>
  );
  const statusConverter = [
    "Interested",
    "Applied",
    "Interviewed",
    "Offered",
    "Accepted",
    "Rejected",
    "Declined",
  ];
  const colors = [
    "#6175A9",
    "#61A5A9",
    "#A21660",
    "#9FA216",
    "#61A975",
    "#A99161",
    "#A96199",
  ];
  const svgOrder = [
    buttonSvg1,
    buttonSvg2,
    buttonSvg3,
    buttonSvg2,
    buttonSvg1,
    buttonSvg1,
    buttonSvg1,
  ];

  const handleClick = (i) => {
    //const index = statusConverter.indexOf(item.innerText);
    props.setUpdatedStatus(i);
    props.setButtonDrop(false);
  };
  return (
    <Menu className={props.class && props.class}>
      {statusConverter.map((status, i) => {
        return (
          <div
            style={{
              zIndex: 3,
              padding: "8px 16px",
              borderRadius: "12px",
              margin: "4px auto",
              backgroundColor: colors[i],
              width: "fit-content",
            }}
            onClick={() => {
              handleClick(i);
            }}
            key={i}
          >
            {svgOrder[i]} {status}
          </div>
        );
      })}
    </Menu>
  );
};
export default ButtonDropDown;
