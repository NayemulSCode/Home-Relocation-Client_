import React from 'react';
import {faClock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const BlogPost = ({blog}) => {
    const { name, img, description,post} = blog;
    return (
        <div className="card mx-3 shadow-sm singleBlog">
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{description}</p>
            <button className="btn btn-primary mb-1">Red more</button>
            <p className="card-text text-muted"><FontAwesomeIcon style={{color:'green'}} icon={faClock} /> {post}</p>
        </div>
    </div>
    );
};

export default BlogPost;