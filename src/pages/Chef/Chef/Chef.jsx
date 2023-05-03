import React from 'react';
import ChefDetails from '../ChefDetails/ChefDetails';
import { useLoaderData } from 'react-router-dom';

const Chef = () => {
    const loader=useLoaderData();
    const {details,recipie}=loader
    // console.log(details);
    // console.log(recipie);
    return (
        <div>
            <ChefDetails data={details}></ChefDetails>
            {
                recipie.map(res=><p>{res._id}</p>)
            }
        </div>
    );
};

export default Chef;