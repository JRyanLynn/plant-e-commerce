import React from 'react';
import styled from 'styled-components';
import { mobile } from '../../../media';
import { useDispatch, useSelector } from "react-redux";
import { logout } from '../../../redux/userSlice';

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

const Heading = styled.h2`
  font-size: 14px;
  font-weight: 500;
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

const LoggedInUser = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.currentUser);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <PageContainer>
      <BannerContainer>
        <UserName>{`Hello ${user.user.username}`}</UserName>
      </BannerContainer>
      <List>
        <ListItem>
          <Heading>Please write reviews on product pages</Heading>
        </ListItem>
        <ListItem>
          <Button onClick={handleLogout}>Log Out</Button>
        </ListItem>
      </List>
    </PageContainer>
  );
};

export default LoggedInUser;
