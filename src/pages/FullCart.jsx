import React from 'react';
import styled from 'styled-components';
import Card from '../components/ProductCard';
import { mobile, tablet} from '../media';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { getUserCartItems } from '../helpers';

const PageContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: #FEFDFD;
  font-family: Arial;
`

const CartContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 200px;
  ${mobile({ 
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '0px',
    marginTop: '-20px'
})};
`

const PageWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
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
const LeftColumn = styled.section`
  display: flex;
  width: 45%;
  height: auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${mobile({ 
    width: '100%',
})};

${tablet ({ 
  width: '60%',
  marginRight: '5px'
})};


`
const LeftTitleContainer = styled.header`
  display: flex;
  width: 95%;
  height: 100%;
  margin-left: 7px;
  border: 0.5px solid #CCD3C2;
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
  margin-left: 10px;
  font-size: 26px;
  font-weight: 800;
  ${mobile({ 
    marginLeft: '10px',
    TextAlign: 'left',
    fontSize: '24px' 
})};
`

const ProductCardContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

const RightColumn = styled.aside`
  display: flex;
  flex-direction: column;
  width: 25%;
  height: 100%;
  margin-top: 10px;
  justify-content: center;
  align-items: flex-start;
  ${mobile ({ 
    width: '100%',
    height: 'auto',
    alignItems: 'center',
})};
${tablet ({ 
  width: '100%'
})};
`

const CartEmpty = styled.h2`
  font-size: 20px;
  font-weight: 500;
`

const TotalCard = styled.section`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: center;
  border: 0.5px solid #CCD3C2;
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
  margin-left: 10px;
  justify-content: space-between;
`
const TotalLine = styled.hr`
  width: 90%;
  color: #CCD3C2;
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
  width: 85%;
  height: 100%;
  font-size: 20px;
  font-weight: 600;
  color: #FEFDFD;
  background-color: #517A3E;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
  border: 1px solid #CCD3C2;
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
const url = "http://localhost:5000/api";

const FullCart = () => {
  const cart = useSelector((state) => state.cart.products);
  //user can be added later when the webhook is needed
  const user = useSelector((state) => state.user.currentUser);

  console.log(user)

  const cardQuantity = useSelector((state) => state.cart.products.length);

  const subTotal = useSelector((state) => 
  state.cart.products.reduce((acc, product) => 
    acc + product.price * product.count, 0));
  
  const shipping = subTotal >= 30.00 || cardQuantity === 0 ? 0 : 5.00;


  const handleCheckout = () => {
    axios
      .post(`${url}/stripe/create-checkout-session`, {
        cartItems: cart,
        //userId: user.user._id,
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
    <PageContainer>
      <CartContainer>
        <PageWrapper>
          <LeftColumn>
            <LeftTitleContainer>
              <TitleText>Cart</TitleText>
            </LeftTitleContainer>
            <ProductCardContainer>
              {cardQuantity === 0 ? (
                <CartEmpty>No Items Found</CartEmpty>
              ) : (
                <Card />
              )}
            </ProductCardContainer>
          </LeftColumn>
          <RightColumn>
            <TotalCard>
              <TitleText>Total</TitleText>
              <TotalLine />
              <TotalItemContainer>
                <TotalHeader>Subtotal</TotalHeader>
                <Total>${subTotal.toFixed(2)}</Total>
              </TotalItemContainer>
              <TotalItemContainer>
                <TotalHeader>Tax</TotalHeader>
                <Total>${(subTotal * 0.03).toFixed(2)}</Total>
              </TotalItemContainer>
              <TotalItemContainer>
                <TotalHeader>Shipping</TotalHeader>
                <Total>${shipping.toFixed(2)}</Total>
              </TotalItemContainer>
              <TotalItemContainer>
                <TotalHeader>Total</TotalHeader>
                <Total>
                  ${(subTotal + subTotal * 0.03 + shipping).toFixed(2)}
                </Total>
              </TotalItemContainer>
              <TotalButton onClick={handleCheckout}>Check Out</TotalButton>
            </TotalCard>
          </RightColumn>
        </PageWrapper>
      </CartContainer>
    </PageContainer>
  );
};

export default FullCart;