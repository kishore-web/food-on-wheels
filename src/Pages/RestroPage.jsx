import React from "react";
import { useParams } from "react-router-dom";
import useCustomHook from "../Utils/useCustomHook";
import "./RestroPage.css";
import { IMAGE_LINK_CDN } from "../constant/config";
import RestroMenu from "../Components/RestroMenu";

const RestroPage = () => {
  const { resid } = useParams();
  const specificRestro = useCustomHook(Number(resid));
  const specificRestroLink = specificRestro?.data?.cards[0]?.card?.card?.info;
  console.log(resid);
  console.log(specificRestro);
  const imageIdCloud = specificRestroLink?.cloudinaryImageId;
  const recommendedMenu =
    specificRestro?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
      ?.card?.card?.itemCards;
  console.log(recommendedMenu);
  const cuisineType = specificRestroLink?.cuisines
  console.log(cuisineType)
  return (
    <div className="restropage-container">
      {specificRestro ? (
        <div>
          <div className="restroPage-header-main">
            <div className="restroPage-header">
              <div className="restro-image">
                <img src={IMAGE_LINK_CDN + imageIdCloud} alt="restro image" />
              </div>
              <div className="restro-desc">
                <span>
                  {specificRestroLink?.name}, {specificRestroLink.city}
                </span>
                <span>
                  {specificRestroLink?.avgRating} /
                  {specificRestroLink.totalRatingsString}
                </span>
                <p>{cuisineType.map((item,index)=><span key={index} >{item}</span>)}</p>
                <p>
                  Avg Cost:&nbsp; {specificRestroLink.costForTwoMessage}
                </p>
              </div>
            </div>
          </div>

          <div className="menu-card">
            {recommendedMenu.map((item,index) => {
              return <RestroMenu menu={item} key={index} />;
            })}
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default RestroPage;
