import React, { Component } from 'react';
import {
    LoginWrapper,
    Item,
    Button,
    Textfield,
    LoginBoard,
    LoginDiv,
    DarkBlueDiv,
    LightBlueDiv,
    ContentDiv,
    BackgroundDiv,
    Email,
    Pwd,
    EmailDiv,
    PwdDiv,
    ButtonDiv,
    InnerButtonDiv,
    SignUpDiv,
    SignUpButton,
    Form
} from './style';




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
                        <form onSubmit = {this.submit}>
                            <Item className='title'>Welcome Back __________</Item>
                            <LoginBoard>

                                <EmailDiv>
                                    <Email className='email' type='text' name='email' onChange={this.handleChange}></Email>
                                </EmailDiv>
                                <PwdDiv>
                                    <Pwd className='pwd' type='password' name='password'></Pwd>
                                </PwdDiv>

                            </LoginBoard>
                            <ButtonDiv>
                                <InnerButtonDiv>
                                    <Button type='submit'>Sign In</Button>
                                </InnerButtonDiv>
                                <SignUpDiv>
                                    <SignUpButton href="/SignUp">don’t have an account? sign in here.</SignUpButton>
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