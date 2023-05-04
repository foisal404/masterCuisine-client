import React from 'react';
import ChefDetails from '../ChefDetails/ChefDetails';
import { useLoaderData } from 'react-router-dom';
import RecipiesCard from '../RecipiesCard/RecipiesCard';

const Chef = () => {
    const loader=useLoaderData();
    const {details,recipie}=loader
    // console.log(details);
    // console.log(recipie);
    return (
        <div>
            <ChefDetails data={details}></ChefDetails>
            <section >
                <p className='text-center text-3xl font-bold'>chef's recipes</p>
                <div className='flex flex-col'>
                    {
                        recipie.map(res=><RecipiesCard key={res._id} data={res}></RecipiesCard>)
                    }
                </div>
            </section>
        </div>
    );
};

export default Chef;