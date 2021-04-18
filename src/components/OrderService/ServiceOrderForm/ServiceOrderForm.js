import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';
import Payment from '../../Payment/Payment';
const ServiceOrderForm = ({name,price}) => {
    console.log('cart Data',name,price);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, errors } = useForm();
    const [serviceData, setServiceData] = useState(null);
    const onSubmit = data =>{
        setServiceData(data);
        console.log(data);
    }
    const handlePaymentOrder = paymentId =>{
        const orderDetails = {
          ...loggedInUser, 
          service: name, 
          price : price,
          shipment: serviceData, 
          paymentId,
          paymentStatus: 'pending',
          orderTime: new Date()
        };
        fetch('https://boiling-dusk-71900.herokuapp.com/addOrder',{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(orderDetails)
        })
        .then(res => res.json())
        .then(data => {
          if(data){
            alert('order added successfully');
          }
        })
      }
    return (
        <div>
            <div style={{display: serviceData ? 'none': 'block'}}>
                <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <input type="text" placeholder="Your Name" className="form-control"  {...register("name")}  required/>
                    {errors?.name && <span className="text-danger">This field is required</span>}
                </div>
                <br/>
                <div className="form-group">
                    <input type="text" placeholder="Phone Number" className="form-control" {...register("phone")} required />
                    {errors?.phone && <span className="text-danger">This field is required</span>}
                </div>
                <br/>
                <div className="form-group">
                    <input type="text" placeholder="Address" className="form-control" {...register("address")} required />
                    {errors?.address && <span className="text-danger">This field is required</span>}
                </div>
                <br/>
                    <div className="form-group text-right">
                        <button type="submit" className="btn btn-primary">Proceed to Payment</button>
                    </div>
                </form>
            </div>
            <div style={{display: serviceData ? 'block': 'none'}}>
                <h2>Stripe Payment</h2>
                <Payment handlePayment = {handlePaymentOrder} />
            </div>
        </div>
    );
};

export default ServiceOrderForm;