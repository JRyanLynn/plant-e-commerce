import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import StripeCheckout from '../components/Checkout/stripe-checkout/Stripe';

const Checkout = () => {
    const quantity = useSelector((state) => state.cart.products.length);

    const total = useSelector((state) => 
    state.cart.products.reduce((acc, product) => 
      acc + product.price * product.count, 0));
    
    return (
      <div>
          <h2>Checkout Summary</h2>
          <h3>{`Total Items: ${quantity}`}</h3>
          <h4>{`Amount Due: $${(total).toFixed(2)}`}</h4>
          <StripeCheckout />
      </div>
    )
}

export default Checkout