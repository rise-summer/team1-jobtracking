import styled from "styled-components";

export const Outer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const BackgroundDiv = styled.div`
  background: #ebebeb;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const ContentDiv = styled.div`
  background: #f5f5f5;
  border-radius: 15px;
  padding: 10px;
  width: 800px;
  margin: auto;
`;
export const Heading = styled.div`
  justify-content: center;
  text-align: center;
`;

export const BackBtn = styled.button`
  //font-weight: bold;
  //font-size: 29px;
  text-decoration: none;
  background: none;
  outline: none;
  border: none;
  width: 30px;
  height: 30px;
  //color: #5c5c5c;
  margin: 20px auto auto 20px;
  cursor: pointer;
  &:hover {
    color: #c0c0c0;
  }
`;

export const BackSvg = styled.img`
  width: 25px;
  height: 25px;
  &:active {
    transform: scale(0.8);
    transition: 0.1s;
    filter: opacity(30%);
  }
  filter: opacity(50%);
  text-decoration: none;
`;

export const Title = styled.div`
  font-weight: 500;
  font-size: 50px;
  text-align: center;
  margin: 0px;
`;

export const Subtitle = styled.div`
  font-weight: 600;
  font-size: 20px;
  text-align: center;
  margin: 10px;
`;

export const Input = styled.input`
  background: #ffffff;
  font-family: "Open Sans";
  box-shadow: 2px 4px 4px #9a9a9a;
  border-radius: 15px;
  width: 650px;
  height: 40px;
  border: none;
  font-size: 20px;
  border: none;
  outline: none;
  margin: 10px auto;
  padding: 0px 20px 0px 20px;
  &::placeholder {
    font-weight: 400;
    font-size: 20px;
    color: #6f6f6f;
  }
  &::-webkit-input-placeholder {
    font-weight: 100;
  }
  &::-moz-placeholder {
    font-weight: 100;
  }
  &::-ms-input-placeholder {
    font-weight: 100;
  }
`;
export const Input2 = styled.input`
  background: #ffffff;
  font-family: "Open Sans";
  box-shadow: 2px 4px 4px #9a9a9a;
  border-radius: 15px;
  width: 300px;
  height: 40px;
  border: none;
  font-size: 20px;
  border: none;
  outline: none;
  margin: 10px 10px 10px 10px;
  padding: 0px 20px 0px 20px;
  &::placeholder {
    font-style: 100;
    font-size: 20px;
    color: #6f6f6f;
  }
  &::-webkit-input-placeholder {
    font-weight: 100;
  }
  &::-moz-placeholder {
    font-weight: 100;
  }
  &::-ms-input-placeholder {
    font-weight: 100;
  }
`;

export const SubmitBtn = styled.button`
  background: #175596;
  border-radius: 8px;
  font-weight: bold;
  font-size: 25px;
  text-align: center;
  color: #f2f0f0;
  margin: 30px auto;
  display: block;
  width: 200px;
  height: 49px;
  outline: none;
  border: none;
  cursor: pointer;
  &:hover {
    background: #2071c7;
  }
  &:active {
    transform: scale(0.97);
    transition: 0.1s;
  }
`;

export const TextAreaDiv = styled.div`
  margin: 10px auto;
`;

export const Textarea = styled.textarea`
  font-family: "Open Sans", "Open Sans", sans-serif;
  background: #ffffff;
  border: none;
  outline: none;
  box-shadow: 2px 4px 4px #9a9a9a;
  border-radius: 15px;
  width: 650px;
  height: 100px;
  font-size: 12px;
  resize: none;
  min-height: 5em;
  overflow: auto;
  /* RISE for greyed out text */
  padding: 15px 15px 15px 15px;
  &::placeholder {
    color: #888888;
    //padding: 15px 15px 15px 15px;
  }
  margin: 0px auto;
  white-space: pre-wrap;
`;

export const Slider = styled.input`
  /* margin: 20px auto;
  cursor: pointer;
  width: 500px; */
  /* -webkit-appearance: none; */
  &::-ms-track {
    width: 300px;
    height: 5px;

    /*remove bg colour from the track, we'll use ms-fill-lower and ms-fill-upper instead */
    background: transparent;

    /*leave room for the larger thumb to overflow with a transparent border */
    border-color: transparent;
    border-width: 6px 0;

    /*remove default tick marks*/
    color: transparent;
  }
  &::-ms-fill-lower {
    background: #175596;
    border-radius: 10px;
  }
  &::-ms-fill-upper {
    background: #ddd;
    border-radius: 10px;
  }
  &::-ms-thumb {
    border: none;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: #175596;
  }
  &::-ms-fill-lower {
    background: #175596;
  }
  &::-ms-fill-upper {
    background: #ccc;
  }
  /* &::-webkit-slider-runnable-track {
    background: #cfcece;
    height: 5px;
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 40px;
    width: 40px;
    background: #175596;
    margin: -18px 0px 0px 0px;
    border-radius: 50%;
  } */
  /* &:focus {
    -webkit-appearance: none;
    outline: none;
  } */
`;

export const SliderDiv = styled.div`
  background: #ffffff;
  width: 600px;
  box-shadow: 2px 4px 4px #9a9a9a;
  border-radius: 15px;
  padding: 10px;
  margin: 0px auto;
`;

export const Label = styled.div`
  font-weight: bold;
  font-size: 20px;
  color: #5c5c5c;
  /* display: table; */
  margin: 0px auto;
`;

export const Subtitle2 = styled.a`
  cursor: pointer;
  text-decoration: none;
  font-size: 29px;
  line-height: 39px;
  text-align: center;
  border: none;
  color: #2071c7;
  &:hover {
    color: #2071c7;
  }
`;
