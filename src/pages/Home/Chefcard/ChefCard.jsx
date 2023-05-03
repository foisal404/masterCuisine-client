import React from "react";import { FaRegThumbsUp } from "react-icons/fa";
import { Link } from "react-router-dom";
const ChefCard = ({ data }) => {
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
    <div className="">
      <div className="card w-96 mx-auto my-8 bg-base-100 shadow-xl">
        <figure>
          <img
            src={picture}
            className="h-80 w-full"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>Exprience: {years_experience} years</p>
            <p>Number of recipes {number_of_recipes} </p>
            <div className="flex">
                <FaRegThumbsUp></FaRegThumbsUp>
                <p>{likes} </p>
            </div>
            <div className="card-actions">
                <button className="btn btn-error"><Link to={`/chef/${_id}`}>View Recipes</Link></button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
