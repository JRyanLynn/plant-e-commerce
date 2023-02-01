import React from 'react';
import styled from "styled-components";
import { mobile } from '../media';
import { Link } from 'react-router-dom';

import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import BusinessIcon from '@mui/icons-material/Business';

  
  const Container = styled.div`
    display: flex;
    font-family: Arial;
    background-color: #F5F5F5;
    color: #1B1212;
    ${mobile({ flexDirection: "column" })}
  `;
  
  const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
    ${mobile({ display: 'none' })}
  `;
  
  const Logo = styled.h1`
    font-size: 30px;
    color: #1B1212;
  `;
  
  const Desc = styled.p`
    font-size: 16px;
    margin-top: -5px;
  `;
  
  const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none" })}
  `;
  
  const Title = styled.h3`
    margin-bottom: 20px;
  `;
  
  const List = styled.ul`
    margin-left: 5px;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
  `;
  
  const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
    &: hover {
      text-decoration: underline;
    };
    cursor: pointer;
  `
  
  const Right = styled.div`
    flex: 1;
    padding: 20px;
  `;
  
  const ContactItem = styled.div`
    margin-bottom: 10px;
    display: flex;
    align-items: center;
  `;

const RouterLink = styled(Link)`
  text-decoration: none;
  color: black;
`
  
const Footer = () => {
  return (
    <Container>
    <Left>
      <Logo>Plant Decor</Logo>
      <Desc>
        House plants grown with love, by small farmers in your area, shipped straight to your door. 
      </Desc>
    </Left>
    <Center>
      <Title style = {{marginLeft: '40px'}}>Useful Links</Title>
      <List>
        <ListItem><RouterLink to ='/'>Home</RouterLink></ListItem>
        <ListItem>Contact</ListItem>
        <ListItem>My Order</ListItem>
        <ListItem><RouterLink to= '/cart'>Cart</RouterLink></ListItem>
        <ListItem><RouterLink to = '/product/1'>All Plants</RouterLink></ListItem>
        <ListItem><RouterLink to = 'type/herb'>Herbs</RouterLink></ListItem>
        <ListItem><RouterLink to = 'type/flower'>Flowers</RouterLink></ListItem>
        <ListItem><RouterLink to = 'type/leafy'>Leafy Plants</RouterLink></ListItem>
        <ListItem><RouterLink to = 'type/edible'>Edible Plants</RouterLink></ListItem>
        <ListItem><RouterLink to = '/easy'>Easy Plants</RouterLink></ListItem>
      </List>
    </Center>
    <Right>
      <Title>Contact</Title>
      <ContactItem>
        <BusinessIcon style={{marginRight:"10px"}}/> 2121 Ocean Lane - Denver, CO 97202
      </ContactItem>
      <ContactItem>
        <PhoneIcon style={{marginRight:"10px"}}/> +1-800-666-6666
      </ContactItem>
      <ContactItem>
        <MailOutlineIcon style={{marginRight:"10px"}} /> contact@plants.com
      </ContactItem>
    </Right>
  </Container>
  )
}

export default Footer