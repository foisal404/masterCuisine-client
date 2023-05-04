import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';

const Review = ({data}) => {
    const {id,name,rating,photo,comment}=data;
    return (
        <div className='text-center border-2 p-5 border-green-200'>
            <div>
                <img className='w-44 h-44 rounded-full mx-auto' src={photo} alt="" />
            </div>
            {name}
            <Rating placeholderRating={rating}
                            emptySymbol={<FaRegStar/>}
                            placeholderSymbol={<FaStar/>}
                            fullSymbol={<FaStar/>}
                            readonly
            />
            <p>{comment}</p>
        </div>
    );
};

export default Review;