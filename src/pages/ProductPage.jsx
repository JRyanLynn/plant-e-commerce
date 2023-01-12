import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

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
    background: white;
`

const PageWrapper = styled.div`
    display: flex;
    width: 85%;
    height: 100%;
    flex-direction: column;
    background-color: white;
`

const SortWrapper  = styled.div`
    display: flex;
    flex-direction: column; 
    width: 100%;
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
    font-weight: 500;
    margin-right: 10px;
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
`

const DropListItem = styled.h2`
    font-weight: 500;
    position: relative;
    font-size: 16px;
    padding-left: 10px;
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
    width: 100%;
    height: auto;
    padding: 10px;
    margin-top: 10px;
    margin-left: 10px;
    background: white;
`

const ProductCard = styled.div`
    width: 20%;
    height: 60%;
    background: white;
    margin-top: 10px;
    border: 0.5px solid lightgray;
`
const ProductImg = styled.img`
    width: 100%;
    height: auto;
    display: block;
`

const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 15px;
    align-items: center;
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
    const productArray = 
    {   
        id: '1',
        name: 'Aloe',
        model: '2212',
        image: 'https://www.ikea.com/us/en/images/products/aloe-vera-potted-plant-aloe__67410_pe181254_s4.jpg',
        price: '$4.99',
        dimensions: '12 inches x 4 inches',
        category: 'succulent',
        care: 'easy',
        light: 'Full sun',
        water: 'Every 2-4 weeks',
        environment: 'Warm Climate',
        quantity: '100'
    }

    const [sort, setSort] = useState(false);

  return (
    <Page>
        <Navbar />
        <PageContainer>
            <PageWrapper>
            <SortWrapper>
                <SortButton onClick = {() => setSort(!sort)}>Sort <SortDownArrow /></SortButton>

                {sort?
                <SortContentContainer>
                        <DropListItem>Price: Low-High</DropListItem>
                        <DropListItem>Price: High-Low</DropListItem>
                        <DropListItem>Customer Rating</DropListItem>
                </SortContentContainer>
                : null}

                </SortWrapper>
            <PageContentWrapper>
            <CategoryColumn>

            <List>
                <ListItem><ListTitle>Care Type</ListTitle></ListItem>
                <ListItem><ListInput type = 'checkbox' />Easy</ListItem>
                <ListItem><ListInput type = 'checkbox' />Medium</ListItem>
                <ListItem><ListInput type = 'checkbox' />Special Care</ListItem>
            </List>

            <BreakLine />
            <List>
                <ListItem><ListTitle>Light</ListTitle></ListItem>
                <ListItem><ListInput type = 'checkbox' />Bright</ListItem>
                <ListItem><ListInput type = 'checkbox' />Medium</ListItem>
                <ListItem><ListInput type = 'checkbox' />Dark</ListItem>
            </List>

            <BreakLine />

            <List>
                <ListItem><ListTitle>By Room</ListTitle></ListItem>
                <ListItem><ListInput type = 'checkbox' />Living Room</ListItem>
                <ListItem><ListInput type = 'checkbox' />Bedroom</ListItem>
                <ListItem><ListInput type = 'checkbox' />Kitchen</ListItem>
                <ListItem><ListInput type = 'checkbox' />Bathroom</ListItem>
            </List>

            </CategoryColumn>

            <ProductGridWrapper>

                <ProductCard>
                    <ProductImg src = {productArray.image} />
                    
                    <ProductInfo>
                        <ProductName>{productArray.name}</ProductName>
                        <Reviews>Overall Reviews</Reviews>
                        <Reviews>***** (300)</Reviews>
                        <ProductPrice>{productArray.price}</ProductPrice>
                    </ProductInfo>

                </ProductCard>
            </ProductGridWrapper>
            </PageContentWrapper>
            </PageWrapper>
        </PageContainer>
        <Footer />
    </Page>
  )
}

export default ProductPage