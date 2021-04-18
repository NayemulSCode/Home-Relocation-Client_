import React, { useEffect, useState } from 'react';

const ManageServiceInfo = ({services}) => {
    const [service, setService] = useState([]);
    useEffect(() =>{
        setService(services);
    },[services])
   const handleDeleteService = id =>{
       fetch(`https://boiling-dusk-71900.herokuapp.com/services/${id}`,{
           method:'DELETE'
       })
       .then(res => res.json())
       .then(result =>{ 
            alert('deletion successfully');
            setService(service.filter((ser) => ser._id !== id))
       })
   }
    return (
        <div>
            <p>{console.log('serrice data', service)}</p>
            <table className="table table-borderless">
            <thead>
                <tr>
                <th className="text-secondary" scope="col">Sr.no</th>
                <th className="text-secondary" scope="col">Name</th>
                <th className="text-secondary" scope="col">Price</th>
                <th className="text-secondary" scope="col">Area</th>
                <th className="text-secondary" scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {
                  service.map((service, index) => 
                    <tr key={index}>
                        <td>{index +1}</td>
                        <td>{service.name}</td>
                        <td>{service.price}</td>
                        <td>{service.area}</td>
                        <td><button onClick= { () => {handleDeleteService(service._id)}} className="btn btn-danger">Delete</button> <button className="btn btn-primary">Update</button></td>
                    </tr>
                    )
                }
            </tbody>
        </table>
        </div>
    );
};

export default ManageServiceInfo;