import React, {useState} from 'react';
import styled from 'styled-components';

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ClickAwayListener from '@mui/material/ClickAwayListener';

import { mobile, tablet, laptop, desktop } from '../../media';
import {Link, useNavigate} from 'react-router-dom';
import Cart from '../Cart';
import SearchBar from './NavComponents/SearchBar';
import NavBurgerMenu from './NavComponents/NavBurgerMenu';

const Container = styled.div`
    height: 150px;
    z-index: 500;
    background-color: #FEFDFD;
`;

const Wrapper = styled.div `
    padding: 10px 50px;
    display: flex;
    height: 50px;
    width: auto;
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

const MobileCartIconContainer = styled.div`
${desktop({ 
  display: 'none'  
})};

${tablet({ 
    display: 'none'  
  })};

  ${laptop({ 
    display: 'none'  
  })},
`

const FullScreenIconContainer = styled.div`
${mobile({ 
    display: 'none',
})},
`

const MobileCartLink = styled(ShoppingCartOutlinedIcon)`
`
const FullScreenCartLink = styled(ShoppingCartOutlinedIcon)`
   
`
const MenuItem = styled.div`
    font-size: 16px;
    cursor: pointer;
    margin-left: 25px;
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
    height: 20px;
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

const DividerLine = styled.hr`
    width: 100%;
    color: #CCD3C2;
    ${mobile({
        display: 'none'
    })};
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
    const [logIn, setLogIn] = useState(false);
    const [cart, setCart] = useState(false);
    const [show, setShow] = useState(false);
    
    const navigate = useNavigate();

    //closes element when outside of sort element is clicked
    const handleClickAway = () => {
        setCart(false);
      };
    
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
                
                <SignInIcon onClick = {() => setLogIn(!logIn)} onMouseOver = {() => setLogIn(!logIn)} onMouseOut = {() => setLogIn(logIn)}></SignInIcon>
                <MenuItem>

                <FullScreenIconContainer>
                <FullScreenCartLink onClick = {() => setCart(!cart)}/>
                </FullScreenIconContainer>
                
                <MobileCartIconContainer>
                <RouterLink to = '/cart'>
                <MobileCartLink />
                </RouterLink>
                </MobileCartIconContainer>
                </MenuItem>
            </Right>
            </Wrapper>

         <DividerLine />   
        <Bottom>
            <MenuItem><RouterLink to = '/'>Home</RouterLink></MenuItem>
            <MenuItem  onClick={() => navigate(`/type/${'flower'}`)}>Flowers</MenuItem>
            <MenuItem onClick={() => navigate(`/type/${'leafy'}`)}>Leafy Plants</MenuItem>
            <MenuItem onClick={() => navigate(`/type/${'edible'}`)}>Edible</MenuItem>
            <MenuItem onClick={() => navigate(`/type/herb`)}>Herbs</MenuItem>
            <MenuItem><RouterLink to = '/easy'>Easy Plants</RouterLink></MenuItem>
        </Bottom>
        <DividerLine />

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
       <NavBurgerMenu /> 
       : null}

        {cart ?
            <ClickAwayListener onClickAway={handleClickAway}>
            <CartToggle >
            <Cart /> 
            </CartToggle>
            </ClickAwayListener>
        : null} 

    </Container>
  )
}


export default Navbar;