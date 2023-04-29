import React, { useState} from 'react';
import { useParams } from 'react-router-dom';
import { Rating } from '@mui/material';
import styled from 'styled-components';
import {  mobile, tablet, laptop, desktop } from '../../../media';

const SubmitReviewForm = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 40%;
  align-items: center;
  justify-content: center;
  background-color: #FEFDFD;
  font-family: Arial;
  color: #1B1212;
  border: 1px solid #CCD3C2;
  margin: 20px 0 20px 0;
  ${tablet({
    width: '100%'
})};
    ${mobile({
      width: '100%'
})};
`

const ContentColumn = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`

const ReviewHeader = styled.h1`
  font-size: 24px;
  margin-top: 30px;
    ${mobile({
      fontSize: '20px'
})};
`

const TextInput = styled.input`
    display: flex;
    height: 44px;
    width: 90%;
    padding-left: 5px;
    font-size: 16px;
`

const ReviewText = styled.textarea`
  display: flex;
  justify-content: center;
  height: auto;
  width: 90%;
  min-height: 100px;
  font-size: 16px;
  resize: none; /* disable the textarea resizing handle */
`

const InputLabel = styled.label`
    font-size: 12px;
    margin: 20px 0px 5px -10px;
    text-align: left;
    width: 90%;
    font-weight: 600;
    font-size: 16px;
    &.bottom-label{
        margin-top: 5px;
        color: #4A4A45;
        font-weight: 500;
    }
`

const StarIcons = styled(Rating)`
    margin-left: -10px;
  `;

const StarElementAlign = styled.div`
    display: flex;
    width: 90%;
    align-items: center;
    justify-content: flex-start;
`
const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: auto;
    width: 90%;
    justify-content: space-between;
    align-items: space-between;
`

const SignInButtonMain = styled.button`
    display: flex;
    width: 50%;
    height: 44px;
    margin: 20px 0px 20px 5px;
    align-items: center;
    justify-content: center;
    background-color: #517A3E;
    color: #FEFDFD;
    font-weight: 600;
    cursor: pointer;
    &: disabled {
        color: gray;
        cursor: not-allowed;
    }

    &.cancel-button {
      background-color: #F5F5F5;
      color: #1B1212;
      font-weight: 500;
      margin: 20px 5px 20px 0px;
    }
`

const Error = styled.p`
    color: #FF4136;
    font-size: 16px;
    font-weight: 500;
`

const Success = styled.p`
  color: #517A3E;
  font-size: 16px;
  font-weight: 500;
`

const RatingPost = () => {
  const { id } = useParams();
  console.log(id)
  //state to open/close review
  const [toggleReview, setToggleReview] = useState(true);
  //post state to add review to backend
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState({
    id: id,
    date: Date.now(),
    title: '',
    review: '',
    username: '',
    rating: 0
  });

  //post error message
  const [errorMessage, setErrorMessage] = useState(null);

  //disables buttons when loading
  const [loading, setLoading] = useState(false);

  //generates success text
  const [successMessage, setSuccessMessage] = useState('');

  //review post method
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(review)
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      console.log('Review added successfully!');
      setSuccessMessage('Thanks! Your review was successfully submitted.');
      setLoading(false);
    } catch (error) {
      console.error('Error adding review:', error);
      setErrorMessage('Error: Please make sure all items are filled out');
      setLoading(false);
    }
  };

  //mobile

  return (
    <>
   {toggleReview ? <SubmitReviewForm onSubmit={handleSubmit}>
      <ReviewHeader>Please Leave a Review Below</ReviewHeader>

      <ContentColumn>
        <InputLabel htmlFor="username">Nickname *</InputLabel>
        <TextInput type="text" name="username" placeholder='basil134' value={review.username} onChange={(e) => setReview({ ...review, username: e.target.value })} />
      </ContentColumn>

      <ContentColumn>
        <InputLabel htmlFor="rating">Click to rate *</InputLabel>
        <StarElementAlign>
          <StarIcons
          style = {{background: 'white'}}
            value={review.rating}
            name="rating-submit"
            size='large'
            onChange={(event, newValue) => {
              setReview({ ...review, rating: newValue });
              setRating(newValue);
            }} />
        </StarElementAlign>
      </ContentColumn>

      <ContentColumn>
        <InputLabel htmlFor="title">Review Title *</InputLabel>
        <TextInput type="text" placeholder='Example, Great value' name="title" value={review.title} onChange={(e) => setReview({ ...review, title: e.target.value })} />
      </ContentColumn>


      <ContentColumn>
        <InputLabel htmlFor="review">ProductReview *</InputLabel>
        <ReviewText
          role="textbox"
          placeholder="I have had this plant for a month and it is exactly what I wanted. What I like best/what is the worst about this product is..."
          value={review.review}
          onChange={(e) => setReview({ ...review, review: e.target.value })}
          onInput={(e) => {
            e.target.style.height = 'auto';
            e.target.style.height = `${e.target.scrollHeight}px`;
          }}
        />
      </ContentColumn>
      {errorMessage && <Error>{errorMessage}</Error>}
      {successMessage && <Success>{successMessage}</Success>}

      <ButtonContainer>
      <SignInButtonMain className='cancel-button' disabled = {loading} onClick={() => setToggleReview(false)}>Cancel</SignInButtonMain>
        <SignInButtonMain type="submit" disabled = {loading}>Submit Review</SignInButtonMain>
      </ButtonContainer>

    </SubmitReviewForm> : null}
    </>
  )
}

export default RatingPost