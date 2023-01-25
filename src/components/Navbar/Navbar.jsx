import React, {useState} from 'react';
import styled from 'styled-components';

import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import {mobile, tablet, laptop, desktop} from '../../media';
import {Link, useNavigate} from 'react-router-dom';
import Cart from '../Cart';
import { productArray } from '../../data';

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

const SearchContainer = styled.div`
    width: 100%;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    margin-left: 30px;
    display: block;
`;

const InputRow = styled.div`
    display: flex;
    flex-direction: row;
`

const Input = styled.input`
    display: flex;
    padding: 5px;
`;

const Center = styled.div `
    flex: 1;
    text-align: center;
    justify-content: center;
    ${mobile({ 
        display: 'none',
    })};

    ${tablet({ 
        display: 'none'
    })};
`;

const QueryIcon = styled(SearchIcon)`
    height: 44px;
    padding: 3px;
    margin-left: -30px;
`

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

const SearchResultContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: flex-start;
    justify-content: center;
    width: 30.10%;
    height: auto;
    border: 0.5px solid #CCD3C2;
    z-index: 999;
    background-color: #FEFDFD;
    box-shadow:
    0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048),
    0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072),
    0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12),
`

const SearchUnorderedList = styled.ul`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: flex-start;
    justify-content: center;
`

const SearchResultItem = styled.li`
    display: flex;
    height: 10px;
    list-style-type: none;
`

const Navbar = () => {
    const [show, setShow] = useState(false);
    const [logIn, setLogIn] = useState(false);
    const [cart, setCart] = useState(false);
    const [searchResultBox, setSearchResultBox] = useState(false);
    const [searchResults, setSearchResults] = useState('');
    const [selectedCheckbox, setSelectedCheckbox] = useState('');
    
    const navigate = useNavigate();

    const handleLinkClick = () => {
        navigate(`/product/${selectedCheckbox}`);
    }
    

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
               <SearchContainer>
                <InputRow>
               <Input style = {{width: "450px"}} placeholder="Search For Plants You Love" onChange={e => {setSearchResults(e.target.value); setSearchResultBox(true)}} />
               <QueryIcon />
               </InputRow>
               
            {searchResultBox ?
            <SearchResultContainer>
                
                {searchResults === '' ? '' : productArray.filter((item) => item.name.toLowerCase().includes(searchResults)).slice(0, 5).map((item) => (
                        <SearchUnorderedList>
                        <SearchResultItem key = {item.id}><RouterLink to={`/products/${productArray.indexOf(item) + 1}`} onClick={() => setSearchResultBox(false)}>{item.name}</RouterLink></SearchResultItem>
                        </SearchUnorderedList>
                ))}

            </SearchResultContainer> : null}

                </SearchContainer>
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
            <MenuItem><RouterLink to='product/1'>Flowers</RouterLink></MenuItem>
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