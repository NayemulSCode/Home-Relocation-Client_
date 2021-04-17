import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Blogs from '../Blog/Blogs';
import Contact from '../Contact/Contact';
import ExtraServices from '../ExtraServices/ExtraServices';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div>
            <Header />
            <ExtraServices />
            <Services />
            <Blogs />
            <Review />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;