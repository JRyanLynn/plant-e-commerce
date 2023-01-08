import React from 'react';
import styled from 'styled-components';
import { mobile, tablet, laptop, desktop} from '../media';

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 5px;
    padding-bottom: 5px;
    background-color: white;
    width: 100%;
    height: 100%;
    ${mobile({ 
    width: '100%'
    })};
`

const FooterElement = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    flex: 1;
    width: 100%;
    height: 150px;
    align-items: center;
    background-color: lightgray;
    ${mobile({ 
        height: '170px',

    })};
`
const TitleContents = styled.h1`
    fontWeight: bold; 
    font-size: 20px;
`

const Contents = styled.a`
    font-size: 16px;
    text-align: center;
    justify-content: center;
    padding-top: 3px;
    align-items: center;
    &:hover{
        text-decoration: underline;
    }
    ${mobile({ 
        fontSize: '13px',
        textAlign: 'center',
        padding: '3px'
    })};
`

const Footer = () => {
  return (
    <Wrapper>
    <FooterElement>
        <TitleContents>About</TitleContents>
        <Contents>Mission</Contents>
        <Contents>Farmers</Contents>
        <Contents>FAQs</Contents>
        <Contents>Blog</Contents>
    </FooterElement>

    <FooterElement>
        <TitleContents>Need Help</TitleContents>
        <Contents>Order Issues</Contents>
        <Contents>Get a Refund</Contents>
        <Contents>Talk to Customer Service</Contents>
    </FooterElement>

    <FooterElement>
        <TitleContents>Contact</TitleContents>
        <Contents>1800-111-1111</Contents>
        <Contents>Denver, CO</Contents>
        <Contents>email@address.com</Contents>
    </FooterElement>
    </Wrapper>

  )
}

export default Footer