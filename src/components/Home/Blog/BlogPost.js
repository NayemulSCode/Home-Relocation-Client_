import React from 'react';
import { useSpring, animated } from "react-spring";
import {faClock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const BlogPost = ({blog}) => {
    const { name, img, description,post} = blog;
    const [{ y, color }, set] = useSpring(() => ({ y: 100, color: "#fff" }));

    return (
        <div className="card mx-3 shadow-sm singleBlog">
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{description}</p>
            <button 
                className="btn btn-primary mb-1 animatedButton"
                onMouseEnter={() => set({ y: 0, color: "#000" })}
                onMouseLeave={() => set({ y: 100, color: "#fff" })}
            >
               <animated.span style={{ color }}>
               Read More
                </animated.span>
                <animated.div
                style={{ transform: y.interpolate(v => `translateY(${v}%`) }}
                className="glance"
                />
            </button>
            <p className="card-text text-muted"><FontAwesomeIcon style={{color:'green'}} icon={faClock} /> {post}</p>
        </div>
    </div>
    );
};

export default BlogPost;