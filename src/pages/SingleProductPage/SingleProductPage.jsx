import {React, useState} from 'react';
import styled from 'styled-components';
import { productArray } from '../../data';
import { useParams } from 'react-router-dom';
import CheckoutInfo from './Components/CheckoutInfo';

import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import WaterOutlinedIcon from '@mui/icons-material/WaterOutlined';
import ThermostatOutlinedIcon from '@mui/icons-material/ThermostatOutlined';
import GrassOutlinedIcon from '@mui/icons-material/GrassOutlined';
import { Rating } from '@mui/material';

const PageContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: #FEFDFD;
    font-family: Arial;
    color: #1B1212;
`
const PageContentWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #FEFDFD;
`
const ReviewAverage = styled.h3`
    font-size: 18px;
    font-weight: 500;
    margin-left: 10px;
`

const DescriptionContainer = styled.div`
    display: flex;
    height 100%;
    width: 85%;
    align-items: flex-end;
    justify-content: flex-end;
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
`

const DescriptionItemTitleRow = styled.div`
    display: flex;
    flex-direction: row;    
    align-items: center;
    justify-content: center;
`

const DescriptionItemContainerLabel = styled.h2`
    font-size: 24px;
    font-weight: 600;
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
`
const SectionHeader = styled.h1`
    font-size: 30px;
    font-weight: 600;
    margin-left: 20px;
    margin-top: 50px;
`

const MightLikeContainer = styled.div`
    display: flex;
    width: 85%;
    height: 100%;
    justify-content: center;
    text-align: center;
`

const MightLikeSection = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin-right: 10px;
    align-items: center;
    justify-content: center;
    border: 0.5px solid lightgray;
`

const MightLikeImg = styled.img`
    width: 100%;
    height: 250px;
`
const MightLikeTitle = styled.h1`
    font-size: 24px;
    font-weight: 600;
`

const MightLikePrice = styled.h2`
    font-size: 20px;
    font-weight: 500;
    margin-top: -5px;
`

const ReviewSectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 85%;
    height: 100%;
    border: 0.5px solid lightgray;
`

const Line = styled.hr`
    width: 90%;
`
const ReviewHeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 90%;
    height: 100%;
    justify-content: center;
    margin-bottom: 20px;
`

const RatingGraphContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin-top: 20px;
    margin-left: 20px;
`

const GraphTitle = styled.h1`
    font-size: 24px;
    font-weight: 500;
`

const RatingGraphRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 25px;
`

const RatingGraphLabel = styled.p`
    font-size: 20px;
    margin-right: 10px;
    font-weight: 600;
`

const RatingGraphBar = styled.div`
    width: 50%;
    height: 10px;
    border: 1px solid black;
`

const RatingGraphFill = styled.div`
    width: 50%;
    height: 10px;
    background-color: blue;
`

const RatingGraphNumber = styled.p`
    font-size: 16px;
    font-weight: 500;
    margin-left: 10px;
`

const StatContainer = styled.div`
    display: flex;
    flex-direction: column; 
    height: 100%;
    width: 100%;
    margin-top: 20px;
`
const StatContainerRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 95%;
`
const StatContainerLabel = styled.h2`
    font-size: 24px;
    font-weight: 500;
    margin-right: 10px;
`

const AddReviewButton = styled.button`
    width: 25%;
    height: 40px;
    padding: 5px;
    margin-top: 35px;
    font-size: 16px;
    font-weight: 600;
    align-items: center;
    justify-content: center;
`

const RatingContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
`

const IndividualRatingContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 85%;
    height: 100%;
    padding: 10px;

`

const RatingContents = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`

const RatingContainerRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 95%;
`

const VerifiedUser = styled.p`
    font-size: 16px;
    color: gray;
    margin-top: -10px;
    margin-left: 5px;
`

const ReviewTitle = styled.h1`
    font-size: 24px;
    font-weight: 600;
`
const ReviewTime = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-left: 50px;
`

const Review = styled.p`
    font-size: 20px;
    font-weight: 500;
`

const ProductView = () => {

    const {id} = useParams();

    const item = productArray.find(i => i.id === parseInt(id));

    //need to add popular product algo here
    const pop = productArray.map(a => a);

  return (
    <PageContainer key = {item.id}>
        <PageContentWrapper>
            <CheckoutInfo />
            <SectionHeader>Description</SectionHeader>
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
                    <MightLikeSection>
                        <MightLikeImg src = {pop[10].image} />
                        <MightLikeTitle>{pop[10].name}</MightLikeTitle>
                        <MightLikePrice>${pop[10].price}</MightLikePrice>
                    </MightLikeSection>

                    <MightLikeSection>
                        <MightLikeImg src = {pop[20].image} />
                        <MightLikeTitle>{pop[20].name}</MightLikeTitle>
                        <MightLikePrice>${pop[20].price}</MightLikePrice>
                    </MightLikeSection>

                    <MightLikeSection>
                        <MightLikeImg src = {pop[30].image} />
                        <MightLikeTitle>{pop[30].name}</MightLikeTitle>
                        <MightLikePrice>${pop[30].price}</MightLikePrice>
                    </MightLikeSection>

                    <MightLikeSection style = {{marginRight: '0px'}}>
                        <MightLikeImg src = {pop[16].image} />
                        <MightLikeTitle>{pop[16].name}</MightLikeTitle>
                        <MightLikePrice>${pop[16].price}</MightLikePrice>
                    </MightLikeSection>
                </MightLikeContainer>

                <SectionHeader>Reviews</SectionHeader>
                
                <ReviewSectionContainer>
                
                <ReviewHeaderContainer>
                <RatingGraphContainer>

                <GraphTitle>Review Snapshot</GraphTitle>

                    <RatingGraphRow>
                    <RatingGraphLabel>5</RatingGraphLabel>
                    <RatingGraphBar><RatingGraphFill /></RatingGraphBar>
                    <RatingGraphNumber>100</RatingGraphNumber>
                    </RatingGraphRow>

                    <RatingGraphRow>
                    <RatingGraphLabel>4</RatingGraphLabel>
                    <RatingGraphBar><RatingGraphFill /></RatingGraphBar>
                    <RatingGraphNumber>100</RatingGraphNumber>
                    </RatingGraphRow>

                    <RatingGraphRow>
                    <RatingGraphLabel>3</RatingGraphLabel>
                    <RatingGraphBar><RatingGraphFill /></RatingGraphBar>
                    <RatingGraphNumber>100</RatingGraphNumber>
                    </RatingGraphRow>

                    <RatingGraphRow>
                    <RatingGraphLabel>2</RatingGraphLabel>
                    <RatingGraphBar><RatingGraphFill /></RatingGraphBar>
                    <RatingGraphNumber>100</RatingGraphNumber>
                    </RatingGraphRow>

                    <RatingGraphRow>
                    <RatingGraphLabel>1</RatingGraphLabel>
                    <RatingGraphBar><RatingGraphFill /></RatingGraphBar>
                    <RatingGraphNumber>100</RatingGraphNumber>
                    </RatingGraphRow>
                </RatingGraphContainer>

                <StatContainer>
                    <StatContainerRow>
                        <StatContainerLabel>Overall</StatContainerLabel>
                        <Rating />
                        <ReviewAverage>4.0</ReviewAverage>
                    </StatContainerRow>

                    <StatContainerLabel>Most Recent Review</StatContainerLabel>
                    

                </StatContainer>

                <AddReviewButton>Add Review</AddReviewButton>
               </ReviewHeaderContainer>

               <Line />

                <IndividualRatingContainer id = 'reviews'>
                <RatingContents>
                <RatingContainerRow>
                    <Rating />
                    <ReviewTime>1 Day Ago</ReviewTime>
                </RatingContainerRow>
                <VerifiedUser>Verified User</VerifiedUser>
                <ReviewTitle>Great Plant</ReviewTitle>
                <Review>This product was great. I bought it for my kitchen and it has done well in the window.</Review>
                </RatingContents>
                </IndividualRatingContainer>
                <Line />

                <RatingContainer>
                    
                </RatingContainer>
                </ReviewSectionContainer>
        </PageContentWrapper>
    </PageContainer>
  )
}

export default ProductView