import React from 'react';
import Header from '../../pages/shared/Header';
import Footer from '../../pages/shared/Footer';
import { useAsyncError, useRouteError } from 'react-router-dom';

const Errorpage = ({children}) => {
    const {status,statusText}=useRouteError();

    return (
        <div>
            <Header></Header>
            
            <section className='min-h-[83vh] flex justify-center items-center'>
                {
                    status?                <span><h2 className='text-9xl text-red-300'>{status}</h2>
                    <h1 className='text-orange-400'>{statusText}</h1>
                    </span>  :<p className='text-5xl text-red-300'>{children}</p>
                }
            </section>
            <Footer></Footer>
        </div>
    );
};

export default Errorpage;