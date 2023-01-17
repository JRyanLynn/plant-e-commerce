import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { productArray } from '../data';
import ClickAwayListener from '@mui/material/ClickAwayListener';

const Page = styled.div`
    width: 100%;
    height: 100%;
    background-color: white;
`

const PageContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    background-color: white;
`

const PageWrapper = styled.div`
    display: flex;
    width: 90%;
    height: 100%;
    flex-direction: column;
    background-color: white;
`

const SortWrapper  = styled.div`
    display: flex;
    flex-direction: column; 
    width: 96.25%;
    height: 100%;
    padding-right: 10px;
    padding-left: 10px;
    background: white;
    justify-content: center;
    align-items: flex-end;
`

const SortButton = styled.button`
    display: flex;
    width: 10%;
    height: 5%;
    align-items: center;
    justify-content: space-between;
    margin-left: 5px;
    margin-right: 10px;
    padding-left: 15px;
    font-weight: 500;
    font-size: 16px;
    cursor: pointer;
`

const SortContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    z-index: 800;
    width: 8.25%;
    background: white;
    border: 0.5px solid lightgray;
    margin-top: 127px;
    margin-right: 10px;
    padding-top: 10px;
    height: auto;
    cursor: pointer;
`

const DropListItem = styled.h2`
    font-weight: 500;
    position: relative;
    font-size: 16px;
    padding-left: 5px;
    margin-top: -3px;
`

const SortDownArrow = styled(KeyboardArrowDownIcon)`
    margin-left: 5px;
`

const CategoryColumn = styled.div`
    display: flex;
    width: 30%;
    height: 100%;
    flex-direction: column;
    margin-top: 10px;
`

const ListTitle = styled.h1`
    font-size: 24px;
`

const List = styled.ul`
    display: flex;
    width: 80%;
    flex-direction: column;
    background: white;
    justify-content: center;

`

const ListItem = styled.li`
    list-style-type: none;
    background: white;
    font-size: 20px;
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
    margin-left: 250px;
    margin-top: 250px;
    font-weight: 500;
`

const ProductCard = styled.div`
    width: 23%;
    height: 60%;
    background: white;
    margin: 5px;
    border: 0.5px solid lightgray;
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
    font-weight: 600;
`

const Reviews = styled.p`
    font-size: 16px;
    margin-top: -2px;
`

const ProductPrice = styled.p`
    font-size: 24px;
    font-weight: 600;
    margin-top: -10px;
`

const ProductPage = () => {

    //for sort dropdown
    const [sort, setSort] = useState(false);
    const [careTypes, setCareTypes] = useState([]);
    const [lightTypes, setLightTypes] = useState([]);
    const [categoryTypes, setCategoryTypes] = useState([]);
    const [array, setArray] = useState(productArray);

    const handleCheckboxChange = (event) => {
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
        const filtered = productArray.filter(product => {
            return (careTypes.length  === 0 || careTypes.includes(product.care)) &&
                    (lightTypes.length  === 0 || lightTypes.includes(product.light)) &&
                    (categoryTypes.length  === 0 || categoryTypes.includes(product.category) || categoryTypes.includes(product.type)) 
        });
        setArray(filtered)
    }, [careTypes, lightTypes, categoryTypes]);
    

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

    const handleClickAway = () => {
        setSort(false);
      };

      let price = (number) => {return number.toFixed(2)};

  return (
    <Page>
        <Navbar />
        <PageContainer>
            <PageWrapper>
            <SortWrapper>
                <SortButton onClick = {() => setSort(!sort)}>Sort <SortDownArrow /></SortButton>
                
                {sort?
                < ClickAwayListener onClickAway={handleClickAway}>
                <SortContentContainer>
                        <DropListItem onClick = {lowHi}>Price: Low-High</DropListItem>
                        <DropListItem onClick = {hiLow}>Price: High-Low</DropListItem>
                        <DropListItem>Customer Rating</DropListItem>
                </SortContentContainer>
                </ ClickAwayListener>
                : null}
                </SortWrapper>
            <PageContentWrapper>
            <CategoryColumn>

            <List>
                <ListItem><ListTitle>Care Type</ListTitle></ListItem>
                <ListItem><ListInput type= 'checkbox' name = 'care' value = 'easy' onChange = {handleCheckboxChange}/>Easy</ListItem>
                <ListItem><ListInput type = 'checkbox' name = 'care' value = 'medium' onChange = {handleCheckboxChange} />Medium</ListItem>
                <ListItem><ListInput type = 'checkbox' name = 'care' value = 'difficult' onChange = {handleCheckboxChange}/>Special Care</ListItem>
            </List>

            <BreakLine />
            <List>
                <ListItem><ListTitle>Light</ListTitle></ListItem>
                <ListItem><ListInput type = 'checkbox' name = 'light' value = 'bright' onChange = {handleCheckboxChange}/>Bright</ListItem>
                <ListItem><ListInput type = 'checkbox' name = 'light' value = 'medium' onChange = {handleCheckboxChange}/>Medium</ListItem>
                <ListItem><ListInput type = 'checkbox' name = 'light' value = 'low' onChange = {handleCheckboxChange} />Dark</ListItem>
            </List>
            <BreakLine />

            <List>
                <ListItem><ListTitle>Type</ListTitle></ListItem>
                <ListItem><ListInput type = 'checkbox' name = 'category' value = 'flower' onChange = {handleCheckboxChange} />Flower</ListItem>
                <ListItem><ListInput type = 'checkbox' name = 'category' value = 'leafy' onChange = {handleCheckboxChange}/>Leafy</ListItem>
                <ListItem><ListInput type = 'checkbox' name = 'category' value = 'edible' onChange = {handleCheckboxChange}/>Edible</ListItem>
                <ListItem><ListInput type = 'checkbox' name = 'type' value = 'herb' onChange = {handleCheckboxChange} />Herb</ListItem>
            </List>

            </CategoryColumn>

            <ProductGridWrapper>
               {array.length > 0 ? array.map((item) => (<ProductCard key = {item.id}>
                    <ProductImg key = {item.image} src = {item.image} alt = 'Product Image' />
                    
                    <ProductInfo key = {item.id}>
                        <ProductName key = {item.name}>{item.name}</ProductName>
                        <Reviews key = {item.index} >Overall Reviews</Reviews> 
                        <Reviews key = {item.reviews}>***** (300)</Reviews>
                        <ProductPrice key = {item.price}>{`$${price(item.price)}`}</ProductPrice>
                    </ProductInfo>
                    </ProductCard>
                    )): <NoResult>Sorry, no products fit your search</NoResult>}

            </ProductGridWrapper>
            </PageContentWrapper>
            </PageWrapper>
        </PageContainer>
        <Footer />
    </Page>
  )
}

export default ProductPage