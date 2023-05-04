import React from 'react';
import Header from '../pages/shared/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/shared/Footer';

const Main = () => {
    return (
        <div className='lg:container lg:mx-auto mx-1 md:mx-4 '>
            <Header></Header>
            <Outlet ></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;