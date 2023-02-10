import React, { useState } from 'react'
import styled from 'styled-components'

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import MenuIcon from '@mui/icons-material/Menu'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import Badge from "@mui/material/Badge"

import { mobile, tablet, laptop, desktop } from '../../media'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Cart from '../Cart'
import SearchBar from './NavComponents/SearchBar'
import NavBurgerMenu from './NavComponents/NavBurgerMenu'
import LogIn from './NavComponents/LogIn'

const Nav = styled.nav`
    height: 150px;
    z-index: 1;
    background-color: #FEFDFD;
    ${mobile({
        height: '85px'
    })}
`;

const TopSection = styled.div`
    display: flex;
    height: 50px;
    width: auto;
    justify-content: space-between;
    align-items: center;
    margin: 0 50px;
    padding: 10px 50px;
    font-family: Arial;
    background-color: #FEFDFD;
    color: #1B1212;
    z-index: 2;
    ${mobile({
    padding: '10px 10px',
    margin: '0px'
})}
`;

const HamburgerToggle = styled.div`

`

const NavSection = styled.div`
    flex: 1;
    display: flex;
    width: 100%;

    &.navLeft {
        align-items: center;
        justify-content: flex-start;
        margin-left: 20px;
        ${mobile({
            flex: '2',
            fontSize: '10px',
            margin: '0px 20px 0px 0px',
            zIndex: '500',
            width: 'auto'
        })};
    }

    &.navCenter {
        text-align: center;
        justify-content: center;
        ${mobile({
            display: 'none',
        })};
            ${tablet({
            display: 'none'
        })};
    }

    &.navRight {
        align-items: center;
        justify-content: flex-end;
        flex-direction: row;
        ${mobile({
            fontSize: '16px',
        })};
    }
`
const Logo = styled.h1`
    font-size: 26px;
    font-family: Arial Black;
    font-weight: 600;
    ${mobile({
    marginLeft: '10px',
    fontSize: '20px'
})};
    `;


const StyledCartBadge = styled(Badge)({
    "& .MuiBadge-badge": {
        backgroundColor: " #fa3e3e",
        color: '#FEFDFD',
        height: '80%',
        width: 'auto'
    }
});

const SectionUl = styled.ul`
    display: flex;
    color: #1B1212;
    &.bottomUl{
        justify-content: space-between;
        align-items: center;
        padding: 0px 40px;
        margin: 0 50px 0 40px;
        width: 90%;
        height: 20px;
    }
`

const FullScreenIconContainer = styled.div`
${mobile({
    display: 'none',
})};
`

const MenuItem = styled.li`
    font-size: 16px;
    cursor: pointer;
    margin-left: 25px;
    list-style-type: none;
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

const BottomSection = styled.div`
    display: flex;
    height: 20px;
    background-color: #FEFDFD;
    font-family: Arial;
    color: #1B1212;
    align-items: center;
    justify-content: center;
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
const RouterLink = styled(Link)`
  text-decoration: none;
  color: black;
  &.mobileCartLink{
    ${desktop({display: 'none' })};
    ${laptop({display: 'none' })};
    ${tablet({display: 'none' })};
  }
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

const MenuButton = styled.button`
    background-color: transparent;
    border-width: 0;
    font-family: inherit;
    font-size: inherit;
    font-style: inherit;
    font-weight: inherit;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin-bottom: -4px;
    ${desktop({display: 'none'})};
    ${laptop({display: 'none'})};
    ${tablet({display: 'none'})};
`

const Navbar = () => {
    //burger toggle
    const [showBurger, setShowBurger] = useState(false);

    //cart states
    const [cart, setCart] = useState(false);

    //Login states
    const [logIn, setLogIn] = useState(false);

    //navigate for bottom link to props
    const navigate = useNavigate();

    //closes element when outside of sort element is clicked
    const handleCartClickAway = () => {
        setCart(false);
    };

    //closes element when outside of sort element is clicked
    const handleBurgerClickAway = () => {
        setShowBurger(false);
    };

    //number of items in redux cart 
    let badgeQuantity = useSelector((state) => state.cart.products.length);

    return (
        <Nav>
            <TopSection>

                <NavSection className='navLeft'>
                    
                    <MenuButton onClick={() => setShowBurger(!showBurger)}>
                        <MenuIcon />
                    </MenuButton>

                    <Logo aria-label='Link to home'><RouterLink to='/'>PLANT DECOR</RouterLink></Logo>
                </NavSection>

                <NavSection className='navCenter'>
                    <SearchBar />
                </NavSection>

                <NavSection className='navRight'>
                    <SectionUl>
                        <MenuItem>
                    <AccountCircleIcon onClick={() => setLogIn(!logIn)}></AccountCircleIcon>
                    </MenuItem>

            
                    <MenuItem>
                            <RouterLink to = '/cart/' className='mobileCartLink'>
                            <StyledCartBadge badgeContent={badgeQuantity} invisible={badgeQuantity === 0}>
                                    <ShoppingCartOutlinedIcon />
                                </StyledCartBadge>
                            </RouterLink>

                            <FullScreenIconContainer>
                            <StyledCartBadge badgeContent={badgeQuantity} invisible={badgeQuantity === 0}>
                                <ShoppingCartOutlinedIcon onClick={() => setCart(!cart)} />
                            </StyledCartBadge>
                            </FullScreenIconContainer>
                    </MenuItem>

                    </SectionUl>
                </NavSection>
            </TopSection>

            <DividerLine />

            <BottomSection>
               <SectionUl className='bottomUl'>
                <MenuItem><RouterLink to='/'>Home</RouterLink></MenuItem>
                <MenuItem onClick={() => navigate(`/type/${'flower'}`)}>Flowers</MenuItem>
                <MenuItem onClick={() => navigate(`/type/${'leafy'}`)}>Leafy Plants</MenuItem>
                <MenuItem onClick={() => navigate(`/type/${'edible'}`)}>Edible</MenuItem>
                <MenuItem onClick={() => navigate(`/type/herb`)}>Herbs</MenuItem>
                <MenuItem><RouterLink to='/easy'>Easy Plants</RouterLink></MenuItem>
                </SectionUl>
            </BottomSection>
            <DividerLine />

            {logIn ?
            <> 
            <LogIn />
                </>
                : null}

            {showBurger ? 
            <ClickAwayListener onClickAway={handleBurgerClickAway}>
                <HamburgerToggle>
                <NavBurgerMenu />
                </HamburgerToggle>
            </ClickAwayListener> : null}

            {cart ?
                <ClickAwayListener onClickAway={handleCartClickAway}>
                    <CartToggle>
                        <Cart />
                    </CartToggle>
                </ClickAwayListener>
                : null}
        </Nav>
    )
}


export default Navbar;