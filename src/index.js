import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

//Put string here because stripe threw an error even thought it should work without it
const stripePromise = loadStripe(`${process.env.NEXT_PUBLIC_STRIPE_PUBLIC}`);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <BrowserRouter>
   <Elements stripe={stripePromise}>
    <App />
    </Elements>
    </BrowserRouter>
);


