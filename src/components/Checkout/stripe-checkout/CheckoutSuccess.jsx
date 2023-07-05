import React from 'react';
import styled from 'styled-components';
import { Link, Navigate } from 'react-router-dom';
import { mobile, tablet } from '../../../media';

const PageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  font-family: Arial; 
  color: #1B1212;
  background-color: #FEFDFD;
`
const Header = styled.h1`
  font-size: 28px;
  font-weight: 550;
  margin-top: 20px;    
  ${mobile({fontSize: '24px'})};
`
const SubHead = styled.h2`
  font-size: 20px;
  font-weight: 400;
  margin-top: -15px;
  ${mobile({fontSize: '16px'})};
`
const Image = styled.img`
  height: 40%;
  width: 40%;
  border-radius: 50px;
  ${mobile({
    height: '70%',
    width: '70%'
  })};
`
const RouterLink = styled(Link)`
  text-decoration: none;
  color: #FEFDFD;
  font-size: 20px;
  ${mobile({fontWeight: '550'})};
`
const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 40px;
  margin-right: 10px;
  margin-top: 20px;
  padding: 10px 0px 10px 0px;
  width: 30%;
  cursor: pointer;
  font-weight: 600;
  background-color: #517A3E;
  border: 1px solid #CCD3C2;
  color: #FEFDFD;
  ${mobile({
    width: 'auto',
    padding: '10px 10px 10px 10px'
  })};
`

const CheckoutSuccess = () => {
  return (
    <PageContainer>
    <Image src='https://media.istockphoto.com/id/1152703644/photo/happy-mature-florist-watering-plants-with-garden-hose-in-a-greenhouse.jpg?s=612x612&w=0&k=20&c=hBeKKXnVRl688rVi2TtEiylxwmi5EEoy24Cecipax5w=' alt='Image of a farmer' />
    <Header>Thanks For The Support!</Header>
    <SubHead>Order details will be sent to your email shortly</SubHead>
    <Button>
      <RouterLink to='/'>
        Return to Homepage
      </RouterLink>
    </Button>
    </PageContainer>
  )
}

export default CheckoutSuccess