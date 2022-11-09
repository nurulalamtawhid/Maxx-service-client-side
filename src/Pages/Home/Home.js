import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Faq from '../FAQ/Faq';
import HomeServices from '../Services/HomeServices/HomeServices';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeServices></HomeServices>
            <About></About>
            <Faq></Faq>
            
        </div>
    );
};

export default Home;