import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import OrderList from '../OrderList/OrderList';
import OrderListDetails from '../OrderList/OrderListDetails';
import Services from '../Services/Order';
import Sidebar from '../Sidebar/Sidebar';


const containerStyle = {
    backgroundColor: "#F4FDFB",
    height:"100%"
}
const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);
    useEffect(()=>{
        fetch('https://boiling-dusk-71900.herokuapp.com/isAdmin',{
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({email: loggedInUser.email})
        })
        .then(res => res.json())
        .then(data => setIsAdmin(data))
    },[])
    return (
        <section>
        <div style={containerStyle} className="row">
            <div className="col-md-2">
                <Sidebar />
            </div>
            <div className="col-md-10">
            {/* <Services /> */}
            {
                isAdmin ? <Services /> :<OrderList />
            }
                
            </div>
        </div>
    </section>
    );
};

export default Dashboard;