import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { Rating } from '@mui/material';

const ReviewSectionContainer = styled.section`
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

const ReviewAverage = styled.h3`
    font-size: 18px;
    font-weight: 500;
    margin-left: 10px;
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
const Ratings = () => {

    // state for backend
    const [reviews, setReviews] = useState([]);
    //state to add review
    const [addReview, setAddReview] = useState(false);

    const { id } = useParams();

    //get request from backend 
    useEffect(() => {
        const getReviews = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/reviews');
                setReviews(response.data);
            } catch (error) {
                console.log(error)
            }
        };
        getReviews();
    }, []);

    // grabs id from page using params and matches it to filter array
    const item = reviews.filter((i) => i.id === parseInt(id));

    //change loading screen
    if (!item) {
        return <div></div>;
    }

    //Average is a reduce 
    const avgReview = item.length > 0 ? item.reduce((sum, review) => sum + review.rating, 0) / item.length : 0;

    console.log(avgReview)

    //function generates the number of ratings for each star in the reviewCount(5) format
    const reviewCount = (value) => {
        return item.filter(index => index.rating === value).length;
    }

    //function for how long ago review posted
    function timeAgo(date) {
        const now = Date.now();
        const diff = now - date.getTime();
        const seconds = Math.floor(diff / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);

        if (days > 0) {
            return days === 1 ? '1 day ago' : `${days} days ago`;
        } else if (hours > 0) {
            return hours === 1 ? '1 hour ago' : `${hours} hours ago`;
        } else if (minutes > 0) {
            return minutes === 1 ? '1 minute ago' : `${minutes} minutes ago`;
        } else {
            return seconds === 1 ? '1 second ago' : `${seconds} seconds ago`;
        }
    };

    //most recent review
    const newestReview = item.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
    });

    const mostRecentReview = newestReview.length > 0 ? newestReview[0] : false;


    return (
        <ReviewSectionContainer>

            <ReviewHeaderContainer>
                <RatingGraphContainer>

                    <GraphTitle>Product Reviews</GraphTitle>

                    <RatingGraphRow>
                        <RatingGraphLabel>5</RatingGraphLabel>
                        <RatingGraphBar>
                            <RatingGraphFill style={{ width: item.length ? `${(reviewCount(5) / item.length) * 100}%` : '0' }} />
                        </RatingGraphBar>
                        <RatingGraphNumber>{reviewCount(5)}</RatingGraphNumber>
                    </RatingGraphRow>

                    <RatingGraphRow>
                        <RatingGraphLabel>4</RatingGraphLabel>
                        <RatingGraphBar>
                            <RatingGraphFill style={{ width: item.length ? `${(reviewCount(4) / item.length) * 100}%` : '0' }} />
                        </RatingGraphBar>
                        <RatingGraphNumber>{reviewCount(4)}</RatingGraphNumber>
                    </RatingGraphRow>

                    <RatingGraphRow>
                        <RatingGraphLabel>3</RatingGraphLabel>
                        <RatingGraphBar>
                            <RatingGraphFill style={{ width: item.length ? `${(reviewCount(3) / item.length) * 100}%` : '0' }} />
                        </RatingGraphBar>
                        <RatingGraphNumber>{reviewCount(3)}</RatingGraphNumber>
                    </RatingGraphRow>

                    <RatingGraphRow>
                        <RatingGraphLabel>2</RatingGraphLabel>
                        <RatingGraphBar>
                            <RatingGraphFill style={{ width: item.length ? `${(reviewCount(2) / item.length) * 100}%` : '0' }} />
                        </RatingGraphBar>
                        <RatingGraphNumber>{reviewCount(2)}</RatingGraphNumber>
                    </RatingGraphRow>

                    <RatingGraphRow>
                        <RatingGraphLabel>1</RatingGraphLabel>
                        <RatingGraphBar>
                            <RatingGraphFill style={{ width: item.length ? `${(reviewCount(1) / item.length) * 100}%` : '0' }} />
                        </RatingGraphBar>
                        <RatingGraphNumber>{reviewCount(1)}</RatingGraphNumber>
                    </RatingGraphRow>
                </RatingGraphContainer>

                <StatContainer>
                    <StatContainerRow>
                        <StatContainerLabel>Overall</StatContainerLabel>
                        <Rating readOnly value={avgReview} />
                        <ReviewAverage>{avgReview}</ReviewAverage>
                    </StatContainerRow>

                    <StatContainerLabel>Most Recent Review</StatContainerLabel>
                    <Review>{mostRecentReview.review}</Review>


                </StatContainer>

                <AddReviewButton>Add Review</AddReviewButton>
            </ReviewHeaderContainer>

            <Line />



            <IndividualRatingContainer>
                <RatingContents>
                    {item.map((item) => {
                        const dateObj = new Date(item.date);
                        const elapsed = timeAgo(dateObj);

                        return (
                            <RatingContainer>
                                <RatingContainerRow key={item.id}>
                                    <Rating readOnly value={item.rating} />
                                    <ReviewTime>{elapsed}</ReviewTime>
                                </RatingContainerRow>

                                <RatingContainerRow>
                                    <VerifiedUser>{item.username}</VerifiedUser>
                                </RatingContainerRow>
                                <ReviewTitle>{item.title}</ReviewTitle>
                                <Review>{item.review}</Review>
                                <Line style={{ width: '100%' }} />
                            </RatingContainer>
                        );
                    })}
                </RatingContents>

            </IndividualRatingContainer>



        </ReviewSectionContainer>
    )
}

export default Ratings