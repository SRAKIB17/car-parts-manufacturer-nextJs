import React from 'react';
import Navbar from '../Header/Navbar';
import FeatureProduct from '../Products/FeatureProduct';
import Products from '../Products/NewProducts';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            <div>
                <Banner />
            </div>
            <div>
                <Products />
            </div>
            <div>
                <FeatureProduct />
            </div>
        </div>
    );
};

export default Home;