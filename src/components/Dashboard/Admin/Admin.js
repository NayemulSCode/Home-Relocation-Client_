import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../Sidebar/Sidebar';
const Admin = () => {
    const [admin, setAdmin] = useState({});
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data =>{
        setAdmin(data);
        console.log(data);
    }
    const handleCreateAdmin = () =>{
      const formData = new FormData();
      formData.append('email', admin.email);
        fetch('http://localhost:5000/addAdmin',{
          method: 'POST',
          body: formData
        })
        .then(res => res.json())
        .then(data => {
          if(data){
            alert('admin added');
          }
        })
      }
    return (
        <section className="row">
          <Sidebar />
            <div className="col-md-10" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <input type="email" name="email" placeholder="Enter Email" className="form-control"  {...register("email")}  required/>
                    {errors?.email && <span className="text-danger">This field is required</span>}
                </div>
                <br />
                <div className="form-group text-right">
                    <button onClick ={handleCreateAdmin}  type="submit" className="btn btn-primary">Create Admin</button>
                </div>
                </form>
            </div>
        </section>
    );
};

export default Admin;