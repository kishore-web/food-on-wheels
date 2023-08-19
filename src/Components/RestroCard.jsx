import React from "react";
import { IMAGE_LINK_CDN } from "../constant/config";
import "./RestroCard.css";

const RestroCard = ({ restrodetail }) => {
  return (
   
      <div className="card">
        <div>
          <img className="image-detail"
            src={IMAGE_LINK_CDN + restrodetail?.info?.cloudinaryImageId}
            alt="food-image"
          />
        </div>
        <h3>{restrodetail?.info?.name}</h3>
        <div>
          <span>starImage</span>Rating value
        </div>
        <div>Cuisines</div>
      </div>
  
  );
};

export default RestroCard;
