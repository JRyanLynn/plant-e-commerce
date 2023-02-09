import React, {useState} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { mobile } from '../../../media';

const BurgerContainer = styled.menu`
    display: flex;
    position: absolute;    
    height: auto;
    width: 70%;    
    top: 85px;
    left: 8px;
    font-size: 16px;
    z-index: 999;
    font-family: Arial;
    cursor: pointer;
    justify-content: center;
    margin: 0;
    padding: 0;
    color: #1B1212;
    box-shadow:
  0 2.8px 2.2px rgba(0, 0, 0, 0.034),
  0 6.7px 5.3px rgba(0, 0, 0, 0.048),
  0 12.5px 10px rgba(0, 0, 0, 0.06),
  0 22.3px 17.9px rgba(0, 0, 0, 0.072),
  0 41.8px 33.4px rgba(0, 0, 0, 0.086),
  0 100px 80px rgba(0, 0, 0, 0.12)
`
const MenuUlNav = styled.ul`
    display: flex;
    position: relative;
    width: 100%;
    flex-direction: column;
    align-items: center;
    list-style-type: none;
    margin: 0px;
    padding: 0px;
`
const MenuItem = styled.li`
    display: flex;
    width: 100%;
    font-size: 16px;
    padding: 10px 0px 10px 15px;
    height: 30px;
    align-items: center;
    background-color: #F5F5F5;
    border: 0.5px solid #CCD3C2;
`;

const RouterLink = styled(Link)`
  text-decoration: none;
  color: black;
  width: 100%;
`

const NavBurgerMenu = () => {
    const [isVisible, setIsVisible] = useState(true);

    const hideMenu = () => {
        setIsVisible(false);
    };
    return (
        <>
           {isVisible && <BurgerContainer>
                <MenuUlNav>
                    <MenuItem onClick={hideMenu}><RouterLink to='/'>Home</RouterLink></MenuItem>
                    <MenuItem onClick={hideMenu}><RouterLink to={`/type/${'flower'}`}>Flowers</RouterLink></MenuItem>
                    <MenuItem onClick={hideMenu}><RouterLink to={`/type/${'leafy'}`}>Leafy Plants</RouterLink></MenuItem>
                    <MenuItem onClick={hideMenu}><RouterLink to={`/type/${'edible'}`}>Edible</RouterLink></MenuItem>
                    <MenuItem onClick={hideMenu}><RouterLink to={`/type/${'herb'}`}>Herbs</RouterLink></MenuItem>
                    <MenuItem onClick={hideMenu}><RouterLink to='/easy'>Easy Plants</RouterLink></MenuItem>
                </MenuUlNav>
            </BurgerContainer>}
            </>
    )
}

export default NavBurgerMenu;