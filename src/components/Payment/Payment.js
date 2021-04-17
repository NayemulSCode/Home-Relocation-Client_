import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';
const stripePromise = loadStripe('pk_test_51IeH5yFDJ3vrvmK8shrXZGkwp3Eg8EHPa3SZHwkVJY9IWb5tF0qMNTnqfAUp0rsNhDbGadqRjrKVgBByd3Pb69KY00SxzV3JI2');
const Payment = ({handlePayment}) => {
    return (
        <Elements stripe={stripePromise}>
            <SimpleCardForm handlePayment={handlePayment} />
        </Elements>
    );
};

export default Payment;