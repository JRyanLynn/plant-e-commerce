import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar'
import Card from '../components/ProductCard';
import { mobile, tablet, laptop, desktop} from '../media';

const PageContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: white;
`

const CartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  height: 100%;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 200px;
  ${mobile({ 
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '0px',
    marginTop: '30px'
})};
`

const PageWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background-color: white;
  height: 100%;
  width: 80%;
  ${mobile({ 
    width: '100%',
    height: 'auto',
    marginLeft: '15px',
    flexDirection: 'column',
    alignItems: 'center',
})},

${tablet({
  width: '100%',
  marginTop: '10px'
})};

`

const LeftColumn = styled.div`
  display: flex;
  width: 45%;
  height: auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  ${mobile({ 
    width: '100%',
    marginTop: '-85px'
})};

${tablet ({ 
  width: '60%',
  marginRight: '5px'
})};


`
const LeftTitleContainer = styled.div`
  display: flex;
  width: 95%;
  height: 100%;
  margin-left: 7px;
  border: 0.5px solid lightgray;
  background-color: white;
  align-items: center;
  margin-top: 10px;
  justify-content: space-between;
  ${mobile({ 
    width: '95%',
    height: '50px',
    marginLeft: '10px' 
})}
`

const TitleText = styled.h1`
  margin-left: 15px;
  font-size: 26px;
  font-weight: 800;
  ${mobile({ 
    marginLeft: '10px',
    TextAlign: 'left',
    fontSize: '24px' 
})};
`

const ProductCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  padding-top: 10px;
  width: 100%;
  height: 100%;
  ${mobile({ 
    width: '99%',
    padding: '10px' 
})}

${tablet ({ 
  width: '100%'
})};

`

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  height: 100%;
  margin-top: 10px;
  justify-content: center;
  align-items: flex-start;
  background-color: white;
  ${mobile ({ 
    width: '100%',
    height: 'auto',
    alignItems: 'center',
})};
${tablet ({ 
  width: '100%'
})};
`
const TotalCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: center;
  border: 0.5px solid lightgray;
  background-color: white;
  height: 100%;
  width: 100%;
  ${mobile ({ 
    width: '95%',
    marginTop: '-10px',
    marginBottom: '10px',
    marginLeft: '10px'
})};
${tablet ({ 
  width: '100%'
})};
`
const TotalItemContainer = styled.div`
  display: flex;
  width: 90%;
  height: 35px;
  align-items: center;
  margin-left: 15px;
  justify-content: space-between;
`
const TotalLine = styled.hr`
  width: 90%;
  color: lightgray;
`

const TotalHeader = styled.h1`
  font-size: 20px;
  margin-left: 10px;
  font-weight: 600;
`

const Total = styled.h2`
  margin-right: 10px;
  font-size: 16px;
  font-weight: 100;
`

const TotalButton = styled.button`
  display: flex;
  width: 80%;
  height: 100%;
  font-size: 16px;
  font-weight: 600;
  align-items: center;
  justify-content: center;
  margin-left: 40px;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 10px;
  ${mobile({ 
    width: '80%',
    alignItems: 'center',
    marginLeft: '30px'
})};

${tablet({ 
  width: '70%',

})};

`

const FullCart = () => {
  return (
    <PageContainer>
    <Navbar />

    <CartContainer>
    <PageWrapper>

    <LeftColumn>
      <LeftTitleContainer>
        <TitleText>Cart</TitleText>
      </LeftTitleContainer>

      <ProductCardContainer>
        <Card />
        <Card />
      </ProductCardContainer>
    </LeftColumn>

    <RightColumn>
      
      <TotalCard>

        <TitleText>Total</TitleText>
        <TotalLine />
        <TotalItemContainer>
          <TotalHeader>Sub Total</TotalHeader>
          <Total>$10.99</Total>
        </TotalItemContainer>

        <TotalItemContainer>
          <TotalHeader>Tax</TotalHeader>
          <Total>$3.00</Total>
        </TotalItemContainer>

        <TotalItemContainer>
          <TotalHeader>Shipping</TotalHeader>
          <Total>$5.50</Total>
        </TotalItemContainer>

        <TotalItemContainer>
          <TotalHeader>Total</TotalHeader>
          <Total>$18.49</Total>
        </TotalItemContainer>
        
        <TotalButton>CheckOut</TotalButton>
      </TotalCard>
    </RightColumn>
    </PageWrapper>
    </CartContainer>
    <Footer />
    </PageContainer>
  )
}

export default FullCart