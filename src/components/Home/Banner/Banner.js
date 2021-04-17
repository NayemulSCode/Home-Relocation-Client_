import React from 'react';
import './Banner.css'
const Banner = () => {
    return (
        <main className="row d-flex align-items-center banner__main">
            <div className="offset-md-1 bannerText">
                <h1 style={{color:'#8E1837'}}>MOVING CAN'T BE MORE EASY!<br/>Need Help?</h1>
                <p style={{color:'#000'}}>Use our expert team to assist corporate moves anywhere in the Bangladesh.
                </p>
                <button className="btn btn-primary serviceBtn">Get Services</button>
            </div>
        </main>
    );
};

export default Banner;