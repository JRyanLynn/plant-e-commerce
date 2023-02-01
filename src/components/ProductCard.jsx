import {React, useState} from 'react';
import styled from 'styled-components';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { mobile, tablet, laptop, desktop} from '../media';
import { useDispatch, useSelector } from 'react-redux';
import { updateCount, removeItem} from '../redux/cartReducer';


const CardContainer = styled.div`
  display: flex;
  height: 120px; 
  width: 95%;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-left: 10px;
  margin-right: 5px;
  margin-top: 5px;
  margin-bottom: 10px;
  border: 0.5px solid #CCD3C2;
  background-color: #FEFDFD;
  font-family: Arial;
`

const PictureContainer = styled.div`
  display: flex;
  flex: 1; 
  height: 100%; 
  width: 100%;
  margin-left: 10px;
  justify-content: center;
  align-items: center;
  ${mobile({ 
    height: '100%',
    width: '100%'
  })}; 
`

const Image = styled.img`
  display: flex;
  width: 100%;
  height: 100%;
`

const CardContents = styled.div`
  display: flex;
  flex: 2;
  flex-direction: column;
  margin-left: 15px;
`

const Top = styled.div`
  display: flex; 
  flex-direction: row; 
  height: 30px; 
  width: auto; 
  justify-content: space-between; 
  align-items: center; 
  margin-right: 10px;
  ${mobile({ 
    marginRight: '5px',
  })}; 
`

const Price = styled.h1`
  font-size: 20px; 
  font-weight: 600;
`

const Close = styled(DeleteOutlineIcon)`
  font-size: 16px;
  color: gray;
  margin-top: 2px;
`

const Middle = styled.div`
  display: flex; 
  flex-direction: row; 
  font-size: 18px; 
  justify-content: flex-start; 
  align-items: center; 
  height: 30px; 
  width: 100%; 
  background-color: white; 
  marginTop: 10px;
`

const ProductName = styled.p`
  font-size: 16px;
`

const Bottom = styled.div`
  display: flex; 
  flex-direction: row; 
  height: auto; 
  width: 100%; 
  font-size: 16px;
  align-items: center; 
  justify-content: flex-end;
  margin-top: 30px;
`

const QuantityContainer = styled.div`
  display: flex; 
  flex-direction: row; 
  align-items: center; 
  justify-content: center; 
  margin-right: 10px;
  ${mobile({ 
    marginLeft: '10px',
    marginRight: '5px'
  })}; 
`

const BottomButton = styled.button`
  display: flex;
  font-size: 16px;
  font-weight: 500;
  align-items: center; 
  justify-content: center; 
  background-color: #FEFDFD;
  border: none;
  ${mobile({ 
    fontSize: '16px',
  })}; 
`

const Quantity = styled.input`
  font-size: 16px;
  font-weight: 500;
  margin-left: 10px;
  margin-right: 10px;
  padding-left: 5px;
  padding-right: 5px;
  width: 20px;
  text-align: center;
  ${mobile({ 
    fontSize: '16px',
    padding: '0px',
    marginLeft: '5px',
    marginRight: '5px'
  })};  
`


const Card = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  
  return (
    <>
    {cart.products.map ((item) =>(
    
    <CardContainer key = {item.id}>
     <PictureContainer>
        <Image key = {item.image} src = {item.img} alt = 'Product Image' />
      </PictureContainer>
      
      <CardContents>
        <Top>
          <Price key = {item.price}>${(item.price * item.count).toFixed(2)}</Price>
          <Close onClick = {() => dispatch(removeItem(item.id))} />
        </Top>

        <Middle>
          <ProductName key={item.title}>{item.title}</ProductName>
        </Middle>

        <Bottom>

          <QuantityContainer>
            <BottomButton  onClick = {() => item.count === 1 ? 1 : dispatch(updateCount({ id: item.id, count: item.count - 1}))}>-</BottomButton>
            <Quantity type = 'text' name = 'quantity' value = {item.count} onChange={(e) => dispatch(updateCount(item.id, e.target.value))} />
            <BottomButton onClick = {() => dispatch(updateCount({ id: item.id, count: item.count + 1 })) }>+</BottomButton>
          </QuantityContainer>

        </Bottom>


      </CardContents>
     </CardContainer>))}
     </>
  )
}

export default Card;