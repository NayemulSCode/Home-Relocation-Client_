import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';
import '../ServiceCard/ServiceCard.css'
const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://boiling-dusk-71900.herokuapp.com/services')
        .then(res => res.json())
        .then(data => {
            setServices(data);
        })
    },[])
    return (
        <section id="servicesSection" style={{backgroundColor:'#F8F8F8'}} className="serviceSection py-5">
            <div className="container">
                <div className="sectionHeader text-center">
                    <h1>Our Services</h1>
                    <p>Our popular services in daily life!</p>
                </div>
                <div className="row d-flex mt-5 mobile-responsive">
                    {
                        services.map( service => <ServiceCard key={service._id} service ={service} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;