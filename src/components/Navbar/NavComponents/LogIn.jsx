import React, { useState } from 'react'
import styled from 'styled-components';
import { mobile, tablet } from '../../../media';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined'

const SignIn = styled.div`
    display: flex;
    flex-direction: column;
    z-index: 999;  
    align-items: center;
    position: absolute;
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
`
const TransparentPageContainer = styled.div`
    height: 160vh;
    width: 100vw;
    position: absolute;
    display: flex;
    z-index: 100;
    margin: -10px 0px 0px -8px;
    background: rgba(0, 0, 0, 0.5);
    justify-content: center;
    ${mobile({marginTop: '4px', height: '100vh'})};
    ${tablet({height: '100vh'})};
`

const SingInTopButtonRow = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: auto;
`
const SignInCloseIcon = styled(CloseOutlinedIcon)`
    padding: 10px;
    color: #1B1212;
`

const SignInCloseButton = styled.button`
    border: none;
    background: none;
    width: auto;
    height: auto;
    cursor: pointer;
`

const SignInTopButtonRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    margin: 10px 0px 10px 0px;
`
const SignInButton = styled.button`
    display: flex;
    width: 50%;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
    background-color: #F5F5F5;
    font-size: 26px;
`

const InputLabelRow = styled.div`
    display: flex;
    width: 103%;
    height: auto;
    align-items: flex-start;
    font-weight: 600;
`

const InputLabel = styled.label`
    font-size: 12px;
    margin: 20px 0px 5px 0px;
    &.bottom-label{
        margin-top: 0px;
        color: #4A4A45;
        margin-top: 5px;
        font-weight: 500;
    }
`

const TextInput = styled.input`
    display: flex;
    height: 44px;
    width: 100%;
    padding-left: 5px;
`

const SignInInputForm = styled.form`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 80%;
    align-items: center;
  `

const SignInButtonMain = styled.button`
    display: flex;
    width: 103%;
    height: 44px;
    margin-top: 20px;
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
    cursor: pointer;
    margin-top: 10px;
    &:hover{
        color: #517A3E;
    }
`

const ForgotLabel = styled.p`
    font-size: 14px;
    height: auto;
    color: #4A4A45;
    margin-top: -15px;
`

const ForgotTitleText = styled.h1`
    font-size: 24px;
    font-weight: 600;
    height: auto;
`

const LogIn = () => {
    const [signIn, setSignIn] = useState(true);
    const [register, setRegister] = useState(false);
    const [forgot, setForgot] = useState(false);

    //sing in will be open by default
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
    const [logIn, setLogIn] = useState(true);

    return (
        <>
            {logIn ? <TransparentPageContainer>
                <SignIn>
                    <SingInTopButtonRow>
                        <SignInCloseButton onClick={() => setLogIn(false)}>  <SignInCloseIcon /></SignInCloseButton>
                    </SingInTopButtonRow>
                    <SignInTopButtonRow>
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
                            onClick={handleRegister}>Register</SignInButton>
                    </SignInTopButtonRow>

                    {signIn ?
                        <SignInInputForm>
                            <InputLabelRow><InputLabel htmlFor="Email">Email *</InputLabel></InputLabelRow>
                            <TextInput type="email" id="email" required placeholder='you@email.com'></TextInput>

                            <InputLabelRow><InputLabel htmlFor="Email">Password *</InputLabel></InputLabelRow>
                            <TextInput
                                type="password"
                                minlength="8"
                                required
                                pattern="(?!000)([0-6]\d{2}|7([0-6]\d|7[012]))([ -])?(?!00)\d\d\3(?!0000)\d{4}"
                                autocomplete="off"
                            />
                            <SignInButtonMain>Log In</SignInButtonMain>
                            <ForgotButton onClick={handleForgotOpen}>Forgot Password</ForgotButton>
                        </SignInInputForm> : null}

                    {register ?
                        <SignInInputForm>
                           <InputLabelRow><InputLabel htmlFor="Email">Email *</InputLabel></InputLabelRow>
                            <TextInput type="email" id="email" required placeholder='you@email.com'></TextInput>
                            <InputLabelRow><InputLabel htmlFor="Email">Password *</InputLabel></InputLabelRow>
                            <TextInput
                                type="password"
                                minlength="8"
                                required
                                pattern="(?!000)([0-6]\d{2}|7([0-6]\d|7[012]))([ -])?(?!00)\d\d\3(?!0000)\d{4}"
                                autocomplete="off"
                            />
                            <InputLabelRow><InputLabel htmlFor="Password" className =  'bottom-label'>Password most be at least 8 characters</InputLabel></InputLabelRow>
                            <SignInButtonMain>Sign Up</SignInButtonMain>
                            <ForgotButton onClick={handleForgotOpen}>Forgot Password</ForgotButton>
                        </SignInInputForm> : null}

                    {forgot ?
                        <SignInInputForm style={{ marginTop: '-10px' }}>
                            <ForgotTitleText>Reset Password</ForgotTitleText>
                            <ForgotLabel>Email to reset your password will be sent</ForgotLabel>
                            <InputLabelRow style={{ marginTop: '10px' }}><InputLabel style={{ marginTop: '0px' }} htmlFor="Email">Email *</InputLabel></InputLabelRow>
                            <TextInput type="email" id="email" required placeholder='you@email.com'></TextInput>
                            <SignInButtonMain style={{ marginTop: '20px' }}>Email Reset</SignInButtonMain> </SignInInputForm> : null}
                </SignIn>
            </TransparentPageContainer> : null}
        </>
    )
}

export default LogIn