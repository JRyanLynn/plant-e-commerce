import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import axios from 'axios';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { Rating } from '@mui/material';
import { mobile, tablet, desktop, laptop } from '../../media';

const Page = styled.div`
    width: 100%;
    height: 100%;
    background-color: #FEFDFD;
    font-family: Arial;
    color: #1B1212;
    ${mobile({
    marginTop: '-20px'
})};
`
const MobileDivider = styled.hr`
    color: #1B1212;
    ${desktop({ display: 'none' })};
    ${laptop({ display: 'none' })};
    ${tablet({ display: 'none' })};
`
const ProductPageContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    ${mobile({ marginTop: '20px' })};
`

const ProductPageWrapper = styled.main`
    display: flex;
    width: 90%;
    height: 100%;
    flex-direction: column;
    background-color: #FEFDFD;
    ${mobile({
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
})};
    ${tablet({ width: '100%', })};
`

const SortWrapper = styled.div`
    display: flex;
    flex-direction: column; 
    width: 96.20%;
    height: 100%;
    padding: 0px 10px 0px 10px;
    justify-content: center;
    align-items: flex-end;
    ${mobile({
    width: '100%',
    alignItems: 'center'
})};
    ${tablet({ width: '98%' })};
`

const SortButtonRow = styled.nav`
    display: flex;
    flex-direction: row;
    width: 75%;
    height: 30px;
    justify-content: space-between;
    align-items: center;
    ${mobile({
    width: '79%',
    marginLeft: '5px'
})};
    ${tablet({
    width: '69%',
    marginRight: '20px'
})};
`

const SortButton = styled.button`
    display: flex;
    cursor: pointer;
    width: 100%;
    height: 5%;
    align-items: center;
    justify-content: space-between;
    padding: 0px 0px 3px 15px;
    font-weight: 500;
    font-size: 16px;
    background-color: #dcdcdc;
    border: 1px solid #1B1212;
    ${mobile({
    fontSize: '12px',
    margin: '0px',
    paddingLeft: '5px',
})};
`

const SortComponentContainer = styled.menu`
    width: 15%;
    height: auto;
    margin-right: 10px;
    ${mobile({ width: '40%' })};  
    ${tablet({ width: '25%' })};  
`

const SortOptionListContainer = styled.ul`
    display: flex;
    flex-direction: column;
    position: absolute;
    z-index: 800;
    cursor: pointer;
    width: 9.75%;
    height: auto;
    margin: 0;
    padding: 0;
    padding-bottom: 10px;
    font-size: 16px;
    background: #F5F5F5;
    border: 1px solid #CCD3C2;
    box-shadow:
    0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048),
    0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072),
    0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
    ${mobile({
    width: '29.5%',
    margin: '0',
    right: '56px'
})};
    ${tablet({ width: '18%' })};  
`
const SortListTitle = styled.h1`
    font-Size: '28px';
    ${mobile({
    fontSize: '22px',
    marginLeft: '5px'
})};
    ${tablet({ marginLeft: '5px' })};  
`

const DropListItem = styled.li`
    font-weight: 500;
    position: relative;
    font-size: 16px;
    padding-left: 5px;
    list-style-type: none;
    margin-top: 10px;
    ${mobile({ fontSize: '12px' })};
`

const SortDownArrow = styled(KeyboardArrowDownIcon)`
    margin-left: 5px;
`

const CategoryFilterColumn = styled.menu`
    display: flex;
    width: 25%;
    margin-left: 20px;
    height: 100%;
    flex-direction: column;
    margin-top: 18px;
    ${mobile({ display: 'none' })}; 
`

const ListTitle = styled.h2`
    font-size: 20px;
    ${mobile({ fontSize: '16px' })};
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
    ${mobile({
    width: '100%',
    marginLeft: '-35px'
})};
    ${tablet({
    marginLeft: '-40px',
    width: '90%'
})};  
`

const ListItem = styled.li`
    list-style-type: none;
    font-size: 18px;
    padding: 2px;
    ${mobile({ fontSize: '14px' })};
`

const ListInput = styled.input`
    width: 16px;
    height: 16px;
    margin-right: 5px;
    accent-color: #517A3E;
    ${mobile({
    height: '14px',
    width: '14px'
})};
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
    background: #FEFDFD;
    ${mobile({
    alignItems: 'center',
    justifyContent: 'center'
})};  
`

const ProductGridWrapper = styled.section`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    padding: 10px;
    margin: 10px 0px 100px 10px;
    background: #FEFDFD;
    ${mobile({
    padding: '0px',
    marginLeft: '40px',
    alignItems: 'center',
    width: '95%',
})};
    ${tablet({
    width: '90%',
    alignItems: 'center'
})};
`

const NoResult = styled.h1`
    align-items: center;
    justify-content: center;
    margin: 100px 0px 0px 250px;
    ${mobile({
    marginLeft: '50px',
    fontSize: '24px'
})};
`

const ProductCard = styled.article`
    width: 23%;
    height: 60%;
    background: white;
    margin: 5px;
    border: 1px solid #CCD3C2;
    cursor: pointer;
    ${mobile({ width: '40%' })};
    ${tablet({
    width: '22%',
    alignItems: 'center'
})};
`
const ProductImg = styled.img`
    width: 100%;
    height: 200px;
    display: block;
    ${mobile({ height: '100px' })};
    ${tablet({
    height: '100px'
})};
`

const ProductInfo = styled.section`
    display: flex;
    flex-direction: column;
    margin-left: 15px;
    align-items: flex-start;
    justify-content: center;
    ${mobile({ marginLeft: '5px' })};
    ${tablet({ marginLeft: '5px' })};   
`

const ProductName = styled.h1`
    font-size: 20px;
    font-weight: 500;
    ${mobile({ fontSize: '12px' })};
    ${tablet({ fontSize: '12px', fontWeight: '600' })};
`

const Reviews = styled.div`
    font-size: 16px;
    margin: -3px 0px 5px 0px;
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
    ${mobile({ display: 'none' })};
    ${tablet({ display: 'none' })};
`

const ProductPrice = styled.p`
    font-size: 18px;
    font-weight: 600;
    margin: -3px 0px 10px 3px;
    ${mobile({ fontSize: '14px' })};
    ${tablet({ fontSize: '14px' })};
`


const EasyPlants = () => {
    const navigate = useNavigate();

    const { id } = useParams();

    //for sort dropdown
    const [sort, setSort] = useState(false);
    const [careTypes, setCareTypes] = useState([]);
    const [lightTypes, setLightTypes] = useState([]);
    const [categoryTypes, setCategoryTypes] = useState([]);
    const [products, setProducts] = useState([]);
    const [array, setArray] = useState(products);

    //states for loading screen
    const [isLoading, setIsLoading] = useState(false);
    const [screenOpacity, setScreenOpacity] = useState(1);

    //combines checkbox values based on object array category clusters
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
        } else if (event.target.name === 'category' || event.target.name === 'type') {
            if (event.target.checked) {
                setCategoryTypes([...categoryTypes, event.target.value])
            } else { setCategoryTypes(categoryTypes.filter(filter => filter !== event.target.value)) }
        }

    };

    useEffect (() => {
        const getProducts = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/products')
                setProducts(res.data);
            } catch (error) {console.log(error)}
        } 
        getProducts();
    }, []);

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
        setArray(filtered.filter(product => product.care === "easy"));
        setTimeout(() => {
            setIsLoading(false);
        }, 200);
    }, [careTypes, lightTypes, categoryTypes, isLoading, products]);

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

    let price = (number) => { return number.toFixed(2) };

    //states for router

    return (
        <Page>
            <MobileDivider />
            <ProductPageContainer>
                <ProductPageWrapper>
                    <SortWrapper>
                        <SortButtonRow>
                            <SortListTitle>Easy Plants</SortListTitle>
                            <SortComponentContainer>
                                <SortButton onClick={() => setSort(!sort)}>Sort <SortDownArrow /></SortButton>
                                {sort ?
                                    < ClickAwayListener onClickAway={handleClickAway}>
                                        <SortOptionListContainer>
                                            <DropListItem onClick={lowHi}>Price - Low-High</DropListItem>
                                            <DropListItem onClick={hiLow}>Price - High-Low</DropListItem>
                                            <DropListItem>Customer Rating</DropListItem>
                                        </SortOptionListContainer>
                                    </ ClickAwayListener>
                                    : null}
                            </SortComponentContainer>
                        </SortButtonRow>
                    </SortWrapper>
                    <PageContentWrapper>
                        <CategoryFilterColumn>

                            <List>
                                <ListItem><ListTitle>Type</ListTitle></ListItem>
                                <ListItem><ListInput type='checkbox' name='category' value='flower' onChange={(e) => handleCheckboxChange(e)} />Flower</ListItem>
                                <ListItem><ListInput type='checkbox' name='category' value='leafy' onChange={(e) => handleCheckboxChange(e)} />Leafy</ListItem>
                                <ListItem><ListInput type='checkbox' name='category' value='edible' onChange={(e) => handleCheckboxChange(e)} />Edible</ListItem>
                                <ListItem><ListInput type='checkbox' name='type' value='herb' onChange={(e) => handleCheckboxChange(e)} />Herb</ListItem>
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
                            {array.length > 0 ? array.map((item) => (
                                <ProductCard key={item.id} onClick={() => navigate(`/products/${item.id}`)}>
                                    <ProductImg key={item.image} src={item.image} alt='Product Image' />

                                    <ProductInfo key={item.id}>
                                        <ProductName key={item.name}>{item.name}</ProductName>
                                        <Reviews key={item.reviews}>
                                            <ReviewContainer>
                                                <Rating name="read-only" readOnly size="small" />
                                                <ReviewText>(100)</ReviewText>
                                            </ReviewContainer>
                                        </Reviews>
                                        <ProductPrice key={item.price}>{`$${price(item.price)}`}</ProductPrice>
                                    </ProductInfo>
                                </ProductCard>
                            )) : <NoResult>Sorry, no products fit your search</NoResult>}

                        </ProductGridWrapper>
                    </PageContentWrapper>
                </ProductPageWrapper>
            </ProductPageContainer>
        </Page>

    )
}

export default EasyPlants