import React from 'react';
import Usetitle from '../../Hooks/Usetitle';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Faq from '../FAQ/Faq';
import HomeServices from '../Services/HomeServices/HomeServices';

const Home = () => {
    Usetitle('Maxx-Services')
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