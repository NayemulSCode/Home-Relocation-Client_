import React, { useEffect, useState } from 'react';
import ManageServiceInfo from '../ManageServiceInfo/ManageServiceInfo';
import Sidebar from '../Sidebar/Sidebar';

const ManageServices = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('https://boiling-dusk-71900.herokuapp.com/services')
        .then(res => res.json())
        .then(data => {
            setServices(data);
            console.log(data);
        })
    },[])
    return (
        <section className="row">
            <Sidebar />
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">Services</h5>
                  <ManageServiceInfo key={services._id} services = {services}  />
            </div>
        </section>
    );
};

export default ManageServices;