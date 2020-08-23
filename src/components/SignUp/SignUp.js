import React,{Component} from 'react';
import { LoginWrapper,Item,Button,Textfield,LoginBoard} from './SignUpStyle';
import "./SignUp.css"


 class Login extends Component {
     render(){
         return (
            <div class="signUp-container" >
             <LoginWrapper>
            <Item className='title'> <h1> Let's Get Ready for your Career!</h1> </Item>
                    <LoginBoard>
                    <Item>Name</Item>
                    <Textfield className='Name'></Textfield>
                    <Item>Email ID</Item>
                    <Textfield className='email'></Textfield>
                    <Item>Password</Item>
                    <Textfield className='pwd'></Textfield>
                    <Item>Confirm Password</Item>
                    <Textfield className='ConPwd'></Textfield>
                    </LoginBoard>
                    <a href="/UserMain"><Button>Sign Up</Button></a>
             </LoginWrapper>
             </div>
         )
     }
 }
 export default Login;