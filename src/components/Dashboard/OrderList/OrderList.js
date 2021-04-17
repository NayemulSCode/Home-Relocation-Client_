import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import OrderListDetails from './OrderListDetails';

const OrderList = () => {
    const [orderList, setOrderList] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    useEffect(()=>{
        fetch('http://localhost:5000/orderByEmail?email='+loggedInUser.email)
        .then(res => res.json())
        .then( data => {
            setOrderList(data);
            console.log(data);
        })
    },[])
    return (
        <section className="row">
            <Sidebar />
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">Order List</h5>
                  {
                      <OrderListDetails key = {orderList._id} orderList = {orderList} />
                  }
            </div>
        </section>
    );
};

export default OrderList;