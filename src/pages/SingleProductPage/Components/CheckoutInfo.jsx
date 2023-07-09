import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { addToCart } from '../../../redux/cartReducer';
import { getProduct, getReviews } from '../../../helpers';

import { mobile, tablet, laptop, desktop } from '../../../media';

import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import { Rating } from '@mui/material';

const MainContent = styled.section`
    display: flex;
    width: 85%;
    height: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    ${mobile({
    width: '100%',
    flexDirection: 'column',
})};
`

const ImageContainer = styled.div`
    display: flex;
    width: 60%;
    height: 530px;
    flex-direction: row;
    align-items: flex-start;
    margin-top: 20px;
    ${mobile({
    height: '250px',
    width: '90%',
    marginTop: '0px',
})};
`

const SideImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 20%;
    height: 100%;
    align-items: center;
    justify-content: flex-start;
    ${mobile({
    height: '100px',
    width: '40%',
    marginLeft: '-10px'
})};
`

const SideImageSizer = styled.div`
    width: 80%;
    height: auto;
    border: 1px solid #CCD3C2;
    margin-top: 5px;
    ${mobile({
    height: '100%',
    width: '80%',
})};
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    border: 1px solid #CCD3C2;
`

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 35%;
    height: 100%;
    margin-left: 10px;
    margin-right: 20px;
    margin-top: 20px;
    border: 1px solid #CCD3C2;
    padding-left: 10px;
    padding-bottom: 15px;
    ${mobile({
    width: '90%'
})};
`
const ProductName = styled.h1`
    font-size: 30px;
    margin-left: 10px; 
    ${mobile({
    fontSize: '24px'
})};
`
const ProductPriceContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 15px;
`
const Price = styled.h2`
    font-size: 24px;
    font-weight: 600;
    ${mobile({
    fontSize: '20px',
})}
`
const ReviewContainer = styled.div`
    Display: flex;
    align-items: center;
    height: 15px;
    margin-left: 15px;
`
const ReviewText = styled.a`
    font-size: 16px;
    font-weight: 500;
    margin-left: 10px;
    color: #517A3E;
    cursor: pointer;
    ${mobile({
    fontSize: '14px',
})}
`

const OptionButtonContainer = styled.div`
    display: flex;
    height: 50px;
    margin-left: 10px;
    width: 80%;
    align-items: center;
    justify-content: center;
    margin-top: 5px;
    margin-bottom: 10px;
`
const SectionLabel = styled.label`
    font-size: 16px;
    margin-left: 15px;
`

const OptionButton = styled.button`
    height: 30px;
    width: 80%;
    margin-left: 5px;
    align-items: center;
    justify-content: center;
    border: 0.5px solid #1B1212;
    cursor: pointer;
    background-color: #CCD3C2;
    &:hover {
        background-color: #F5F5F5;
    }
`

const OptionImageButton = styled.img`
    height: 100%;
    width: 100%;
    margin: 5px;
    border: 1px solid #CCD3C2;
    margin-top: 20px;
    cursor: pointer;
    &:hover{
        border: 0.5px solid #1B1212;
    }
`

const ShippingIcon = styled(LocalShippingOutlinedIcon)`
    margin-right: 5px;
    margin-top: 50px;
    ${mobile({
    marginTop: '5px',
})}
`

const ShippingAnnouncement = styled.h4`
    margin-top: 70px;
    ${mobile({
    fontSize: '12px',
    marginTop: '20px'
})}
`

const QuantityContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 30%;
    margin-left: 10px;
    ${mobile({
    marginLeft: '0px'
})}
`

const QuantityButton = styled.button`
    height: 40px;
    width: 40px;
    border-radius: 30px;
    border: none;
    background-color: #FEFDFD;
    font-size: 20px;
    padding: 5px;
`

const Quantity = styled.form`
    display: flex;
    flex-direction: column;
    padding: 10px;
`

const QuantityInput = styled.input`
    height: 20px;
    width: 50px;
    padding: 5px;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 20px;
    font-weight: 500;
    ${mobile({
    fontSize: '16px',
    width: '30px'
})}
`
const CheckOutButtonContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    margin-top: 50px;
    width: 80%;
    margin-left: 10px;
    ${mobile({
    width: '95%',
    marginTop: '0px',
    marginLeft: '5px',
    marginBottom: '5px'
})}
`

const CheckOutButton = styled.button`
    height: 40px;
    width: 100%;
    font-size: 16px;
    font-weight: 600;
    background-color: #517A3E;
    color: #FEFDFD;
    border: 1px solid #1B1212;
    align-items: center;
    justify-content: center;
    margin-left: 20px;
    ${mobile({
    fontSize: '14px'
})}
`

const CheckoutInfo = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const cart = useSelector((state) => state.cart.products);

    // state for backend
    const [products, setProducts] = useState([]);

    // For quantity increment
    const [count, setCount] = useState(1);

    // Default state for plant size options
    const [size, setSize] = useState(0);

    // Default for pot choices
    const [pot, setPot] = useState(0);

    // states to put side image in main image container
    const [mainImage, setMainImage] = useState('');

    //review state 
    const [reviews, setReviews] = useState([]);

    //gets reviews from helpers file
    useEffect(() => {
        const fetchReviews = async () => {
            const reviews = await getReviews();
            setReviews(reviews);
        };
        fetchReviews();
    }, []);

    // array generates products
    useEffect(() => {
        const fetchData = async () => {
            const data = await getProduct();
            setProducts(data);
        };
        fetchData();
    }, []);

    // move item declaration inside useEffect hook
    const item = products.find((i) => i.id === parseInt(id));

    // Filters review array by id
    const reviewArray = reviews.filter((i) => i.id === parseInt(id));

    //average review from array
    const avgReview = reviewArray ? Math.floor(reviewArray.reduce((sum, review) => sum + review.rating, 0) / reviewArray.length) : 0;
    console.log(avgReview)

    // update main image when item changes because backend values wont allow the use of state
    useEffect(() => {
        if (item) {
            setMainImage(item.image);
        }
    }, [item]);

    //change loading screen
    if (!item) {
        return <div></div>;
    }

    // update price with addons
    const totalPrice = (item?.price + size + pot)?.toFixed(2);

    const handleAddToCart = () => {
        const existingItem = cart.find((item) => item.id === item.id); 
      
        if (existingItem) { //checks redux for existing cart values dispatched from backend
        } else {
          dispatch(
            addToCart({
              id: item.id,
              title: item.name,
              img: item.image,
              price: totalPrice,
              count: count,
              pot: pot,
              size: size
            })
          );
        }
      };

    return (
        <MainContent key={item.id}>
            <ImageContainer>
                <SideImageContainer>
                    <SideImageSizer style={{ marginTop: '0px' }}>
                        <Image src={item.image} onClick={() => setMainImage(item.image)} />
                    </SideImageSizer>

                    {item.imageTwo && <SideImageSizer>
                        <Image src={item.imageTwo} onClick={() => setMainImage(item.imageTwo)} />
                    </SideImageSizer>}
                </SideImageContainer>
                <Image src={mainImage} />
            </ImageContainer>

            <InfoContainer>
                <ProductName>{item.name}</ProductName>
                <ReviewContainer>
                    <Rating name="size-small" value={avgReview} readOnly size="small" />
                    <ReviewText style={{ color: 'inherit', textDecoration: 'none' }}>{`(${reviewArray.length}) Reviews`}</ReviewText>
                </ReviewContainer>

                <ProductPriceContainer>
                    <Price>${(totalPrice * count).toFixed(2)}</Price>

                </ProductPriceContainer>

                <SectionLabel>Choose a Size</SectionLabel>
                <OptionButtonContainer>
                    <OptionButton onClick={() => setSize(0)}
                        style={{ backgroundColor: size === 0 ? "#F5F5F5" : "#CCD3C2" }}>
                        Seedling</OptionButton>

                    <OptionButton onClick={() => setSize(5)}
                        style={{ backgroundColor: size === 5 ? "#F5F5F5" : "#CCD3C2" }}>
                        Medium</OptionButton>
                    <OptionButton onClick={() => setSize(10)}
                        style={{ backgroundColor: size === 10 ? "#F5F5F5" : "#CCD3C2" }}>
                        Mature</OptionButton>
                </OptionButtonContainer>

                <SectionLabel>Choose a Pot</SectionLabel>
                <OptionButtonContainer>
                    <OptionImageButton onClick={() => setPot(0)} src='https://www.htgsupply.com/wp-content/uploads/2019/02/nursery-pot-5gal-1.jpg'
                        alt='nursery pot'
                        style={{ border: pot === 0 ? "1px solid  #1B1212" : "1px solid #CCD3C2" }} />
                    <OptionImageButton onClick={() => setPot(5)} src='https://mobileimages.lowes.com/productimages/0456d1ba-7470-443c-9fc2-4eb876970d4d/07656944.jpg?size=pdhism'
                        alt='red plastic pot'
                        style={{ border: pot === 5 ? "1px solid  #1B1212" : "1px solid #CCD3C2" }} />
                    <OptionImageButton onClick={() => setPot(5.0001)} src='https://www.oldrailwaylinegc.co.uk/shop/gallery/5022938012196-large.jpg' alt='green plastic pot'
                        style={{ border: pot === 5.0001 ? "1px solid  #1B1212" : "1px solid #CCD3C2" }}
                    />
                    <OptionImageButton onClick={() => setPot(5.0002)} src='http://mobileimages.lowes.com/productimages/473492b6-4b6b-42e6-8b1b-53dab697a304/07656947.jpg'
                        alt='blue plastic pot'
                        style={{ border: pot === 5.0002 ? "1px solid  #1B1212" : "1px solid #CCD3C2" }} />
                </OptionButtonContainer>

                <OptionButtonContainer>
                    <ShippingIcon /><ShippingAnnouncement>Free Shipping On All Orders Over $30</ShippingAnnouncement>
                </OptionButtonContainer>

                <CheckOutButtonContainer>
                    <QuantityContainer>
                        <QuantityButton onClick={() => count === 1 ? 1 : setCount(count - 1)}>-</QuantityButton>

                        <Quantity>
                            <QuantityInput type='text'
                                name='quantity'
                                value={count}
                                onChange={() => count} />

                        </Quantity>

                        <QuantityButton onClick={() => setCount(count + 1)}>+</QuantityButton>
                    </QuantityContainer>
                    <CheckOutButton onClick={handleAddToCart}>Add To Cart</CheckOutButton>
                </CheckOutButtonContainer>
            </InfoContainer>
        </MainContent>
    )
}

export default CheckoutInfo;