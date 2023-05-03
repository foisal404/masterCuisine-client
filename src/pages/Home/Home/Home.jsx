import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefCard from '../Chefcard/ChefCard';

const Home = () => {
    const loader=useLoaderData();
    // console.log(loader)
    return (
        <div className='min-h-[83vh]'>
            {/* Hero section  */}
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://cdn.pixabay.com/photo/2017/09/30/15/10/plate-2802332_960_720.jpg")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Let your taste buds travel to Turkey with <br /> <span className='text-red-400'>Master Cuis<span className='bg-gray-200 '>in</span>e.</span></h1>
                        <p className="mb-5 ">Discover the flavors of Turkish cuisine with Master Cuisine! Our platform brings together a community of talented chefs and food enthusiasts, who share their passion for delicious food and culinary creativity.</p>
                        <button className="btn btn-error text-white">Get Started</button>
                        </div>
                    </div>
            </div>
            {/* chef section  */}
            <section className='p-5 grid grid-cols-2 gap-4 bg-slate-100'>
                {
                    loader.map(load=><ChefCard key={load._id} data={load}></ChefCard>)
                }
            </section>
        </div>
    );
};

export default Home;