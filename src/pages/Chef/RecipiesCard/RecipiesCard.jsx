import React, { useState } from 'react';
import {  FaRegHeart, FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';

const RecipiesCard = ({data}) => {
    const [fav,setFav]=useState(true)
    const handlerFav=()=>{
        setFav(!fav)
    }
    const {
        _id,
        ingredients,
        name,
        rating,
        food_img,
        cooking_method
      } = data;
    return (
        <div className='p-4 mx-40 bg-slate-200 m-5 rounded'>
            <div className='flex justify-between gap-5'>
                <img className='h-44 w-44' src={food_img} alt="" />
                <div className='mb-auto'>
                    <p className='card-title text-orange-500'>{name}</p>
                    <p className='font-semibold text-yellow-500'>{cooking_method}</p>
                    <p > <span className='font-semibold text-green-600'>Ingredients :</span> {ingredients}</p>
                </div>
                <div className='flex flex-col justify-center'>
                    <p>
                        <Rating placeholderRating={rating}
                            emptySymbol={<FaRegStar/>}
                            placeholderSymbol={<FaStar/>}
                            fullSymbol={<FaStar/>}
                            readonly
                        />
                        {rating}</p>
                    <button className={`btn-error flex items-center w-full justify-center p-3 rounded ${fav?"":'btn-disabled'}`} onClick={handlerFav}><FaRegHeart className='mx-3'></FaRegHeart> Favorite</button>
                </div>
            </div>
        </div>
    );
};

export default RecipiesCard;