import styled from "styled-components";

export const BackgroundDiv = styled.div`
  padding: 47px;
  background: #ebebeb;
  display: block;
  height: 550px;
`;

export const ContentDiv = styled.div`
  background: #f5f5f5;
  border-radius: 15px;
  padding: 10px;
  width: 1067px;
  margin: 0px auto;
  display: block;
`;

export const Headder = styled.a`
  font-family: Sans-Serif;
  font-style: normal;
  font-weight: 800;
  font-size: 29px;
  line-height: 39px;
  text-align: center;
  color: #5c5c5c;
`;

export const Title = styled.div`
  font-family: Sans-Serif;
  font-style: normal;
  font-weight: 600;
  font-size: 60px;
  line-height: 82px;
  /* identical to box height */
  text-align: center;
  color: #000000;
  margin: 15px;
`;

export const Subtitle = styled.div`
  font-family: Sans-Serif;
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  line-height: 34px;
  /* identical to box height */
  text-align: center;
  color: #000000;
  margin: 10px;
`;

export const Input = styled.input.attrs({
  placeholder: "https://paste_the_link_to_your_application_here.com",
})`
  background: #ffffff;
  box-shadow: 2px 4px 4px #9a9a9a;
  margin: 10px auto;
  border-radius: 15px;
  width: 856px;
  height: 84px;
  display: block;
  font-family: sans-serif;
  font-style: italic;
  font-weight: normal;
  font-size: 35px;
  line-height: 48px;
  letter-spacing: 0.6px;
  color: #000000;
  &::placeholder {
    font-family: sans-serif;
    font-style: italic;
    font-weight: normal;
    font-size: 35px;
    line-height: 48px;
    letter-spacing: 0.6px;
    color: #6f6f6f;
  }
`;

// export const InputDiv = styled.div`
//   width: 100%;
//   justify-content: center;
// `;

export const SubmitBtn = styled.button`
  background: #175596;
  border-radius: 8px;
  font-family: sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 34px;
  /* identical to box height */
  text-align: center;
  letter-spacing: 0.6px;
  color: #f2f0f0;
  margin: 50px auto;
  display: block;
  width: 261px;
  height: 49px;
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
`;

export const Textarea = styled.textarea`
  background: #ffffff;
  box-shadow: 2px 4px 4px #9a9a9a;
  border-radius: 15px;
  width: 939px;
  height: 117px;
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 19px;
  line-height: 26px;
  color: #000000;
  /* RISE for greyed out text */
  &::placeholder {
    color: #888888;
  }

  display: block;
  margin: 0px auto;
  padding: 5px;
`;

export const InputDiv = styled.div`
  display: table;
  margin: 0px auto;
`;

export const Slider = styled.input`
  display: block;
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
  box-shadow: 2px 4px 4px #9a9a9a;
  border-radius: 15px;
  padding: 10px;
`;

export const Label = styled.div`
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 30px;
  line-height: 41px;
  /* identical to box height */

  color: #5c5c5c;
  display: table;
  margin: 0px auto;
`;

export const CompleteBtn = styled.button`
  background: #175596;
  border-radius: 5px;
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 22px;
  /* or 129% */

  align-items: center;
  text-align: center;

  color: #f5f5f5;
  display: block;
  margin: 10px auto;
  outline: none;
`;
