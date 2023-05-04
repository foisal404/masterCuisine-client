import React from 'react';

const Service = ({data}) => {
    const {name,picture,details}=data
    return (
        <div className='text-center border-2 rounded'>
            <img className='w-full h-36' src={picture} alt="" />
            <h2 className='text-xl font-medium'>{name}</h2>
            <p>{details}</p>
        </div>
    );
};

export default Service;