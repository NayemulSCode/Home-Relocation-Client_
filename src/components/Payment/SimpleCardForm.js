import React, { useState } from 'react';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import { useHistory } from 'react-router';

const SimpleCardForm = ({handlePayment}) => {
  const history = useHistory();
    const handleProceedOrder =() =>{
        history.push('/orderList');
    }
    const stripe = useStripe();
    const elements = useElements();

    const [paymentError, setPaymentError] = useState(null)
    const [paymentSuccess, setPaymentSuccess] = useState(null)
    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();
    
        if (!stripe || !elements) {
          // Stripe.js has not loaded yet. Make sure to disable
          // form submission until Stripe.js has loaded.
          return;
        }
    
        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const cardElement = elements.getElement(CardElement);
    
        // Use your card Element with other Stripe.js APIs
        const {error, paymentMethod} = await stripe.createPaymentMethod({
          type: 'card',
          card: cardElement,
        });
    
        if (error) {
            setPaymentError(error.message);
            setPaymentSuccess(null);
          console.log('[error]', error);
        } else {
            setPaymentSuccess(paymentMethod.id)
           setPaymentError(null);
           handlePayment(paymentMethod.id);
          console.log('[PaymentMethod]', paymentMethod);
        }
      };
    return (
        <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay for order 
      </button>
      <div>
          {
              paymentError && <p style={{color:'red'}}>{paymentError}</p>
          }
          {
              paymentSuccess && <button  onClick={handleProceedOrder} style={{color:'green'}} >Payment done! let's see your order!</button>
              
          }
      </div>
    </form>
    );
};

export default SimpleCardForm;