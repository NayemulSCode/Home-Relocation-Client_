import React, { useState } from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const AddService = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);
    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }
    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }
    const handleSubmit = () => {
        const formData = new FormData()
        console.log(info);
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('price', info.price);
        formData.append('description', info.description);
        formData.append('area', info.area);

        fetch('https://boiling-dusk-71900.herokuapp.com/addService', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <section className="row">
            <Sidebar />
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
            <h5 className="text-brand">Add a Service</h5>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Name</label>
                    <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Name" />
                </div>
                <div className="form-group">
                    <label htmlFor="price">Service Price</label>
                    <input onBlur={handleBlur} type="text" className="form-control" name="price" placeholder="Price" />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input onBlur={handleBlur} type="text" className="form-control" name="description" placeholder="Description" />
                </div>
                <div className="form-group">
                    <label htmlFor="area">Description</label>
                    <input onBlur={handleBlur} type="text" className="form-control" name="area" placeholder="Available Area" />
                </div>
                <div className="form-group">
                    <label htmlFor="image">Upload a image</label>
                    <input onChange={handleFileChange} type="file" className="form-control" id="exampleInputPassword1" placeholder="Picture" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
        </section>
    );
};

export default AddService;