import { React, useState, useEffect } from 'react';
import styled from 'styled-components';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { mobile, tablet, laptop, desktop } from '../media';
import { useDispatch, useSelector } from 'react-redux';
import { updateCount, removeItem } from '../redux/cartReducer';
import { fetchCartItems } from '../helpers';


const CardContainer = styled.article`
  display: flex;
  height: 120px; 
  width: 95%;
  padding: 5px 0px 5px 0px;
  margin: 5px 5px 10px 10px;
  border: 1px solid #CCD3C2;
  background-color: #FEFDFD;
  font-family: Arial;
`

const PictureContainer = styled.section`
  display: flex;
  flex: 1; 
  height: 100%; 
  width: 100%;
  margin-left: 5px;
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

const CardContents = styled.section`
  display: flex;
  flex: 2;
  flex-direction: column;
  margin-left: 15px;
`

const Top = styled.section`
  display: flex; 
  flex-direction: row; 
  height: 35px; 
  width: auto; 
  justify-content: space-between; 
  align-items: center; 
  margin-right: 10px;
  margin-top: 5px;
  ${mobile({
  marginRight: '5px',
})}; 
`

const CloseButton = styled.button`
  display: flex;
  width: auto;
  height: auto;
  border: none;
  background: none;
  align-items: center;
  justify-content: center;
`

const CloseIcon = styled(DeleteOutlineIcon)`
  font-size: 16px;
  color: #4A4A45;
`

const Middle = styled.section`
  display: flex; 
  flex-direction: row; 
  font-size: 18px; 
  justify-content: flex-start; 
  align-items: center; 
  height: 30px; 
  width: 100%; 
`

const ProductName = styled.h1`
  font-size: 18px;
  font-weight: 600;
`

const Price = styled.h1`
  font-size: 14px;
  font-weight: 500;
  margin: 4px 18px 0px 0px;
  color: #4A4A45;
  font-size: 14px;
  &.one-item {
    margin-left: 2px;
    font-size: 16px;
    color: #1B1212;
  }
`

const Bottom = styled.section`
  display: flex; 
  flex-direction: row; 
  height: auto; 
  width: 100%; 
  align-items: center; 
  justify-content: space-between;
  margin-top: 25px;
  font-size: 16px;
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
  align-items: center; 
  justify-content: space-between; 
  background-color: #FEFDFD;
  border: none;
  ${mobile({
  fontSize: '16px',
})}; 
`

const Quantity = styled.input`
  font-size: 16px;
  font-weight: 500;
  margin: 0px 5px 0px 5px;
  padding: 0px 5px 0px 5px;
  width: 20px;
  text-align: center;
  border: none;
  outline: none;
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
      {cart.products.map((item) => (

        <CardContainer key={item.id}>
          <PictureContainer>
            <Image key={item.image} src={item.img} alt={item.name} />
          </PictureContainer>

          <CardContents>
            <Top>
              <ProductName key={item.title}>{item.title}</ProductName>
              <CloseButton onClick={() => dispatch(removeItem(item.id))}><CloseIcon /></CloseButton>
            </Top>

            <Middle>
              <Price className='one-item'>${(item.price * 1).toFixed(2)}</Price>
            </Middle>
            <Bottom>

              <QuantityContainer>
                <BottomButton onClick={() => item.count === 1 ? 1 : dispatch(updateCount({ id: item.id, count: item.count - 1}))}>-</BottomButton>
                <Quantity type='text'
                  name='quantity'
                  readonly="readonly"
                  value={item.count} onChange={(e) => dispatch(updateCount(item.id, e.target.value))} />
                <BottomButton onClick={() => dispatch(updateCount({ id: item.id, count: item.count + 1 }))}>+</BottomButton>
              </QuantityContainer>
              <Price key={item.price}>${(item.price * item.count).toFixed(2)}</Price>
            </Bottom>


          </CardContents>
        </CardContainer>))}
    </>
  )
}

export default Card;