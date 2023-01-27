import React, { useEffect, useState} from 'react';
import styled from 'styled-components';
import { useNavigate, useParams} from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { productArray } from '../../data';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { Rating } from '@mui/material';

const Page = styled.div`
    width: 100%;
    height: 100%;
    background-color: #FEFDFD;
    font-family: Arial;
    color: #1B1212;
`

const PageContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    margin-top: -10px;
`

const PageWrapper = styled.div`
    display: flex;
    width: 90%;
    height: 100%;
    flex-direction: column;
    background-color: #FEFDFD;
`

const SortWrapper  = styled.div`
    display: flex;
    flex-direction: column; 
    width: 96.25%;
    height: 100%;
    padding-right: 10px;
    padding-left: 10px;
    justify-content: center;
    align-items: flex-end;
`

const SortButtonRow = styled.div`
    display: flex;
    flex-direction: row;
    width: 77.25%;
    height: 30px;
    justify-content: space-between;
    align-items: center;
`

const SortButton = styled.button`
    display: flex;
    width: 100%;
    height: 5%;
    align-items: center;
    justify-content: space-between;
    padding-left: 15px;
    font-weight: 500;
    font-size: 16px;
    cursor: pointer;
    background-color: #FEFDFD;
    border: 1px solid #1B1212;
`

const SortComponentContainer = styled.div`
    width: 15%;
    height: auto;
    margin-right: 10px;
`

const SortContentContainer = styled.div`
    display: flex;
    float: right;
    flex-direction: column;
    position: absolute;
    z-index: 800;
    width: 9.65%;
    background: #F5F5F5;
    border: 1px solid #CCD3C2;
    margin-right: 10px;
    padding-top: 10px;
    padding-left: 3px;
    height: auto;
    font-size: 16px;
    cursor: pointer;
    box-shadow:
    0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048),
    0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072),
    0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12)
`

const DropListItem = styled.h2`
    font-weight: 500;
    position: relative;
    font-size: 16px;
    padding-left: 2px;
    margin-top: -3px;
`

const SortDownArrow = styled(KeyboardArrowDownIcon)`
    margin-left: 5px;
`

const CategoryColumn = styled.div`
    display: flex;
    width: 25%;
    margin-left: 20px;
    height: 100%;
    flex-direction: column;
    margin-top: 18px;
`

const ListTitle = styled.h1`
    font-size: 20px;
`

const List = styled.ul`
    display: flex;
    width: 80%;
    height: 100%;
    margin-top: -5px;
    flex-direction: column;
    background: #FEFDFD;
    justify-content: center;
    align-items: flex-start;

`

const ListItem = styled.li`
    list-style-type: none;
    background: white;
    font-size: 18px;
    padding: 2px;
`

const ListInput = styled.input`
    width: 16px;
    height: 16px;
    margin-right: 5px;
`
const BreakLine = styled.hr`
    color: lightgray;
    width: 90%;
`

const PageContentWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    background: white;
`

const ProductGridWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    padding: 10px;
    margin-top: 10px;
    margin-left: 10px;
    margin-bottom: 150px;
    background: white;
`

const NoResult = styled.h1`
    align-items: center;
    justify-content: center;
    margin-top: 100px;
    margin-left: 250px;
    font-weight: 500;
`

const ProductCard = styled.div`
    width: 23%;
    height: 60%;
    background: white;
    margin: 5px;
    border: 1px solid #CCD3C2;
    cursor: pointer;
`
const ProductImg = styled.img`
    width: 100%;
    height: 200px;
    display: block;
`

const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 15px;
    align-items: flex-start;
    justify-content: center;
`

const ProductName =  styled.h1`
    font-size: 20px;
    font-weight: 500;
`

const Reviews = styled.div`
    font-size: 16px;
    margin-bottom: 5px;
    margin-top: -3px;
`
const ReviewContainer = styled.div`
    Display: flex;
    align-items: center;
    height: 15px;
    margin-bottom: 10px;
`

const ReviewText = styled.a`
    font-size: 12px;
    font-weight: 500;
    margin-left: 10px;
`

const ProductPrice = styled.p`
    font-size: 18px;
    font-weight: 600;
    margin-left: 3px;
    margin-top: -3px;
`


const EasyPlants = () => {
    const navigate = useNavigate();

   const {id} = useParams();


    //for sort dropdown
    const [sort, setSort] = useState(false);
    const [careTypes, setCareTypes] = useState([]);
    const [lightTypes, setLightTypes] = useState([]);
    const [categoryTypes, setCategoryTypes] = useState([]);
    const [array, setArray] = useState(productArray);

    //states for loading screen
    const [isLoading, setIsLoading] = useState(false);
    const [screenOpacity, setScreenOpacity] = useState(1);

    //combines checkbox values based on object array category clusters
    const handleCheckboxChange = (event) => {
        setIsLoading(!isLoading) 
        if (event.target.name === 'care') {
            if (event.target.checked) {
                setCareTypes([...careTypes, event.target.value])
            } else {setCareTypes(careTypes.filter(filter => filter !== event.target.value))}
        } else if (event.target.name  === 'light') {
            if (event.target.checked) {
                setLightTypes([...lightTypes, event.target.value])
            } else {setLightTypes(lightTypes.filter(filter => filter !== event.target.value))}
        } else if (event.target.name === 'category' || event.target.name === 'type') {
            if (event.target.checked) {
                setCategoryTypes([...categoryTypes, event.target.value])
            } else {setCategoryTypes(categoryTypes.filter(filter => filter !== event.target.value))}
        }

    };
    
    useEffect (() => {
        if (isLoading) {
            setScreenOpacity(0);
           } else {
             setScreenOpacity(1);
           }
        const filtered = productArray.filter(product => {
            return (careTypes.length  === 0 || careTypes.includes(product.care)) &&
                    (lightTypes.length  === 0 || lightTypes.includes(product.light)) &&
                    (categoryTypes.length  === 0 || categoryTypes.includes(product.category) || categoryTypes.includes(product.type)) 
        });
        setArray(filtered);
        setTimeout(() => {
            setIsLoading(false);
        }, 200);
    }, [careTypes, lightTypes, categoryTypes, isLoading]);
    
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

    //closes element when outside of sort element is clicked
    const handleClickAway = () => {
        setSort(false);
      };

      let price = (number) => {return number.toFixed(2)};

    //states for router

  return (
    <Page>
        <PageContainer>
            <PageWrapper>
            <SortWrapper>
        <SortButtonRow>
            <ListTitle style = {{fontSize: '28px'}}>All Plants</ListTitle>
            <SortComponentContainer>
            <SortButton onClick = {() => setSort(!sort)}>Sort <SortDownArrow /></SortButton>
            {sort?
            < ClickAwayListener onClickAway={handleClickAway}>
            <SortContentContainer>
                    <DropListItem onClick = {lowHi}>Price - Low-High</DropListItem>
                    <DropListItem onClick = {hiLow}>Price - High-Low</DropListItem>
                    <DropListItem>Customer Rating</DropListItem>
            </SortContentContainer>
            </ ClickAwayListener>
            : null}
            </SortComponentContainer>
            </SortButtonRow>
            </SortWrapper>
        <PageContentWrapper>
            <CategoryColumn>

            <List>
                <ListItem><ListTitle>Type</ListTitle></ListItem>
                <ListItem><ListInput type = 'checkbox' name = 'category' value = 'flower' onChange={(e) => handleCheckboxChange(e)} />Flower</ListItem>
                <ListItem><ListInput type = 'checkbox' name = 'category' value = 'leafy' onChange={(e) => handleCheckboxChange(e)}/>Leafy</ListItem>
                <ListItem><ListInput type = 'checkbox' name = 'category' value = 'edible' onChange={(e) => handleCheckboxChange(e)}/>Edible</ListItem>
                <ListItem><ListInput type = 'checkbox' name = 'type' value = 'herb' onChange={(e) => handleCheckboxChange(e)} />Herb</ListItem>
            </List>

            <BreakLine />
            <List>
                <ListItem><ListTitle>Light</ListTitle></ListItem>
                <ListItem><ListInput type = 'checkbox' name = 'light' value = 'bright' onChange={(e) => handleCheckboxChange(e)}/>Bright</ListItem>
                <ListItem><ListInput type = 'checkbox' name = 'light' value = 'medium' onChange={(e) => handleCheckboxChange(e)}/>Medium</ListItem>
                <ListItem><ListInput type = 'checkbox' name = 'light' value = 'low' onChange={(e) => handleCheckboxChange(e)} />Dark</ListItem>
            </List>

            </CategoryColumn>

            <ProductGridWrapper style={{ opacity: screenOpacity }}>
               {array.length > 0 ? array.map((item) => (
                <ProductCard key = {item.id} onClick={() => navigate(`/products/${item.id}`)}>
                    <ProductImg key = {item.image} src = {item.image} alt = 'Product Image' />
                    
                    <ProductInfo key = {item.id}>
                        <ProductName key = {item.name}>{item.name}</ProductName>
                        <Reviews key = {item.reviews}>
                            <ReviewContainer>
                            <Rating style = {{}} name="read-only" readOnly  size="small"/>
                            <ReviewText>(100)</ReviewText>
                            </ReviewContainer>
                        </Reviews>
                        <ProductPrice key = {item.price}>{`$${price(item.price)}`}</ProductPrice>
                    </ProductInfo>
                    </ProductCard>
                    )): <NoResult>Sorry, no products fit your search</NoResult>}

            </ProductGridWrapper>
            </PageContentWrapper>
            </PageWrapper>
        </PageContainer>
    </Page>

  )
}

export default EasyPlants