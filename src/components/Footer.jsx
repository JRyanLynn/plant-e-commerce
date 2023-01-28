import React from 'react';
import styled from "styled-components";
import { mobile } from '../media';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import BusinessIcon from '@mui/icons-material/Business';

  
  const Container = styled.div`
    display: flex;
    font-family: Arial;
    ${mobile({ flexDirection: "column" })}
  `;
  
  const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
  `;
  
  const Logo = styled.h1``;
  
  const Desc = styled.p`
    margin: 20px 0px;
  `;
  
  const SocialContainer = styled.div`
    display: flex;
  `;
  
  const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
  `;
  
  const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none" })}
  `;
  
  const Title = styled.h3`
    margin-bottom: 30px;
  `;
  
  const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
  `;
  
  const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
  `;
  
  const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "#fff8f8" })}
  `;
  
  const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
  `;
  
  const Payment = styled.img`
      width: 50%;
  `;

const Footer = () => {
  return (
    <Container>
    <Left>
      <Logo>Plant Decor</Logo>
      <Desc>
        There are many variations of passages of Lorem Ipsum available, but
        the majority have suffered alteration in some form, by injected
        humour, or randomised words which don’t look even slightly believable.
      </Desc>
      <SocialContainer>
        <SocialIcon color="3B5999">
          <FacebookIcon />
        </SocialIcon>
        <SocialIcon color="E4405F">
          <InstagramIcon />
        </SocialIcon>
        <SocialIcon color="55ACEE">
          <TwitterIcon />
        </SocialIcon>
        <SocialIcon color="E60023">
          <PinterestIcon />
        </SocialIcon>
      </SocialContainer>
    </Left>
    <Center>
      <Title>Useful Links</Title>
      <List>
        <ListItem>Home</ListItem>
        <ListItem>Cart</ListItem>
        <ListItem>All Plants</ListItem>
        <ListItem>Herbs</ListItem>
        <ListItem>Flowers</ListItem>
        <ListItem>Leafy Plants</ListItem>
        <ListItem>Edible Plants</ListItem>
        <ListItem>Easy Plants</ListItem>
        <ListItem>By Light Requirement</ListItem>
        <ListItem>Terms</ListItem>
      </List>
    </Center>
    <Right>
      <Title>Contact</Title>
      <ContactItem>
        <BusinessIcon style={{marginRight:"10px"}}/> 2121 Ocean Lane - Denver, Co 97202
      </ContactItem>
      <ContactItem>
        <PhoneIcon style={{marginRight:"10px"}}/> +1-800-666-6666
      </ContactItem>
      <ContactItem>
        <MailOutlineIcon style={{marginRight:"10px"}} /> contact@plants.com
      </ContactItem>
      <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
    </Right>
  </Container>
  )
}

export default Footer