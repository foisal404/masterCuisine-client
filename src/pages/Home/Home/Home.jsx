import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefCard from '../Chefcard/ChefCard';
import Review from '../Review/Review';
import Service from '../Service/Service';

const Home = () => {
    const loader=useLoaderData();
    // console.log(loader)
    const [reviews,setReviews]=useState([])
    useEffect(()=>{
        fetch('https://chef-recipe-hunter-server-foisal404.vercel.app/reviews')
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])

    const [servies,setServies]=useState([])
    useEffect(()=>{
        fetch('https://chef-recipe-hunter-server-foisal404.vercel.app/services')
        .then(res=>res.json())
        .then(data=>setServies(data))
    },[])
    // console.log(reviews);
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
            {/* service section  */}
            <section className='bg-slate-100 p-5 '>
                <h2 className='text-center text-4xl font-bold'>Available Services</h2>
                <div className=' grid grid-cols-3 gap-4 p-5'>
                    {
                        servies?.map(load=><Service key={load.id} data={load}></Service>)
                    }
                </div>
            </section>
            {/* chef section  */}
            <section className='p-5 '>
                <h2 className='text-center text-4xl font-bold'>Available Chef </h2>
                <div className=' grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 '>
                    {
                        loader.map(load=><ChefCard key={load._id} data={load}></ChefCard>)
                    }
                </div>
            </section>
            {/* review section  */}
            <section className='bg-slate-100 p-5 my-5'>
                <h2 className='text-center text-4xl font-bold'>Review & Ratings </h2>
                <div className=' grid grid-cols-3 gap-4 p-5'>
                    {
                        reviews?.map(load=><Review key={load.id} data={load}></Review>)
                    }
                </div>
            </section>


        </div>
    );
};

export default Home;