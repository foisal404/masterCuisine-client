import React from 'react';
import Header from '../pages/shared/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/shared/Footer';

const ChefLayout = () => {
    return (
        <div className='lg:container lg:mx-auto mx-4 '>
            <Header></Header>
            <Outlet ></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default ChefLayout;