import React from 'react';
import Expert from '../Expert/Expert';
import Services from '../Services/Services';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Expert></Expert>
        </div>
    );
};

export default Home;