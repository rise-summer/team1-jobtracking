import styled from "styled-components";

export const BackgroundDiv = styled.div`
  font-family: "Open Sans", sans-serif;
  padding: 10vh;
  background: #ebebeb;
  height: 100vh;
`;

export const ContentDiv = styled.div`
  background: #f5f5f5;
  border-radius: 15px;
  padding: 10px;
  width: 800px;
  margin: 0px auto;
`;
export const Heading = styled.div`
  justify-content: center;
  text-align: center;
`;

export const BackBtn = styled.a`
  font-weight: bold;
  font-size: 29px;
  text-decoration: none;
  color: #5c5c5c;
  margin: auto auto auto 20px;
  cursor: pointer;
  &:hover {
    color: #c0c0c0;
  }
  &:active {
    transform: scale(0.97);
    transition: 0.1s;
  }
`;

export const Title = styled.div`
  font-weight: 600;
  font-size: 40px;
  text-align: center;
  margin: 15px;
`;

export const Subtitle = styled.div`
  font-weight: 600;
  font-size: 20px;
  text-align: center;
  margin: 10px;
`;

export const Input = styled.input.attrs({})`
  background: #ffffff;
  box-shadow: 2px 4px 4px #9a9a9a;
  border-radius: 15px;
  width: 500px;
  height: 50px;
  border: none;
  font-size: 20px;
  border: none;
  outline: none;
  margin: 10px auto;
  padding: 0px 20px 0px 20px;
  &::placeholder {
    font-style: italic;
    font-size: 20px;
    color: #6f6f6f;
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
  width: 140px;
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

export const Textarea = styled.textarea`
  background: #ffffff;
  border: none;
  outline: none;
  box-shadow: 2px 4px 4px #9a9a9a;
  border-radius: 15px;
  width: 650px;
  height: 150px;
  font-size: 19px;
  resize: none;
  min-height: 5em;
  overflow: auto;
  /* RISE for greyed out text */

  &::placeholder {
    color: #888888;
    padding: 15px 15px 15px 15px;
  }
  margin: 0px auto;
`;

export const Slider = styled.input`
  margin: 20px auto;
  cursor: pointer;
  width: 500px;
  -webkit-appearance: none;
  &::-webkit-slider-runnable-track {
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
  }
  &:focus {
    -webkit-appearance: none;
    outline: none;
  }
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
  font-size: 30px;
  color: #5c5c5c;
  /* display: table; */
  margin: 0px auto;
`;

export const CompleteBtn = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: #ffffff;
  &:hover {
    background: #2071c7;
  }
  &:active {
    transform: scale(0.97);
    transition: 0.1s;
  }
`;
