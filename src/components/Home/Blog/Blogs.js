import React from 'react';
import './Blog.css'
import BlogPost from './BlogPost';
const blogData =[
    {
        id: 1,
        name: 'বাসা বদলাবেন – জেনে রাখুন!',
        post:'4 months ago',
        img: 'https://i.postimg.cc/Wz57wsyV/Home-Relocation.jpg',
        description: 'খুব প্রয়োজনীয় জিনিসগুলোর একটি তালিকা তৈরি করুন। তালিকা মিলিয়ে সব জিনিস একসঙ্গে প্যাকেট করুন...'
    },{
        id: 2,
        name:'Home Shifting Service in Dhaka',
        post:'7 months ago',
        img:'https://i.postimg.cc/X70j911D/Home-Shifting-1024x576.jpg',
        description:'Home shifting is difficult and stressful for city people. At the time of moving your home...'
    },
    {
        id: 3,
        name: 'বাসা বদল – সহজ কিছু টিপস',
        post:'1 year ago',
        img : 'https://i.postimg.cc/HxGvrWqP/Shifting-Service-Dhaka.jpg',
        description:'নিঃসন্দেহে বাসা বদল করে নতুন বাসায় স্থানান্তর হওয়া একটি জটিল এবং কঠিন কাজ। এক্ষেত্রে যেমন সময় খরচ...'
    }
]
const Blogs = () => {
    return (
        <section className="blogSection py-5">
            <div className="container">
                <div className="sectionHeader text-center">
                    <h1>Our Blogs</h1>
                    <p>Our success is measured by our clients Satisfaction !</p>
                </div>
                <div className="row card-group d-flex justify-content-center mt-5">
                    {
                        blogData.map( blog => <BlogPost key={blogData.id} blog={blog} ></BlogPost>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Blogs;