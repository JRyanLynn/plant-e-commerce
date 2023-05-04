import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { Rating } from '@mui/material';
import RatingForm from './RatingForm';
import { mobile, tablet, laptop, desktop } from '../../../media';

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
    ${mobile({
    flexDirection: 'column'
})}
`

const RatingGraphContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin-top: 20px;
    margin-left: 20px;
    ${mobile({
    marginLeft: '0px'
})}
`

const GraphTitle = styled.h1`
    font-size: 24px;
    font-weight: 500;
    ${mobile({
    display: 'none'
})}
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
    ${mobile({
    width: '100%'
})}
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
    ${mobile({
    display: 'none'
})}
`
const StatContainerRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 95%;
`
const MobileStatContainerRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 95%;
    ${tablet({
    display: 'none'
})};
    ${laptop({
    display: 'none'
})};
    ${desktop({
    display: 'none'
})};
`


const StatContainerLabel = styled.h2`
    font-size: 24px;
    font-weight: 500;
    margin-right: 10px;   

`

const MobileStatContainerLabel = styled.h2`
    font-size: 24px;
    font-weight: 500;
    margin-right: 10px;

`

const MobileRating = styled(Rating)`

`

const AddReviewButton = styled.button`
    width: 35%;
    height: 44px;
    padding: 5px;
    margin-top: 35px;
    font-size: 16px;
    font-weight: 600;
    align-items: center;
    justify-content: center;
    background-color: #517A3E;
    color: #FEFDFD;
    ${tablet({
    display: 'none'
})};
    ${mobile({
    display: 'none'
})};
`

const MobileReviewFormButton = styled.button`
    width: 90%;
    height: 40px;
    padding: 5px;
    margin: 20px 0px 20px 0px;
    font-size: 16px;
    font-weight: 600;
    align-items: center;
    justify-content: center;
    background-color: #517A3E;
    color: #FEFDFD;
    ${desktop({
    display: 'none'
})},
    ${laptop({
    display: 'none'
})},
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

const MobileReviewAverage = styled.h3`
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
    const { id } = useParams();

    // state for backend
    const [reviews, setReviews] = useState([]);
    //toggles review form
    const [toggleReview, setToggleReview] = useState(false);

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

    //Average with floor to eliminate floats
    const avgReview = item.length > 0 ? Math.floor(item.reduce((sum, review) => sum + review.rating, 0) / item.length) : 0;

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

                <MobileStatContainerRow>
                    <MobileStatContainerLabel>Overall</MobileStatContainerLabel>
                    <MobileRating readOnly value={avgReview} />
                    <MobileReviewAverage>{avgReview}</MobileReviewAverage>
                </MobileStatContainerRow>

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
                    <Review>
                        {mostRecentReview.review && mostRecentReview.review.slice(0, 100) + (mostRecentReview.review.length > 100 ? "..." : "")}
                    </Review>


                </StatContainer>

                <AddReviewButton onClick={() => setToggleReview((!toggleReview))}>Add a Review</AddReviewButton>
            </ReviewHeaderContainer>
            <MobileReviewFormButton onClick={() => setToggleReview((!toggleReview))}>Add a Review</MobileReviewFormButton>

            <Line />

            {toggleReview ? <RatingForm /> : null}
            <IndividualRatingContainer>
                <RatingContents>
                    {item.map((item, index) => {
                        const dateObj = new Date(item.date);
                        const elapsed = timeAgo(dateObj);

                        return (
                            <RatingContainer key={index}>
                                <RatingContainerRow key={item.id}>
                                    <Rating key={item.rating} readOnly value={item.rating} />
                                    <ReviewTime>{elapsed}</ReviewTime>
                                </RatingContainerRow>

                                <RatingContainerRow>
                                    <VerifiedUser key={item.username}>{item.username}</VerifiedUser>
                                </RatingContainerRow>
                                <ReviewTitle key={item.title}>{item.title}</ReviewTitle>
                                <Review key={item.review}>{item.review}</Review>
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