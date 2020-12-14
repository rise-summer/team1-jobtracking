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
<<<<<<< HEAD
`;
export const Heading = styled.div`
  justify-content: center;
  text-align: center;
||||||| e652ca3
  display: block;
=======
>>>>>>> 290023a0e8d066409a05901029774554b3b04199
`;
<<<<<<< HEAD

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
||||||| e652ca3

export const Headder = styled.a`
  font-family: "Open Sans", sans-serif;;
  font-style: normal;
  font-weight: 800;
  font-size: 29px;
  line-height: 39px;
  text-align: center;
  color: #5c5c5c;
=======
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
>>>>>>> 290023a0e8d066409a05901029774554b3b04199
`;

export const Title = styled.div`
  font-weight: 600;
  font-size: 40px;
  text-align: center;
<<<<<<< HEAD
  margin: 15px;
||||||| e652ca3
  color: #000000;
  margin: 15px;
=======
  margin: 0px;
>>>>>>> 290023a0e8d066409a05901029774554b3b04199
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
  width: 650px;
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
export const Input2 = styled.input.attrs({})`
  background: #ffffff;
  box-shadow: 2px 4px 4px #9a9a9a;
  border-radius: 15px;
<<<<<<< HEAD
  width: 500px;
  height: 50px;
  border: none;
  font-size: 20px;
  border: none;
  outline: none;
  margin: 10px auto;
  padding: 0px 20px 0px 20px;
||||||| e652ca3
  width: 856px;
  height: 84px;
  display: block;
  font-family: "Open Sans", sans-serif;
  font-style: italic;
  font-weight: normal;
  font-size: 35px;
  line-height: 48px;
  letter-spacing: 0.6px;
  color: #000000;
=======
  width: 300px;
  height: 50px;
  border: none;
  font-size: 20px;
  border: none;
  outline: none;
  margin: 10px 10px 10px 10px;
  padding: 0px 20px 0px 20px;
>>>>>>> 290023a0e8d066409a05901029774554b3b04199
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
<<<<<<< HEAD
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
||||||| e652ca3
`;

export const Title2 = styled.div`
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 70px;
  line-height: 95px;
  text-align: center;
  color: #5a5a5a;
`;

export const Subtitle2 = styled.div`
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 29px;
  line-height: 39px;
  text-align: center;
  color: #5a5a5a;
  margin: 5px;
`;

export const Input1 = styled.input`
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 23px;
  line-height: 31px;

  /* RISE for greyed out text */
  color: #000000;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  width: 939px;
  height: 48px;
  display: block;
  margin: 0 auto;
  &::placeholder {
    font-family: sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 23px;
    line-height: 31px;
    color: #888888;
  }
`;

export const Input2 = styled.input`
  background: #ffffff;
  box-shadow: 2px 4px 4px #9a9a9a;
  border-radius: 15px;
  width: 459px;
  height: 48px;
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 23px;
  line-height: 31px;
  margin-top: 10px;
  margin-bottom: 10px;
  outline: none;

  /* RISE for greyed out text */

  color: #000000;
  padding: 5px;
  &::placeholder {
    font-family: sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 23px;
    line-height: 31px;
    color: #888888;
  }
=======
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
>>>>>>> 290023a0e8d066409a05901029774554b3b04199
`;

export const Textarea = styled.textarea`
  font-family: "Open Sans", sans-serif;
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
<<<<<<< HEAD

||||||| e652ca3
=======
  padding: 15px 15px 15px 15px;
>>>>>>> 290023a0e8d066409a05901029774554b3b04199
  &::placeholder {
    color: #888888;
<<<<<<< HEAD
    padding: 15px 15px 15px 15px;
||||||| e652ca3
=======
    //padding: 15px 15px 15px 15px;
>>>>>>> 290023a0e8d066409a05901029774554b3b04199
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
