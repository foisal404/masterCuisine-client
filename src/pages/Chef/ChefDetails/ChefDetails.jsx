import React, { useEffect, useState } from 'react';

const ChefDetails = ({data}) => {
    const {
        bio,
        likes,
        name,
        number_of_recipes,
        picture,
        recipes,
        years_experience,
        _id
      } = data;
    return (
        <div>
            {/* top banner */}
            <div className='min-h-[83vh] p-5'>
                <div className="card card-side bg-base-100 shadow-xl my-5 p-5">
                    <figure><img className='h-80 w-72' src={picture} alt="Movie"/></figure>
                    <div className="card-body">
                        <h2 className="card-title">{name}</h2>
                        <p>{bio}...</p>
                        <p>Number of likes  -    {likes}</p>
                        <p>Number of recipies -  {number_of_recipes}</p>
                        <p>Years of exprience  - {years_experience}</p>
                        
                    </div>
                </div>
            </div>
            <div>
                
            </div>
        </div>
    );
};

export default ChefDetails;