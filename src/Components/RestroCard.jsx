import React from "react";
import { IMAGE_LINK_CDN } from "../constant/config";
import "./RestroCard.css";
import { FaStar } from "react-icons/fa";

const RestroCard = ({ restrodetail }) => {
  const ratingVal = restrodetail?.info?.avgRating;
  const cuisineType = restrodetail?.info?.cuisines;
  // console.log(cuisineType)
  return (
    <div className="card">
      <div className="image-detail">
        <img
          src={IMAGE_LINK_CDN + restrodetail?.info?.cloudinaryImageId}
          alt="food-image"
        />
      </div>
      <div className="restrocard-description">
        <h3 className="restro-name">{restrodetail?.info?.name}</h3>
        <div className="rating">
          {/* <span className="rating-star">  </span> */}
          <span>
            {ratingVal > 4 ? (
              <FaStar className="rating-star-green" />
            ) : (
              <FaStar className="rating-star-red" />
            )}
          </span>
          <span>{ratingVal}</span>
        </div>
        <div className="restro-text">
           <div className="cuisine-type">{cuisineType.map(item=><span key={item}>{item},&nbsp;</span>)}</div>
           <div>{restrodetail?.info?.areaName}</div>
        </div>
       
      </div>
    </div>
  );
};

export default RestroCard;
