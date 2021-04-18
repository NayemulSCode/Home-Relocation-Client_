import React, { useEffect, useState } from 'react';

import ServiceOrderForm from '../OrderService/ServiceOrderForm/ServiceOrderForm';
import { useParams } from 'react-router';
const CartItem = () => {
    //go submit form
   
    const {id} = useParams();
    const [service, setService]= useState([]);
    const cartService = service.find(carId => carId._id == id)
    useEffect(() =>{
        fetch('https://boiling-dusk-71900.herokuapp.com/services')
        .then(res => res.json())
        .then(data => {
            setService(data);
        })
    },[])
    return (
        <div>
            <h1>Checkout</h1>
            <ServiceOrderForm name={cartService?.name} price={cartService?.price}>
            
            </ServiceOrderForm>
        </div>
    );
};

export default CartItem;