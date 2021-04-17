import React, { useContext, useEffect, useState } from 'react';
import OrderDetails from './OrderDetails';
import {UserContext} from '../../../App'
const Order = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [orders, setOrders] =useState([]);
    console.log(orders);
    useEffect(() =>{
        fetch('http://localhost:5000/orders')
        .then(res => res.json())
        .then(data => setOrders(data))
    },[])
    return (
        <div>
            <h1>Order list</h1>
            <OrderDetails key={orders._id} order = {orders} />
        </div>
    );
};

export default Order;