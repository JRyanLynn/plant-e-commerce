import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { mobile, tablet } from '../../../media';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined'
import { login } from '../../../redux/apiCall';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { sendRegister } from '../../../helpers';
import { fetchCartItems } from '../../../helpers';
import { addToCart } from '../../../redux/cartReducer';
import { getUserCartItems } from '../../../helpers';

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
    margin-top: 130px;
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
    position: fixed;
    display: flex;
    z-index: 100;
    background: rgba(0, 0, 0, 0.5);
    justify-content: center;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    ${mobile({ marginTop: '4px', height: '85vmax' })};
    ${tablet({ height: '100vh' })};
`;

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
    &: disabled {
        color: gray;
        cursor: not-allowed;
    }
`

const Error = styled.span`
    color: #FF4136;
    margin-top: 20px;
    &#success{
        color: #517A3E;
    }
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
    const dispatch = useDispatch();
    const navigate = useNavigate();

    //states for login toggles
    const [signIn, setSignIn] = useState(true);
    const [register, setRegister] = useState(false);
    const [forgot, setForgot] = useState(false);

    //string states for input fields
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    //use grabs info from redux and backend 
    const { isFetching, error } = useSelector((state) => state.user);

    //handles backend post request and redux 
    const [logIn, setLogIn] = useState(true);

    //handles register errors
    const [usernameError, setUsernameError] = useState(null);
    const [emailError, setEmailError] = useState(null);

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

    //grabs redux userSlice login state
    const user = useSelector((state) => state.user.currentUser);

    const [cartItems, setCartItems] = useState([]);
    const [loginSuccess, setLoginSuccess] = useState(true);
      
    useEffect(() => {
        async function fetchAndSetCartItems() {
          const items = await fetchCartItems();
          setCartItems(items);
        }
        fetchAndSetCartItems();
      }, []);

//login 
      const handleLogin = async (e) => {
        e.preventDefault();
        await login(dispatch, { username, password });
        if (user) {
          // Fetch cart items and dispatch to Redux after login
          try {
            const items = await fetchCartItems();
            setCartItems(items);
            setLoginSuccess(true);
          } catch (error) {
            // Handle error fetching cart items
            console.error('Error fetching cart items:', error);
          }
        }
      };
    
      // Dispatch the action before the modal closes
      useEffect(() => {
        return () => {
          if (loginSuccess && cartItems !== null && cartItems.length !== 0 && logIn) {
            cartItems.products.forEach((item) => {
              dispatch(
                addToCart({
                  id: item.id,
                  title: item.name,
                  img: item.image,
                  price: item.price,
                  count: item.quantity,
                  pot: 0,
                  size: 0,
                })
              );
            });
            navigate('/');
            setLogIn(false);
          }
        };
      }, [dispatch, loginSuccess, cartItems, logIn, navigate]);


    //Create user: sends user data to db, api call in helpers folder
    const submitRegister = (e) => {
        e.preventDefault();
        sendRegister(username, email, password)
            .then((response) => {
                console.log(response.data);
                setSignIn(true);
                setRegister(false);
            })
            .catch((error) => {
                console.log(error);
                if (error.response && error.response.status === 422) {
                    setUsernameError('Username already exists');
                } else if (error.response && error.response.status === 400) {
                    setEmailError('Account already exists');
                } else {
                    console.log(error)
                }
            })
    }

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
                            <TextInput
                                type="username"
                                id="username"
                                required
                                placeholder='User Name'
                                onChange={(e) => setUsername(e.target.value)}
                            >
                            </TextInput>

                            <InputLabelRow><InputLabel htmlFor="Email">Password *</InputLabel></InputLabelRow>
                            <TextInput
                                type="password"
                                required
                                autocomplete="off"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <SignInButtonMain onClick={handleLogin} disabled={isFetching}>Log In</SignInButtonMain>
                            {error && !user && <Error>Username or password incorrect</Error>}
                            {user && <Error id="success">Sign in Success</Error>}

                            <ForgotButton onClick={handleForgotOpen}>Forgot Password</ForgotButton>
                        </SignInInputForm> : null}

                    {register ?
                        <SignInInputForm>
                            <InputLabelRow>
                                <InputLabel htmlFor="username" style={{ color: usernameError ? 'red' : 'inherit' }}>Username *</InputLabel>
                            </InputLabelRow>
                            <TextInput
                                type="username"
                                id="username"
                                value={username}
                                required
                                placeholder='Username'
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <InputLabelRow>
                                <InputLabel htmlFor="Email" style={{ color: emailError ? 'red' : 'inherit' }}>Email *</InputLabel>
                            </InputLabelRow>
                            <TextInput
                                type="email"
                                id="email"
                                value={email}
                                required
                                placeholder='you@email.com'
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <InputLabelRow>
                                <InputLabel htmlFor="Email">Password *</InputLabel>
                            </InputLabelRow>
                            <TextInput
                                type="password"
                                value={password}
                                minlength="8"
                                required
                                autocomplete="off"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <InputLabelRow>
                                <InputLabel htmlFor="Password" className='bottom-label'>Password most be at least 8 characters</InputLabel></InputLabelRow>
                            <SignInButtonMain onClick={submitRegister}>Sign Up</SignInButtonMain>
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