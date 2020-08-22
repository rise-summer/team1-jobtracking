import React,{Component} from 'react';
import { 
    LoginWrapper,Item,Button,Textfield,LoginBoard
 } from './style';

 class Login extends Component {
     render(){
         return (
             <LoginWrapper>
                 <Item className='title'>Log In</Item>
                    <LoginBoard>
                    <Item>Email ID</Item>
                    <Textfield className='email'></Textfield>
                    <Item>Password</Item>
                    <Textfield className='pwd'></Textfield>
                    </LoginBoard>
                    <a href="/UserMain"><Button>Log In</Button></a>
             </LoginWrapper>
         )
     }
 }
 export default Login;