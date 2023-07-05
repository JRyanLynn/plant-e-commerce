import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { mobile, tablet } from '../../../media';
import { useDispatch, useSelector } from "react-redux";
import { logout } from '../../../redux/userSlice';
import axios from 'axios';
import { fetchCartItems } from '../../../helpers';
import { addToCart } from '../../../redux/cartReducer';

const PageContainer = styled.div`
  display: flex;
  position: absolute;
  z-index: 1000;
  right: 15px;
  top: 125px;
  width: 300px;
  height: auto;
  align-items: flex-start;
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
  ${mobile({
    width: '200px',
    top: '82px',
    right: '5px'
})}
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

const UserName = styled.h1`
    font-size: 20px;
    margin-left: 10px;
  `

const List = styled.ul`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  list-style-type: none;
  margin: 0px;
  padding: 0px;
  `

const ListItem = styled.li`
  display: flex;
  width: 95%;
  font-size: 16px;
  padding: 10px 0px 10px 15px;
  height: 30px;
  align-items: center;
  background-color: #F5F5F5;
  border: 0.5px solid #CCD3C2;
  cursor: pointer;
`

const Button = styled.button`
  border: none;
  background-color: inherit;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
`
  const MessageBanner = styled.div`
    display: flex;
    width: 100%;
    height: 30px;
    align-items: center;
    justify-content: center;
    &#cart-save-success{
      background-color: #517A3E;
    };
    &#cart-save-error {
      background-color: #FF4136;
    };
  `

  const Error = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: auto;
    color: #FEFDFD;
    font-weight: 600;
    font-size: 14px;
    text-align: center;
`
const LoggedInUser = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart.products);
  const user = useSelector((state) => state.user.currentUser);

  const [saveCartMessage, setSaveCartMessage] = useState('');
  const [saveCartError, setSaveCartError] = useState('');

  const handleLogout = () => {
    dispatch(logout());
  };

  //cart saved
  const handleSaveCart = async () => {
    try {
      const transformedCart = cart.map((item) => ({
        id: item.id,
        name: item.title || '',
        image: item.img || '',
        price: parseFloat(item.price),
        quantity: item.count,
      }));

      const response = await axios.post('http://localhost:5000/api/carts', {
        userId: user.user._id,
        products: transformedCart,
      });

      console.log('Cart saved:', response.data);
      setSaveCartMessage('Cart saved');
      setSaveCartError('');

      setTimeout(() => {
        setSaveCartMessage('');
        setSaveCartError('');
      }, 10000); // Clear message and error after 10 seconds
    } catch (error) {
      console.error('Error saving cart:', error);
      setSaveCartMessage('');
      setSaveCartError('Error saving cart');

      setTimeout(() => {
        setSaveCartMessage('');
        setSaveCartError('');
      }, 10000); // Clear message and error after 10 seconds
    }
  };

  return (
    <PageContainer>
      <BannerContainer>
        <UserName>{`Hello ${user.user.username}`}</UserName>
      </BannerContainer>
      {saveCartMessage && <MessageBanner id='cart-save-success'><Error id='success'>{saveCartMessage}</Error></MessageBanner>}
      {saveCartError && <MessageBanner id='cart-save-error'><Error>{saveCartError}</Error></MessageBanner>}
      <List>
        <ListItem>
          <Button onClick={handleSaveCart}>Save Cart</Button>
        </ListItem>
        <ListItem>
        <Button onClick={handleLogout}>Log Out</Button>
        </ListItem>
      </List>
    </PageContainer>
  );
};

export default LoggedInUser;