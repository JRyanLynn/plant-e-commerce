import React from 'react';
import styled from 'styled-components';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { mobile, tablet, laptop, desktop} from '../media';

const CardContainer = styled.div`
  display: flex;
  height: 115px; 
  width: 93%;
  padding: 5px;
  margin: 3px;
  border: 0.5px solid lightgray;
`

const PictureContainer = styled.div`
  display: flex;
  flex: 1; 
  height: auto; 
  width: 20%; 
  background-color: white;
  justify-content: center;
  align-items: center; 
  padding: 5px;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
`

const CardContents = styled.div`
  display: flex;
  flex: 2;
  flex-direction: column;
  height: 110px; 
  width: 500px;
  background-color: white; 
  padding: 5px;
`

const Top = styled.div`
  display: flex; 
  flex-direction: row; 
  height: 30px; 
  width: auto; 
  justify-content: space-between; 
  align-items: center; 
  background-color: white; 
  padding: 2px; 
  margin-right: 5px;
`

const Price = styled.p`
  font-size: 24px; 
  font-weight: bold;
`

const Close = styled.p`
  font-size: 16px;
`

const Middle = styled.div`
  display: flex; 
  flex-direction: row; 
  font-size: 16px; 
  justify-content: flex-start; 
  height: 30px; 
  width: auto; 
  align-items: center; 
  background-color: white; 
  marginTop: 5px;
`

const ProductName = styled.p``

const Bottom = styled.div`
  display: flex; 
  flex-direction: row; 
  height: 40px; 
  width: 100%; 
  font-size: 16px; 
  background-color: white; 
  align-items: center; 
  justify-content: space-between; 
  margin-top: 10px;
`

const SaveButton = styled.button``

const QuantityContainer = styled.div`
  display: flex; 
  flex-direction: row; 
  align-items: center; 
  justify-content: space-between; 
  width: 50%; 
  height: 20px; 
  margin-top: 0px; 
  margin-right: 5px;
`

const BottomButton = styled.button`
  display: flex; 
  height: 25px; 
  width: 25px; 
  border-radius: 20px; 
  align-items: center; 
  justify-content: center; 
  background-color: none; 
  border: none;
  background-color: white;
`

const Quantity = styled.p`
  
`


const Card = () => {

  return (
     <CardContainer>

      <PictureContainer>
        <Image src = 'http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcR9fc2RYwcLUt6bzRX7-wczkMM9nRxAZA57RxZoB9HKKUxF99vWbm_fkuYbV3iWqv8VVxNLA-sbGgRfr0M' alt = 'Product Image' />
      </PictureContainer>

      <CardContents>

        <Top>
          <Price>$10.99</Price>
          <Close>x</Close>
        </Top>

        <Middle>
          <ProductName>Aloe Plant in Pot</ProductName>
        </Middle>

        <Bottom>
          <SaveButton>Save</SaveButton>

          <QuantityContainer>
            <BottomButton>-</BottomButton>
            <Quantity>3</Quantity>
            <BottomButton>+</BottomButton>
          </QuantityContainer>

        </Bottom>


      </CardContents>
     </CardContainer>
  )
}

export default Card;