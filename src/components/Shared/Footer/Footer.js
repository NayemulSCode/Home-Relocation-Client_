import React from 'react';
import './Footer.css';
import FooterCol from './FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Commit = [
    {img:"https://i.postimg.cc/brJPr1Fp/bodlao.png", link: "/emergency"},
    {name: "আপনার বাসা কিংবা অফিসের মালামাল নিজস্ব দায়িত্বে নিরাপদ স্থানান্তরে “Home Relocation সার্ভিস” অঙ্গীকারাবদ্ধ।" , link: "/checkup"},
    
]
const ourAddress = [
    {name: "Dhaka, Bangladesh" , link: "//google.com/map"},
    {name: "Dhanmondi-1206" , link: "//google.com/map"},
   
]
const recentPost = [
    {name: "Home Shifting Service in Dhaka" ,img:'https://i.postimg.cc/X70j911D/Home-Shifting-1024x576.jpg', link: "/home-relocation"},
    {name: "বাসা বদলাবেন – জেনে রাখুন!" ,img: 'https://i.postimg.cc/Wz57wsyV/Home-Relocation.jpg', link: "/home-relocation"},
    {name: "বাসা বদল – সহজ কিছু টিপস" ,img : 'https://i.postimg.cc/HxGvrWqP/Shifting-Service-Dhaka.jpg', link: "/house-relocation"},
]
const services = [
    {name: "House Shifting Services" , link: "/house-shift"},
    {name: "Office Shifting Services" , link: "/office-shift"},
    {name: "Pickup Rental Services" , link: "/pickup-rental"},
    {name: "Labor-Only Services" , link: "/labor-only"},
    {name: "Cleaning Service" , link: "/cleaning"},
]
const Footer = () => {
    return (
        <footer className="footer-area clear-both footer-custom Mobile-version">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle={"."} menuItems={Commit}/>
                    <FooterCol key={2} menuTitle="Services Link" menuItems={services}/>
                    <FooterCol key={4} menuTitle="Our Office" menuItems={ourAddress}> 
                        <div className="mt-5">
                            <h6 style={{color:'red'}}>Call now</h6>
                            <button className="btn btn-primary">+8801760988571</button>
                        </div>
                    </FooterCol>
                    <FooterCol key={3} menuTitle="Recent Post" menuItems={recentPost}/>
                </div>
                <hr className="text-white"/>
                <div className="copyRight text-center d-flex justify-content-between">
                    <p className="text-white copyrightText">Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                    <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;