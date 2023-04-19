import React from 'react';
import { useState } from 'react';
import { useStripe } from '@stripe/react-stripe-js';
//stripe backend connection in the file below
import { fetchFromAPI } from '../../../helpers';
import { useSelector } from 'react-redux';

const StripeCheckout = () => {
  const [email, setEmail] = useState('');
  const cart = useSelector((state) => state.cart.products);
  const stripe = useStripe();

  //need to get the cart items from redux
  const handleGuestCheckout = async (e) => {
    e.preventDefault();
    const line_items = cart.map(item => {
     return {
      quantity: item.count,
      price_data: {
        currency: 'usd',
        unit_amount: (item.price * item.count) * 100, //all prices in cents
        product_data: {
          name: item.title,
          description: 'House plants delivered to your door', //might need to be an array value
          images: [item.img],
        }
      }
     } 
    });
    const response = await fetchFromAPI('create-checkout-session', {
      body: {line_items, customer_email: email},
    });
    const {sessionId} = response;
    const {error} = await stripe.redirectToCheckout({
      sessionId,
    })
    if (error) {
      console.log(error)
    }
  }
  return (
    <>
    <form onSubmit={handleGuestCheckout}>
      <div>
        <input 
        type="email"
        onChange={e => setEmail(e.target.value)}
        placeholder='yourEmail@email.com'
        value = {email}
        />
      </div>
      <div>
        <button type='submit'>
          Checkout
        </button>
      </div>
    </form>
    </>
  )
}

export default StripeCheckout