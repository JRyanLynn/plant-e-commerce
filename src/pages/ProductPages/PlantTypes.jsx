import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { getProduct, getReviews } from '../../helpers';

import ClickAwayListener from '@mui/material/ClickAwayListener';
import { Rating } from '@mui/material';

import {
    Page,
    MobileDivider,
    ProductPageContainer,
    ProductPageWrapper,
    SortWrapper,
    SortButtonRow,
    SortButton,
    SortComponentContainer,
    SortOptionListContainer,
    SortListTitle,
    DropListItem,
    SortDownArrow,
    CategoryFilterColumn,
    ListTitle,
    List,
    ListItem,
    ListInput,
    BreakLine,
    PageContentWrapper,
    ProductGridWrapper,
    NoResult,
    ProductCard,
    ProductImg,
    ProductInfo,
    ProductName,
    Reviews,
    ReviewContainer,
    ReviewText,
    ProductPrice
  } from './productPageStyles';

const PlantTypes = () => {

    //array sorting values found in handle click and useEffect
    const [sort, setSort] = useState(false);
    const [careTypes, setCareTypes] = useState([]);
    const [lightTypes, setLightTypes] = useState([]);
    const [categoryTypes] = useState([]);
    const [products, setProducts] = useState([]);
    const [array, setArray] = useState(products);

    //states for loading screen
    const [isLoading, setIsLoading] = useState(false);
    const [screenOpacity, setScreenOpacity] = useState(1);

     //review state 
     const [reviews, setReviews] = useState([]);

     //loading state to make screen blank instead of display error message
     const [isDataLoaded, setIsDataLoaded] = useState(false);

    //React Routing
    const { type } = useParams();
    const navigate = useNavigate();

    //filter for checkboxes
    const handleCheckboxChange = (event) => {
        setIsLoading(!isLoading)
        if (event.target.name === 'care') {
            if (event.target.checked) {
                setCareTypes([...careTypes, event.target.value])
            } else { setCareTypes(careTypes.filter(filter => filter !== event.target.value)) }
        } else if (event.target.name === 'light') {
            if (event.target.checked) {
                setLightTypes([...lightTypes, event.target.value])
            } else { setLightTypes(lightTypes.filter(filter => filter !== event.target.value)) }
        }
    };

    //loads product array
    useEffect(() => {
        const fetchData = async () => {
            const data = await getProduct();
            setProducts(data);
        };
        fetchData();
    }, []);

    //uses filter to string array together from checkbox states
    useEffect(() => {
        if (isLoading) {
            setScreenOpacity(0);
        } else {
            setScreenOpacity(1);
        }
        const filtered = products.filter(product => {
            return (careTypes.length === 0 || careTypes.includes(product.care)) &&
                (lightTypes.length === 0 || lightTypes.includes(product.light)) &&
                (categoryTypes.length === 0 || categoryTypes.includes(product.category) || categoryTypes.includes(product.type))
        });
        setTimeout(() => {
            setIsLoading(false);
        }, 200);
        setArray(filtered.filter(product => product.category === type || product.type === type));
    }, [careTypes, lightTypes, categoryTypes, isLoading, type, products]);


    //gets reviews from helpers file
    useEffect(() => {
        const fetchReviews = async () => {
            const reviews = await getReviews();
            setReviews(reviews);
        };
        fetchReviews();
    }, []);

    //reviewByIndex is review array, avgReview pulls from that to make the avg for each index in the product array map
    const reviewArray = (productId) => {
        const reviewByIndex = reviews.filter((i) => i.id === productId);
        const avgReview = reviewByIndex.length > 0
            ? Math.floor(reviewByIndex.reduce((sum, review) => sum + review.rating, 0) / reviewByIndex.length) : 0;
        return { reviewByIndex, avgReview }
    };

    //filters for sort values
    const hiLow = () => {
        let sortedArray = [...array];
        sortedArray.sort((a, b) => b.price - a.price);
        setArray(sortedArray);
    }

    const lowHi = () => {
        let sortedArray = [...array];
        sortedArray.sort((a, b) => a.price - b.price)
        setArray(sortedArray)
    }

    const sortByAvgReview = () => {
        let sortedArray = [...array];
        sortedArray.sort((a, b) => reviewArray(b.id).avgReview - reviewArray(a.id).avgReview);
        setArray(sortedArray);
    };

    //closes element when outside of sort element is clicked
    const handleClickAway = () => {
        setSort(false);
    };

    let price = (number) => { return number.toFixed(2) };

    //Makes page blank when it loads
    useEffect(() => {
        const fetchData = async () => {
            const data = await getProduct();
            setProducts(data);
            setIsDataLoaded(true); // Set isDataLoaded to true once the data is fetched
        };
        fetchData();
    }, []);

    return (
        <Page>
            <MobileDivider />
            <ProductPageContainer>
                <ProductPageWrapper>
                    <SortWrapper>
                        <SortButtonRow>
                            <SortListTitle>{type.replace(/\b[a-z]/g, (match) => match.toUpperCase())}</SortListTitle>
                            <SortComponentContainer>
                                <SortButton onClick={() => setSort(!sort)}>Sort <SortDownArrow /></SortButton>
                                {sort ?
                                    < ClickAwayListener onClickAway={handleClickAway}>
                                        <SortOptionListContainer>
                                            <DropListItem onClick={lowHi}>Price - Low-High</DropListItem>
                                            <DropListItem onClick={hiLow}>Price - High-Low</DropListItem>
                                            <DropListItem onClick={sortByAvgReview}>Customer Rating</DropListItem>
                                        </SortOptionListContainer>
                                    </ ClickAwayListener>
                                    : null}
                            </SortComponentContainer>
                        </SortButtonRow>
                    </SortWrapper>
                    <PageContentWrapper>
                        <CategoryFilterColumn>

                            <List>
                                <ListItem><ListTitle>Care Type</ListTitle></ListItem>
                                <ListItem><ListInput type='checkbox' name='care' value='easy' onChange={(e) => handleCheckboxChange(e)} />Easy</ListItem>
                                <ListItem><ListInput type='checkbox' name='care' value='medium' onChange={(e) => handleCheckboxChange(e)} />Medium</ListItem>
                                <ListItem><ListInput type='checkbox' name='care' value='difficult' onChange={(e) => handleCheckboxChange(e)} />Special Care</ListItem>
                            </List>

                            <BreakLine />
                            <List>
                                <ListItem><ListTitle>Light</ListTitle></ListItem>
                                <ListItem><ListInput type='checkbox' name='light' value='bright' onChange={(e) => handleCheckboxChange(e)} />Bright</ListItem>
                                <ListItem><ListInput type='checkbox' name='light' value='medium' onChange={(e) => handleCheckboxChange(e)} />Medium</ListItem>
                                <ListItem><ListInput type='checkbox' name='light' value='low' onChange={(e) => handleCheckboxChange(e)} />Dark</ListItem>
                            </List>

                        </CategoryFilterColumn>

                        <ProductGridWrapper style={{ opacity: screenOpacity }}>
                            {!isLoading && (isDataLoaded ? (
                                array.length > 0 ? (
                                    array.map((item) => (
                                        <ProductCard key={item.id} onClick={() => navigate(`/products/${item.id}`)}>
                                            <ProductImg key={item.image} src={item.image} alt={item.name} />

                                            <ProductInfo key={item.id}>
                                                <ProductName key={item.name}>{item.name}</ProductName>
                                                <Reviews key={item.reviews}>
                                                    <ReviewContainer>
                                                        <Rating name="product-review" value={reviewArray(item.id).avgReview} readOnly size="small" />
                                                        <ReviewText>{reviewArray(item.id).reviewByIndex.length}</ReviewText>
                                                    </ReviewContainer>
                                                </Reviews>
                                                <ProductPrice key={item.price}>{`$${price(item.price)}`}</ProductPrice>
                                            </ProductInfo>
                                        </ProductCard>
                                    ))
                                ) : (
                                    <NoResult>Sorry, no products fit your search</NoResult>
                                ))
                                : (
                                    <></> // Show a loading spinner while the data is being fetched
                                ))}
                        </ProductGridWrapper>
                    </PageContentWrapper>
                </ProductPageWrapper>
            </ProductPageContainer>
        </Page>
    )
}

export default PlantTypes;