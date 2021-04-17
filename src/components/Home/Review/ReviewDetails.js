import React from 'react';

const ReviewDetails = ({review}) => {
    const {name, description,sName} = review?.review;
    const {orderTime} = review;
    return (
        <div className="card col-md-3 shadow-sm mx-2 my-2">
            <div className="card-header d-flex align-items-center">
                <h6 className="text-primary">{name}</h6>
                
            </div>
            <div className="card-body">
                <h5>{sName}</h5>
                <p className="card-text text-secondary">{description}</p>
            </div>
            <div className="card-footer">
            <p className="">{(new Date(orderTime).toDateString('dd/MM/yyyy'))}</p>
            </div>
        </div>
    );
};

export default ReviewDetails;