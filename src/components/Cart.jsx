import React from 'react';
import styled from 'styled-components';
import Card from './ProductCard';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import axios from 'axios';

const CartContainer = styled.div`
  display: flex;
  position: absolute;
  z-index: 1000;
  right: 15px;
  top: 125px;
  width: 300px;
  height: auto;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: Arial;
  color: #1B1212;
  background-color: #F5F5F5;
  border: 1px solid #CCD3C2;
  box-shadow:
  0 2.8px 2.2px rgba(0, 0, 0, 0.034),
  0 6.7px 5.3px rgba(0, 0, 0, 0.048),
  0 12.5px 10px rgba(0, 0, 0, 0.06),
  0 22.3px 17.9px rgba(0, 0, 0, 0.072),
  0 41.8px 33.4px rgba(0, 0, 0, 0.086),
  0 100px 80px rgba(0, 0, 0, 0.12);
`

const BannerContainer = styled.header`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  justify-content: flex-start;
  align-items: center;
  background: #dcdcdc;
`
const CartTitle = styled.h1`
  display: flex;
  font-weight: 600;
  font-size: 24px;
  margin-left: 10px;
`
const CartItems = styled.h2`
  display: flex;
  font-size: 20px;
  padding-left: 5px;
`

const CartCardContainer = styled.div`
  height: 200px;
  width: 100%;
  overflow: scroll;
  align-items: center;
  background-color: #F5F5F5;
  justify-content: center;
`

const CartCardWrapper = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #F5F5F5;
  height: auto;
  width: 97%;
  margin: 0px;
  padding: 0px;
`

const CartEmpty = styled.p`
  font-size: 16px;
  font-weight: 500;
  background-color: #F5F5F5;
`

const CheckOutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #dcdcdc;
  width: 100%;
  height: 100%;
`
const InfoBanner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-weight: 500;
  margin-top: 10px;
`
const Info = styled.p`
  font-size: 14px;
`

const PricingInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 99%;
  align-items: center;
  justify-content: center;
  font-size: 16px;
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
  width: 90%;
  margin-top: 10px;
`

const CheckoutButtons = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 40px;
  margin-right: 10px;
  width: 90%;
  cursor: pointer;
  &.full-cart {
    background-color: #FEFDFD; 
    border: 1px solid #CCD3C2;
    font-weight: 500;
  }
  &.check-out {
    font-weight: 600;
    background-color: #517A3E;
    border: 1px solid #CCD3C2;
    color: #FEFDFD;
  }

`

const RouterLink = styled(Link)`
  text-decoration: none;
  color: black;
`

const url = "http://localhost:5000/api";

const Cart = () => {
  const cardQuantity = useSelector((state) => state.cart.products.length);

  const cart = useSelector((state) => state.cart.products);

  //Pulls prices from redux and multiples them by count
  const subTotal = useSelector((state) =>
    state.cart.products.reduce((acc, product) =>
      acc + product.price * product.count, 0))

      const handleCheckout = () => {
        axios
          .post(`${url}/stripe/create-checkout-session`, {
            cartItems: cart,
            // put user _id from backend get request here
          })
          .then((res) => {
            if (res.data.url) {
              window.location.href = res.data.url;
            }
          })
          .catch((error) => {
            console.log(error.message);
          });
      };


  return (
    <CartContainer>

      <BannerContainer>
        <CartTitle>Cart</CartTitle>
        <CartItems>({cardQuantity})</CartItems>
      </BannerContainer>

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
          <CheckoutButtons className='full-cart'>
            <RouterLink to='/cart'>
              Full Cart
            </RouterLink>
          </CheckoutButtons>
          <CheckoutButtons onClick={handleCheckout} className='check-out'>
            Check Out
            </CheckoutButtons>
        </ButtonBank>

        <InfoBanner>
          <Info>Free shipping on all orders over $50!</Info>
        </InfoBanner>
      </CheckOutContainer>
    </CartContainer>
  )
}

export default Cart;