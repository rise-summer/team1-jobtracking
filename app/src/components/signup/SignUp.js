import React, { Component } from 'react';
import { LoginWrapper, Item, Button, Textfield, LoginBoard } from './SignUpStyle';
import './SignUp.css';
import axios from 'axios';

class Login extends Component {
  signup() {
    axios.post('http://localhost:3000/signup').then(function (res) {
      if (res.data.code == 200) {
        console.log('Sign in successfully!');
      } else if (res.data.code == 422) {
        console.log('Wrong password/email');
      }
    });
  }
  render() {
    return (
      <div class='signUp-container'>
        <LoginWrapper>
          <Item className='title'>
            {' '}
            <h1> Let's Get Ready for your Career!</h1>{' '}
          </Item>
          <LoginBoard>
            <Item>Name</Item>
            <Textfield
              className='Name'
              onChange={(e, v) => {
                this.setState({ name: v });
              }}
            ></Textfield>
            <Item>Email ID</Item>
            <Textfield
              className='email'
              onChange={(e, v) => {
                this.setState({ email: v });
              }}
            ></Textfield>
            <Item>Password</Item>
            <Textfield
              className='pwd'
              onChange={(e, v) => {
                this.setState({ pwd: v });
              }}
            ></Textfield>
            <Item>Confirm Password</Item>
            <Textfield className='ConPwd'></Textfield>
          </LoginBoard>
          <a href='/UserMain'>
            <Button onClick={() => signup()}>Sign Up</Button>
          </a>
        </LoginWrapper>
      </div>
    );
  }
}
export default Login;
