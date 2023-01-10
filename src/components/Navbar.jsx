import React, {useState} from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import { mobile, tablet, laptop, desktop} from '../media';
import Cart from './Cart';

const Container = styled.div`
    height: 120px;
    margin-bottom: 20px;
    z-index: 500;
    background-color: white;
`;

const Wrapper = styled.div `
    padding: 10px 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 50px;
    margin-right: 50px;
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
    ${mobile({ 
        flex: '2',
        fontSize: '10px',
        marginRight: '20px',
        zIndex: '500',
        margin: '0px'
    })};
`;

const SearchContainer = styled.div`
    width: 100%;
    height: 28px;
    display: flex;
    align-items: center;
    margin-left: 25px;
    margin-right: 10px;
`;

const Input = styled.input`
    margin-left: -5px;
    width: 100%;
    display: flex;
    padding: 5px;
    width: auto;
`;

const Center = styled.div `
    flex: 1;
    text-align: center;
    justify-content: center;
    width: 100%;
    ${mobile({ 
        display: 'none',
    })};

    ${tablet({ 
        display: 'none'
    })};
`;

const QueryIcon = styled(SearchIcon)`
    border: 0.5px solid lightgray;
    padding: 2px;
`

const Logo = styled.h1`
    font-weight: bold;

    ${mobile({ 
        marginLeft: '60px',
        marginRight: '30px',
        fontSize: '20px'
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

                <Logo>PLANT DECOR</Logo>
            </Left>

            <Center>
               <SearchContainer>
               <Input style = {{width: "450px"}} placeholder="Search"/>
               <QueryIcon />
                </SearchContainer>
            </Center>

            <Right>
                <MenuItem onClick = {() => setLogIn(!logIn)} onMouseOver = {() => setLogIn(!logIn)} onMouseOut = {() => setLogIn(logIn)}>SIGN IN</MenuItem>
                <MenuItem>
                <ShoppingCartOutlinedIcon onClick = {() => setCart(!cart)} onMouseEnter = {() => setCart(cart)} onMouseLeave = {() => setCart(!cart)}/>
                </MenuItem>
            </Right>
            </Wrapper>
    
        <Bottom>
            <MenuItem>Home</MenuItem>
            <MenuItem>Flowers</MenuItem>
            <MenuItem>Leafy Plants</MenuItem>
            <MenuItem>Editable</MenuItem>
            <MenuItem>By Room</MenuItem>
            <MenuItem>Care Type</MenuItem>
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
            <MenuItem>Home</MenuItem>
            <MenuItem>Flowers</MenuItem>
            <MenuItem>Eat</MenuItem>
            <MenuItem>Leafy</MenuItem>
            <MenuItem>Rooms</MenuItem>
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