import React,{Component} from 'react';
import { LoginWrapper,
    Item,
    Button,
    Textfield,
    LoginBoard, 
    LoginDiv,
     BackgroundDiv, 
     DarkBlueDiv,
     LightBlueDiv,
     ContentDiv,
     Email,
     Pwd,
     ButtonDiv,
     InnerButtonDiv,
     SignUpButton,
     SignUpDiv,
     FieldDiv,
     UserName,
     ConfirmPwd
    } from './SignUpStyle';
import "./SignUp.css"


 class Login extends Component {
     render(){
         return (
             <LoginWrapper>
                <LoginDiv>
                    <BackgroundDiv>
                        <DarkBlueDiv></DarkBlueDiv>
                        <LightBlueDiv></LightBlueDiv>
                    </BackgroundDiv>
                    <ContentDiv>
                        <form onSubmit = {this.submit}>
                            <Item className='title'>Welcome __________</Item>
                            <LoginBoard>
                                <FieldDiv>
                                    <UserName className='email' type='text' name='email'></UserName>
                                </FieldDiv>
                                <FieldDiv>
                                    <Email className='pwd' type='password' name='password'></Email>
                                </FieldDiv>
                                <FieldDiv>
                                    <Pwd className='pwd' type='password' name='password'></Pwd>
                                </FieldDiv>
                                <FieldDiv>
                                    <ConfirmPwd className='pwd' type='password' name='password'></ConfirmPwd>
                                </FieldDiv>

                            </LoginBoard>
                            <ButtonDiv>
                                <InnerButtonDiv>
                                    <Button type='submit'>COMPLETE SIGN UP</Button>
                                </InnerButtonDiv>
                                <SignUpDiv>
                                    <SignUpButton href="/SignUp">have an account? sign in here. </SignUpButton>
                                </SignUpDiv>
                            </ButtonDiv>
                        </form>
                    </ContentDiv>
                </LoginDiv>
            </LoginWrapper>
         )
     }
 }
 export default Login;