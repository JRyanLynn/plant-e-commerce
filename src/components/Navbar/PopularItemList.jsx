import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { getProduct } from '../../helpers';
import { mobile } from '../../media';

const CategoryContainer = styled.div`
    display: flex;
    margin-top: 10px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    ${mobile({
    marginTop: '0'
})};
`

const CategoryWrapper = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 5px;
    padding-bottom: 5px;
    width: 100%;
    height: 100%;
    ${mobile({
    marginTop: '0px'
})};
`
const CategoryCard = styled.article`
    width: 23%;
    height: 60%;
    background: white;
    margin: 5px;
    border: 1px solid #CCD3C2;
    cursor: pointer;
    text-align: center;
    ${mobile({
    height: 'auto',
    margin: '2px'
})};
`
const CategoryImage = styled.img`
    width: 100%;
    height: 200px;
    display: block;
    margin-top: -15px;
    margin-top: 0.02px;
    ${mobile({
    height: '90px',
})}
`
const Name = styled.h1`
    font-size: 26px;
    font-weight: 500;
    ${mobile({
    fontSize: '12px'
})};
`

const Price = styled.p`
    font-size: 20px;
    margin-top: -15px;
    ${mobile({
    fontSize: '14px',
    marginTop: '1px'
})}
`

const RouterLink = styled(Link)`
  text-decoration: none;
  color: black;
`

const PopularItemList = () => {
    const [products, setProducts] = useState([]);

    //loads product array
    useEffect(() => {
        const fetchData = async () => {
            const data = await getProduct();
            setProducts(data);
        };
        fetchData();
    }, []);

    return (
        <CategoryContainer>
            <CategoryWrapper>
                {products.sort((a, b) => a.sold - b.sold).slice(-5).map((item) => (
                    <CategoryCard key={item.id}>
                        <RouterLink to={`/products/${item.id}`}>
                            <CategoryImage src={item.image} />
                            <Name>{item.name}</Name>
                            <Price>${(item.price).toFixed(2)}</Price>
                        </RouterLink>
                    </CategoryCard>
                ))}
            </CategoryWrapper>
        </CategoryContainer>
    )
}

export default PopularItemList