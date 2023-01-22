import React from 'react';
import styled from 'styled-components';
import Card from './ProductCard';
import { mobile, tablet, laptop, desktop} from '../media';

const CartContainer = styled.div`
  width: 300px;
  height: 100%;
  z-index: 1000;
  position: absolute;
  right: 100px;
  top: 148px;
  display: flex;
  height: auto;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  float: right;
  border: 0.5px solid lightgray;
  background-color: white;
  ${mobile({ 
    width: '60%',
    position: 'absolute',
    top: '75px',
    left: '140px',
    height: 'auto'
})}
`
const CartTitleBanner = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  font-size: 24px;
  ${mobile({ 
    fontSize: '14px'
})};
`

const BannerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-top: 20px;
  font-size: 20px;
  width: 100%;
  height: 100%;
  background-color: white;
  ${mobile({ 
    fontSize: '16px'
  })};
`
const CartTitle = styled.div`
  display: flex;
  flex: 1;
  padding-left: 10px;
  height: 30px;
  align-items: center;
  justify-contents: center;
  font-weight: bold;
  margin-top: -10px;
`
const Line = styled.hr`
  width: 100%;
  background-color: white;
`
const CartItems = styled.div`
  display: flex;
  flex: 1;
  width: 95%;
  padding-bottom: 10px;
  padding-left: 10px;
  background-color: white;
`

const CartCardContainer = styled.div`
  height: 150px;
  width: 100%;
  overflow: scroll;
  align-items: center;
  justify-content: center;
`

const CartCardWrapper = styled.div`
  display: flex;
  max-height: 500px;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: auto;
  width: 97%;
`

const CheckOutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  height: 100%;
  width: 100%;
`
const InfoBanner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 50px;
  width: 90%;
  background-color: white;
  ${mobile({ 
    fontSize: '14px'
})};
`
const Info = styled.p`
  font-size: 14px;
`

const PricingInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  border: 0.5px solid lightgray;
  margin-top: 5px;
`

const PricingDetailRow = styled.div` 
  display: flex;
  flex-direction: row;
  padding: 5px;
  height: 100%;
  width: 100%;
`

const PricingDetail = styled.div`
display: flex;
justify-content: flex-start;
padding-left: 10px;
font-weight: bold;
font-size: 20px;
height: 100%;
width: 100%;
${mobile({ 
  fontSize: '14px'
})};
`

const Price = styled.div`
display: flex;
justify-content: flex-end;
padding-right: 20px;
font-size: 20px;
height: 100%;
width: 100%;
${mobile({ 
  fontSize: '14px'
})};
`

const ButtonBank = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
background-color: white;
height: 100%;
width: 90%;
margin-top: 15px;
${mobile({ 
  height: 'auto',
  width: '200px'
})};
`
const CheckoutButtons = styled.button`
display: flex;
align-items: center;
justify-content: center;
text-align: center;
height: 40px;
width: 100%;
margin-bottom: 10px;
margin-right: 10px;
width: 100%;
${mobile({ 
  height: '25px',
  width: '90px'
})};
`

const Cart = () => {

  return (
     <CartContainer>  

      <CartTitleBanner>
        <BannerContainer>
          <CartTitle>Cart</CartTitle>
        </BannerContainer>
      </CartTitleBanner>

      <Line />

      <CartItems>Items (3)</CartItems>

      <CartCardContainer>
      <CartCardWrapper>
          <Card />
      </CartCardWrapper> 
      </CartCardContainer>

      <CheckOutContainer>
        <PricingInfo>
          <PricingDetailRow>
          <PricingDetail>Subtotal</PricingDetail>
          <Price>$10.99</Price>
          </PricingDetailRow>
        </PricingInfo>

        <ButtonBank>
          <CheckoutButtons>View Cart</CheckoutButtons>
          <CheckoutButtons>Check Out</CheckoutButtons>
        </ButtonBank>

        <InfoBanner>
          <Info>Free shipping on all orders over $50 for the month of January!</Info>
        </InfoBanner>

      </CheckOutContainer>

    </CartContainer>
  )
}

export default Cart;