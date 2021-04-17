import React from 'react';
import { useHistory } from 'react-router';

const ServiceCard = ({service}) => {
    const {name,price, description, area,image} = service;
    const history = useHistory()
    const handleCart = id =>{
        const url = `CartItem/${id}`
        history.push(url)
    }
    return (
        <div className="card mx-3 my-3 col-md-4 shadow-sm singleService">
            {
                 service.image ? <img style={{height: '200px'}} src={`data:image/png;base64,${service.image.img}`}/>
                 :
                <img style={{height: '200px'}} className="img-fluid mb-3" src={`http://localhost:5000/services${service.img}`} alt=""/>
                }
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p>Price: <span className="">{price}&#2547;</span></p>
                <p className="card-text">{description}</p>
                <p>Available at: <span>{area}</span> </p>
                <button onClick={()=> handleCart(service._id)} className="btn btn-primary mb-1 serviceBtn">Get Service</button>
            </div>
        </div>
    );
};

export default ServiceCard;