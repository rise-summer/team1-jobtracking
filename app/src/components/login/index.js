import React,{Component} from 'react';
import axios from 'axios';
import { 
    LoginWrapper,Item,Button,Textfield,LoginBoard
 } from './style';

 class Login extends Component {
     constructor(props) {
         this.state = {
            email='',
            pwd=''
         }
     }
     login(e) {
        axios.post('http://localhost:3000/signin').then(function(res) {
            if (res.data.code == 200) {
                console.log("Login successfully!");
            } else if(res.data.code == 422) {
                console.log("Wrong password/email");
            }
        });
     }

     render(){
         return (
             <LoginWrapper>
                 <Item className='title'>Log In</Item>
                    <LoginBoard>
                    <Item>Email ID</Item>
                    <Textfield className='email' onChange={(e, v)=>{this.setState({email: v})}}></Textfield>
                    <Item>Password</Item>
                    <Textfield className='pwd' onChange={(e, v)=>{this.setState({pwd: v})}}></Textfield>
                    </LoginBoard>
                    <a href="/UserMain"><Button onClick={(e)=> login(e)}>Log In</Button></a>
             </LoginWrapper>
         )
     }
 }
 export default Login;