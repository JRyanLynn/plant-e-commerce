import React from 'react';
import styled from 'styled-components';
import Card from './ProductCard';
import { mobile, tablet, laptop, desktop} from '../media';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';



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
  align-items: center;
  justify-contents: center;
  font-weight: 600;
  font-size: 24px;
  margin-top: -10px;
`
const Line = styled.hr`
  width: 95%;

  color: lightgray;
`
const CartItems = styled.div`
  display: flex;
  flex: 1;
  width: 95%;
  padding-bottom: 10px;
  padding-left: 10px;
  background-color: white;
  font-size: 16px;
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
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: white;
  height: 100%;
  width: 97%;
`

const CartEmpty = styled.h2`
  font-size: 16px;
  font-weight: 500;
`

const CheckOutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  border: 0.5px solid lightgray;
  width: 100%;
  height: 100%;
`
const InfoBanner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: white;
  font-weight: 500;
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
  width: 100%;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  ${mobile({ 
    fontSize: '14px'
  })};
`

const PricingDetailRow = styled.div` 
  display: flex;
  flex-direction: row;
  padding: 5px;
  margin-top: 10px;
  width: 100%;
`

const PricingDetail = styled.div`
display: flex;
justify-content: flex-start;
padding-left: 10px;
font-weight: bold;
`

const Price = styled.div`
display: flex;
justify-content: flex-end;
padding-right: 20px;
width: 100%;
font-weight: 500;
`

const ButtonBank = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
background-color: white;
width: 90%;
margin-top: 10px;
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
margin-right: 10px;
width: 90%;
${mobile({ 
  height: '25px',
  width: '90px'
})};
`

const RouterLink = styled(Link)`
  text-decoration: none;
  color: black;
`

const Cart = () => {
  const cardQuantity = useSelector((state) => state.cart.products.length);
  
  const subTotal = useSelector((state) => 
  state.cart.products.reduce((acc, product) => 
    acc + product.price * product.count, 0))

  return (
     <CartContainer>  

      <CartTitleBanner>
        <BannerContainer>
          <CartTitle>Cart</CartTitle>
        </BannerContainer>
      </CartTitleBanner>

      <Line />

      <CartItems>Items ({cardQuantity})</CartItems>

      <CartCardContainer>
     <CartCardWrapper>
     {cardQuantity === 0 ? <CartEmpty>No Items Found</CartEmpty> : <Card />}
      </CartCardWrapper>
      </CartCardContainer>

      <CheckOutContainer>
        <PricingInfo>
          <PricingDetailRow>
          <PricingDetail>Subtotal</PricingDetail>
          <Price>${(subTotal).toFixed(2)}</Price>
          </PricingDetailRow>
        </PricingInfo>

        <ButtonBank>
          <CheckoutButtons style = {{backgroundColor: 'white', border: '1.5px solid lightgray'}}>
            <RouterLink to = '/cart'>
            Full Cart
            </RouterLink>
            </CheckoutButtons>
          <CheckoutButtons style = {{fontWeight: '600', color: 'white', backgroundColor: 'green', border: '1px solid lightgray'}}>Check Out</CheckoutButtons>
        </ButtonBank>

        <InfoBanner>
          <Info>Free shipping on all orders over $50!</Info>
        </InfoBanner>

      </CheckOutContainer>

    </CartContainer>
  )
}

export default Cart;