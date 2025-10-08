import React from 'react';
import Banner from '../Components/Banner';
import States from '../Components/States';
import TrendingApps from '../Components/TrendingApps';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <States></States>
            <TrendingApps></TrendingApps>
            
        </div>
    );
};

export default Home;