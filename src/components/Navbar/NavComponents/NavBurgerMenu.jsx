import React, {useState} from 'react';
import styled from 'styled-components';
import { mobile, tablet, desktop } from '../../../media';
import { Link, useNavigate } from 'react-router-dom';

const BurgerContainer = styled.div`
${mobile({
    border: '0.5px solid #CCD3C2',
    padding: '10px',
    fontSize: '16px',
    zIndex: '999',
    height: 'auto',
    width: '33%',
    fontWeight: '500',
    fontFamily: 'Arial',
    alignItems: 'stretch',
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    backgroundColor:  '#F5F5F5',
    top: '70px',
    left: '0px',
    zIndex: '1000',
    paddingTop: '10px',
    paddingBottom: '20px'
})};

${tablet({ 
    display: 'none'
})};

${desktop({ 
    display: 'none'
})};
`
const MenuItem = styled.div`
    font-size: 16px;
    cursor: pointer;
    margin-left: 25px;
    padding: 5px;
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

const RouterLink = styled(Link)`
  text-decoration: none;
  color: black;
`

const NavBurgerMenu = () => {
    const navigate = useNavigate();  
  return (
    <>
        <BurgerContainer>
        <MenuItem><RouterLink to = '/'>Home</RouterLink></MenuItem>
            <MenuItem  onClick={() => navigate(`/type/${'flower'}`)}>Flowers</MenuItem>
            <MenuItem onClick={() => navigate(`/type/${'leafy'}`)}>Leafy Plants</MenuItem>
            <MenuItem onClick={() => navigate(`/type/${'edible'}`)}>Edible</MenuItem>
            <MenuItem onClick={() => navigate(`/type/herb`)}>Herbs</MenuItem>
            <MenuItem><RouterLink to = '/easy'>Easy Plants</RouterLink></MenuItem>
        </BurgerContainer>
        </>
  )
}

export default NavBurgerMenu