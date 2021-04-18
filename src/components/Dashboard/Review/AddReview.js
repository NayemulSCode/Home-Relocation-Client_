import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { useForm } from 'react-hook-form';
const AddReview = () => {
    const [info, setInfo] = useState({});
    const { register, handleSubmit, errors } = useForm();
    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }
    const handleReview = () =>{
        const reviewDetails = {
            review: info, 
            orderTime: new Date()
          };
          fetch('https://boiling-dusk-71900.herokuapp.com/addReview',{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(reviewDetails)
          })
          .then(res => res.json())
          .then(success => {
            if(success){
              alert('thanks for your vital review');
            }
        })
    }
    return (
        <section className="row">
            <Sidebar />
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
            <h5 className="text-brand">Gives a Review</h5>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Your Name</label>
                    <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Name" />
                </div>
                <div className="form-group">
                    <label htmlFor="price">Service Name</label>
                    <input onBlur={handleBlur} type="text" className="form-control" name="sName" placeholder="Service Name" />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input onBlur={handleBlur} type="text" className="form-control" name="description" placeholder="Description" />
                </div>
                <button type="submit" onClick={handleReview} className="btn btn-primary">Submit</button>
            </form>
        </div>
        </section>
    );
};

export default AddReview;