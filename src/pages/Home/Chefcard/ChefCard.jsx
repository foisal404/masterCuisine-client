import React from 'react';

const ChefCard = ({data}) => {
    const {bio,likes,name,number_of_recipes,picture,recipes,years_experience}=data;
    
    return (
        <div className='border'>
            {name}
        </div>
    );
};

export default ChefCard;