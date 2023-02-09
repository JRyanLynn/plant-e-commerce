import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { productArray } from '../../../data';
import { Rating } from '@mui/material';

const ReviewSectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 85%;
    height: 100%;
    border: 1px solid #CCD3C2;
    color: #1B1212;
`

const Line = styled.hr`
    width: 90%;
    color: #CCD3C2;
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
    height: 15px;
    border: 1px solid #1B1212;
`

const RatingGraphFill = styled.div`
    width: 50%;
    height: 15px;
    background-color: #517A3E;
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
    background-color: #517A3E;
    color: #FEFDFD;
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
const ReviewAverage = styled.h3`
    font-size: 18px;
    font-weight: 500;
    margin-left: 10px;
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

const Ratings = () => {

    const {id} = useParams();

    const productArrayItem = productArray.find(i => i.id === parseInt(id));

  return (
     <ReviewSectionContainer>

                   <ReviewHeaderContainer key = {productArrayItem.id}>
                    <RatingGraphContainer>

                            <GraphTitle>Product Reviews</GraphTitle>

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

                    <IndividualRatingContainer>
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
  )
}

export default Ratings