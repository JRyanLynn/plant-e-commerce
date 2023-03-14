import { React, useState } from 'react';
import styled from 'styled-components';
import { productArray } from '../../data';
import { useParams } from 'react-router-dom';
import CheckoutInfo from './Components/CheckoutInfo';
import { mobile, tablet, laptop, desktop } from '../../media';

import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import WaterOutlinedIcon from '@mui/icons-material/WaterOutlined';
import ThermostatOutlinedIcon from '@mui/icons-material/ThermostatOutlined';
import GrassOutlinedIcon from '@mui/icons-material/GrassOutlined';
import PopularItemList from '../../components/Navbar/PopularItemList';
import Ratings from './Components/Ratings';

const PageContainer = styled.main`
    width: 100%;
    height: 100%;
    background-color: #FEFDFD;
    font-family: Arial;
    color: #1B1212;
`
const PageContentWrapper = styled.body`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #FEFDFD;
`

const DescriptionContainer = styled.section`
    display: flex;
    height 100%;
    width: 85%;
    align-items: flex-end;
    justify-content: flex-end;
    ${mobile({
    flexDirection: 'column'
})};
`

const DescriptionItemContainer = styled.div`
    width: 100%;
    height: 200px;
    border: 0.5px solid lightgray;
    text-align: center;
    padding-top: 20px;
    padding-right: 10px;
    align-items: center;
    justify-content: center;
    ${mobile({
    height: '70px',
    border: 'none',
    paddingTop: '5px'
})};  
`
const DescriptionItemTitleRow = styled.div`
    display: flex;
    flex-direction: row;    
    align-items: center;
    justify-content: center;
    ${mobile({
    height: '20px',
    justifyContent: 'flex-start',
    marginLeft: '10px'
})};
`

const DescriptionItemContainerLabel = styled.h2`
    font-size: 24px;
    font-weight: 600;
    ${mobile({
    fontSize: '18px'
})};
`

const Sun = styled(WbSunnyOutlinedIcon)` 
    margin-right: 5px;
`

const Water = styled(WaterOutlinedIcon)` 
    margin-right: 5px;
`

const Temp = styled(ThermostatOutlinedIcon)` 
    margin-right: 5px;
`

const Size = styled(GrassOutlinedIcon)`
    margin-right: 5px; 
`

const Description = styled.p`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 50px;
    margin-left: 15px;
    ${mobile({
    marginBottom: '10px',
    fontSize: '14px',
    textAlign: 'left'
})};
`
const SectionHeader = styled.h1`
    font-size: 30px;
    font-weight: 600;
    margin-left: 20px;
    margin-top: 50px;
    ${mobile({
    marginLeft: '0px',
    fontSize: '24px',
    marginTop: '20px',
})};
`

const MightLikeContainer = styled.div`
    display: flex;
    width: 85%;
    height: 100%;
    justify-content: center;
    text-align: center;
    ${mobile({
       width: '100%'
    })};
`
const ProductView = () => {

    const { id } = useParams();

    const item = productArray.find(i => i.id === parseInt(id));

    return (
        <PageContainer key={item.id}>
            <PageContentWrapper>
                <CheckoutInfo />
                <SectionHeader>Plant Care</SectionHeader>
                <DescriptionContainer>

                    <DescriptionItemContainer>
                        <DescriptionItemTitleRow>
                            <Sun />
                            <DescriptionItemContainerLabel>Sun</DescriptionItemContainerLabel>
                        </DescriptionItemTitleRow>
                        <Description>{item.light}</Description>
                    </DescriptionItemContainer>

                    <DescriptionItemContainer>
                        <DescriptionItemTitleRow>
                            <Water />
                            <DescriptionItemContainerLabel>Water</DescriptionItemContainerLabel>
                        </DescriptionItemTitleRow>
                        <Description>{item.water}</Description>
                    </DescriptionItemContainer>

                    <DescriptionItemContainer>
                        <DescriptionItemTitleRow>
                            <Temp />
                            <DescriptionItemContainerLabel>Climate</DescriptionItemContainerLabel>
                        </DescriptionItemTitleRow>
                        <Description>{item.environment}</Description>
                    </DescriptionItemContainer>

                    <DescriptionItemContainer>
                        <DescriptionItemTitleRow>
                            <Size />
                            <DescriptionItemContainerLabel>Size</DescriptionItemContainerLabel>
                        </DescriptionItemTitleRow>
                        <Description>{item.dimensions}</Description>
                    </DescriptionItemContainer>
                </DescriptionContainer>

                <SectionHeader>You Might Also Like</SectionHeader>

                <MightLikeContainer>
                    <PopularItemList />
                </MightLikeContainer>

                <SectionHeader>Reviews</SectionHeader>
                <Ratings id = 'ratings' />
            </PageContentWrapper>
        </PageContainer>
    )
}

export default ProductView