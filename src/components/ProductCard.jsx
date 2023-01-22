import React from 'react';
import styled from 'styled-components';
import { productArray } from '../data';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { mobile, tablet, laptop, desktop} from '../media';
import { useSelector } from 'react-redux';


const CardContainer = styled.div`
  display: flex;
  height: 120px; 
  width: 95%;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-left: 10px;
  margin-bottom: 10px;
  border: 0.5px solid lightgray;
  background-color: white;
`

const PictureContainer = styled.div`
  display: flex;
  flex: 1; 
  height: 100%; 
  width: 100%;
  margin-left: 10px;
  justify-content: center;
  align-items: center; 
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
  height: 92%; 
  width: 500px;
  background-color: white;
  margin-left: 15px; 
`

const Top = styled.div`
  display: flex; 
  flex-direction: row; 
  height: 30px; 
  width: auto; 
  justify-content: space-between; 
  align-items: center; 
  background-color: white; 
  margin-right: 5px;
`

const Price = styled.h1`
  font-size: 20px; 
  font-weight: bold;
`

const Close = styled.p`
  font-size: 18px;
  margin-right: 5px;
  margin-top: 10px;
`

const Middle = styled.div`
  display: flex; 
  flex-direction: row; 
  font-size: 16px; 
  justify-content: flex-start; 
  align-items: center; 
  height: auto; 
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
  height: 40px; 
  width: 100%; 
  font-size: 16px;
  background-color: white; 
  align-items: flex-end; 
  justify-content: space-between;
`

const SaveButton = styled.button`
  font-size: 16px;
  font-weight: 500;
  padding: 3px;
`

const QuantityContainer = styled.div`
  display: flex; 
  flex-direction: row; 
  align-items: center; 
  justify-content: center; 
  width: 50%; 
  height: 50%; 
  margin-top: 0px; 
  margin-right: 20px;
`

const BottomButton = styled.button`
  display: flex;
  height: 25px;
  width: 20px;
  align-items: center; 
  justify-content: center; 
  background-color: white;
  border: none; 
  font-weight: bold;
`

const Quantity = styled.p`
  padding: 15px;
  font-size: 20px;
  font-weight: 500;
`


const Card = () => {
  const cart = useSelector((state) => state.cart);
  
  return (
    <>
    {cart.products.map ((item) =>(<CardContainer>
     <PictureContainer>
        <Image src = {item.img} alt = 'Product Image' />
      </PictureContainer>
      
      <CardContents>
        <Top>
          <Price>${item.price.toFixed(2) * item.count}</Price>
          <Close>x</Close>
        </Top>

        <Middle>
          <ProductName>{item.title}</ProductName>
        </Middle>

        <Bottom>
          <SaveButton>Save</SaveButton>

          <QuantityContainer>
            <BottomButton>-</BottomButton>
            <Quantity>{item.count}</Quantity>
            <BottomButton>+</BottomButton>
          </QuantityContainer>

        </Bottom>


      </CardContents>
     </CardContainer>))}
     </>
  )
}

export default Card;