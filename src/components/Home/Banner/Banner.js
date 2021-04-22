import React from 'react';
import './Banner.css'
import { HashLink as Link } from 'react-router-hash-link';
import { useSpring, animated } from 'react-spring'
const Banner = () => {
    const styles = useSpring({
        loop: true,
        to: [
          { opacity: 1, color: '#ffaaee' },
          { opacity: 0, color: 'rgb(14,26,19)' },
        ],
        from: { opacity: 0, color: 'red' },
      })
    
    return (
        <main className="row d-flex align-items-center banner__main">
            <div className="offset-md-1 bannerText">
                <h1 style={{color:'#8E1837'}}>MOVING CAN'T BE MORE EASY!<br/>Need Help?</h1>
                <p style={{color:'#000'}}>Use our expert team to assist corporate moves anywhere in the Bangladesh.
                </p>
                <animated.div style={styles}>
                   <Link to="#servicesSection" ><button className="btn btn-primary serviceBtn">Get Services</button></Link>
                </animated.div>
            </div>
        </main>
    );
};

export default Banner;