import React, {useState} from 'react';
import styled from 'styled-components';

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import {mobile, tablet, laptop, desktop} from '../../media';
import {Link, useNavigate} from 'react-router-dom';
import Cart from '../Cart';
import SearchBar from './SearchBar';

const Container = styled.div`
    height: 120px;
    margin-bottom: 20px;
    z-index: 500;
    background-color: #FEFDFD;
`;

const Wrapper = styled.div `
    padding: 10px 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 50px;
    margin-right: 50px;
    font-family: Arial;
    background-color: #FEFDFD;
    color: #1B1212;
    ${mobile({ 
        padding: '10px 10px',
        margin: '0px',
    })}
`;

const Burger = styled.div`
    display: none;
    ${mobile({ 
       color: 'black',
       cursor: 'pointer',
       display: 'flex',
       position: 'relative',
       marginRight: '-50px',
       zIndex: '1000',
    })};
`

const Left = styled.div `
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-left: 20px;
    font-family: Arial Black;
    ${mobile({ 
        flex: '2',
        fontSize: '10px',
        marginRight: '20px',
        zIndex: '500',
        margin: '0px'
    })};
`;

const Input = styled.input`
    display: flex;
    padding: 5px;
`;

const Center = styled.div `
    flex: 1;
    height: auto;
    width: 100%;
    text-align: center;
    justify-content: center;
    ${mobile({ 
        display: 'none',
    })};
    ${tablet({ 
        display: 'none'
    })};
`;

const Logo = styled.h1`
    font-size: 30px;
    ${mobile({ 
        marginLeft: '60px',
        marginRight: '30px',
        fontSize: '16px'
    })};
    `;

const Right = styled.div `
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ 
        fontSize: '16px',
    })};
`;

const SignIn = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    z-index: 999;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    top: 145px;
    right: 50px;
    background-color: white;
    width: 250px;
    height: 250px;
    margin-left: auto;
    margin-right: 50px;
    border: 0.5px solid lightgray;
    ${mobile({ 
        marginRight: '-50px',
        marginTop: '-67px'
    })};
`

const SignInIcon = styled(AccountCircleIcon)`
`

const HeartIcon = styled(FavoriteBorderIcon)`
    margin-right: 20px;
`

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    padding-right: 20px;
    font-size: 18px;
    &:hover{
        text-decoration: underline;
    }
    ${mobile({ 
        paddingRight: '5px',
        marginLeft: '10px',
        paddingTop: '5px',
        fontSize: '14px',
    })};
`;

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 40px;
    margin-left: 40px;
    margin-right: 50px;
    background-color: #FEFDFD;
    font-family: Arial;
    color: #1B1212;
    ${mobile({
        display: 'none',
    })};
`

const BurgerToggle = styled.div`
${mobile({
    border: '0.5px solid lightgray',
    padding: '10px',
    zIndex: '999',
    justifyContent: 'center',
    alignItems: 'stretch',
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    backgroundColor: 'white',
    top: '78px',
    left: '17px',
    zIndex: '1000'
})}
`

const CartToggle = styled.div`
    border: '0.5px solid lightgray';
    padding: '10px';
    justifyContent: 'center';
    alignItems: 'stretch';
    display: 'flex';
    flexDirection: 'column';
    position: 'absolute';
`

const RouterLink = styled(Link)`
  text-decoration: none;
  color: black;
`
const Navbar = () => {
    const [show, setShow] = useState(false);
    const [logIn, setLogIn] = useState(false);
    const [cart, setCart] = useState(false);

  return (
    <Container>
        <Wrapper>
         
            <Left>
            <Burger>
            <MenuIcon onClick = {() => setShow(!show)} />
            </Burger>

                <Logo><RouterLink to = '/'>PLANT DECOR</RouterLink></Logo>
            </Left>

            <Center>
                <SearchBar />
            </Center>

            <Right>
                <HeartIcon />
                
                <SignInIcon style = {{fontWeight: '600'}} onClick = {() => setLogIn(!logIn)} onMouseOver = {() => setLogIn(!logIn)} onMouseOut = {() => setLogIn(logIn)}></SignInIcon>
                <MenuItem>

                <ShoppingCartOutlinedIcon onClick = {() => setCart(!cart)} onMouseEnter = {() => setCart(cart)} onMouseLeave = {() => setCart(!cart)}/>
                </MenuItem>
            </Right>
            </Wrapper>
        <Bottom>
            <MenuItem><RouterLink to = '/'>Home</RouterLink></MenuItem>
            <MenuItem><RouterLink to='/flowers/'>Flowers</RouterLink></MenuItem>
            <MenuItem>Leafy Plants</MenuItem>
            <MenuItem>Editable</MenuItem>
            <MenuItem>Herbs</MenuItem>
            <MenuItem>Easy Plants</MenuItem>
        </Bottom>

        {logIn ?
                <SignIn onMouseEnter = {() => setLogIn(logIn)} onMouseLeave = {() => setLogIn(!logIn)}>
                    <h1>Sign In</h1>
               <Input placeholder="Username"/>

               <Input placeholder="Password"/>
                <button>Log In</button>
                <p>Forgot Info</p>
                </SignIn>
        : null}

        {show ? 
            <BurgerToggle>
            <MenuItem><RouterLink to = '/'>Home</RouterLink></MenuItem>
            <MenuItem>Flowers</MenuItem>
            <MenuItem>Eat</MenuItem>
            <MenuItem>Leafy</MenuItem>
            <MenuItem>Herbs</MenuItem>
            <MenuItem>Easy Plants</MenuItem>
            </BurgerToggle>
            : null}

        {cart ?
            <CartToggle onMouseEnter = {() => setCart(cart)} onMouseLeave = {() => setCart(!cart)} >
            <Cart /> 
            </CartToggle>
        : null} 

    </Container>
  )
}


export default Navbar;