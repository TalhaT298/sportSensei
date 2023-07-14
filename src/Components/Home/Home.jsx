/* eslint-disable no-unused-vars */
import React from 'react';
import Banner from './Banner/Banner';
import Review from './Review/Review';
import Work from './Work/Work';


const Home = () => {
    return (
        <div>
             <Banner />
            <Review/>
           
            <Work/>
        </div>
    );
};

export default Home;