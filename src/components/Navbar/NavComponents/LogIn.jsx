import React, { useState } from 'react'
import styled from 'styled-components';
import { mobile, tablet } from '../../../media';

import TextField from '@mui/material/TextField';

const SignIn = styled.div`
    display: flex;
    flex-direction: column;
    z-index: 999;
    align-items: center;
    position: absolute;
    top: calc(18%);
    left: calc(50% - 175px);
    background-color: #F5F5F5;
    font-family: Arial;
    color: #1B1212;
    width: 350px;
    height: 500px;
    border: 1px solid #CCD3C2;
    margin-top: 10px;
    box-shadow:
    0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048),
    0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072),
    0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);

    ${mobile({
    top: 'calc(12% )'
})};

    ${tablet({
    top: 'calc(12% )'
})};
`

const SignInButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 26px;
    border: none;
    background-color: #F5F5F5;
    width: 50%;
    cursor: pointer;
`

const SignInButtonRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    margin-top: 50px;
    margin-bottom: 20px;
`

const SignInInput = styled(TextField)({
    width: '100%',
    height: 'auto',
    backgroundColor: '#FEFDFD',
    marginTop: '100px'
});

const SignInInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 200px;
    width: 80%;
    justify-content: space-between;
    align-items: center;
  `

const SignInButtonMain = styled.button`
    display: flex;
    width: 100%;
    height: 44px;
    align-items: center;
    justify-content: center;
    background-color: #517A3E;
    color: #FEFDFD;
    font-weight: 600;
    cursor: pointer;
`

const ForgotButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    color: #1B1212;
    border: none;
    background-color: #F5F5F5;
    margin-top: 10px;
    cursor: pointer;
    &:hover{
        color: #517A3E;
    }
`

const ForgotLabel = styled.p`
    font-size: 14px;
    margin-top: -5px;
`

const ForgotTitleText = styled.h1`
    font-size: 24px;
    font-weight: 600;
`

const LogIn = () => {
    const [signIn, setSignIn] = useState(true);
    const [register, setRegister] = useState(false);
    const [forgot, setForgot] = useState(false);

    //sign in states for sign in buttons
    const handleSignInOpen = () => {
        setSignIn(true);
        setRegister(false);
        setForgot(false);
    };

    const handleRegister = () => {
        setRegister(true);
        setSignIn(false);
        setForgot(false);
    }


    const handleForgotOpen = () => {
        setSignIn(false);
        setRegister(false);
        setForgot(true);
    }


    return (

        <SignIn>
            <SignInButtonRow>
                <SignInButton style={{
                    color: signIn === true ? '#1B1212' : ' #4A4A45',
                    textDecoration: signIn === true ? 'underline' : 'none',
                }}
                    onClick={handleSignInOpen}>Sign In</SignInButton>

                <SignInButton
                    style={{
                        color: register === true ? "#1B1212" : "#4A4A45",
                        textDecoration: register === true ? "underline" : "none"
                    }}
                    onClick={handleRegister}
                >
                    Register
                </SignInButton>
            </SignInButtonRow>

            {signIn ?
                <SignInInputContainer>
                    <SignInInput
                        label="Email"
                        type="email"
                        placeholder="you@email.com"
                    />

                    <SignInInput
                        label="Password"
                        type="password"
                    />

                    <SignInButtonMain>Log In</SignInButtonMain>
                </SignInInputContainer> : null}

            {register ?
                <SignInInputContainer>
                    <SignInInput
                        label="Email"
                        type="email"
                        placeholder="you@email.com"
                    />

                    <SignInInput
                        label="Password"
                        type="password"
                    />

                    <SignInButtonMain>Join</SignInButtonMain>
                </SignInInputContainer> : null}

            {forgot ?
                <SignInInputContainer style={{ marginTop: '0px' }}>
                    <ForgotTitleText>Reset Password</ForgotTitleText>
                    <ForgotLabel>Email to reset your password will be sent</ForgotLabel>
                    <SignInInput
                        label="Email"
                        type="email"
                        placeholder="you@email.com"
                    />

                    <SignInButtonMain style={{ marginTop: '20px' }}>Email Reset</SignInButtonMain> </SignInInputContainer> : null}

            <ForgotButton onClick={handleForgotOpen}>Forgot Password</ForgotButton>
        </SignIn>
    )
}

export default LogIn