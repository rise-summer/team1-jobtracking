import React, { Component } from 'react';
import {
    LoginWrapper,
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



class Login extends Component {

    submit = (e) => {
        e.preventDefault();
        console.log('Event: Form Submit');
    }

    render() {
        return (
            <LoginWrapper>
                <LoginDiv>
                    <BackgroundDiv>
                        <DarkBlueDiv></DarkBlueDiv>
                        <LightBlueDiv></LightBlueDiv>
                    </BackgroundDiv>
                    <ContentDiv>
                        <form onSubmit={this.submit}>
                            <Item className='title'>Welcome ___________________</Item>
                            <LoginBoard>
                                <FieldDiv>
                                    <UserName className='username' type='text' name='username'></UserName>
                                </FieldDiv>
                                <FieldDiv>
                                    <Email className='email' type='text' name='email'></Email>
                                </FieldDiv>
                                <FieldDiv>
                                    <Pwd className='pwd' type='password' name='pwd'></Pwd>
                                </FieldDiv>
                                <FieldDiv>
                                    <ConfirmPwd className='cnfmpwd' type='password' name='cnfmpwd'></ConfirmPwd>
                                </FieldDiv>
                            </LoginBoard>
                            <ButtonDiv>
                                <InnerButtonDiv>
                                    <Button type='submit'>COMPLETE SIGN UP</Button>
                                </InnerButtonDiv>
                                <SignUpDiv>
                                    <SignUpButton href="/LogIn">have an account? sign in here. </SignUpButton>
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