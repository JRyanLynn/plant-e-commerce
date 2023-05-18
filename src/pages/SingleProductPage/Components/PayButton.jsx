import React from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

const url = "http://localhost:5000/api";

const PayButton = ({cartItems}) => {
    console.log(cartItems)
    const handleCheckout = () => {
    axios.post(`${url}/stripe/create-checkout-session`, {
        cartItems,
        //put user _id from backend get request here
    }).then((res) => {
        if (res.data.url) {
            window.location.href = res.data.url;
        }
    }).catch ((error) => {
        console.log(error.message)
    })
    }

  return (
    <>
    <button onClick={handleCheckout}>Check Out</button>
    </>
  )
}

export default PayButton