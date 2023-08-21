import React from "react";
import { IMAGE_LINK_CDN } from "../constant/config";
import "./RestroCard.css";

const RestroCard = ({ restrodetail }) => {
  return (
    <div className="card">
      <div>
        <img
          className="image-detail"
          src={IMAGE_LINK_CDN + restrodetail?.info?.cloudinaryImageId}
          alt="food-image"
        />
      </div>
      <div className="restrocard-text">
        <h3>{restrodetail?.info?.name}</h3>
        <div className="rating">
          <span>starImage</span>
          <span>{restrodetail?.info?.avgRating}</span>
        </div>
        <div>{restrodetail?.info?.cuisines}</div>
      </div>
    </div>
  );
};

export default RestroCard;
