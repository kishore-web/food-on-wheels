import React from "react";
import { useParams } from "react-router-dom";
import useCustomHook from "../Utils/useCustomHook";
import "./RestroPage.css";
import { IMAGE_LINK_CDN } from "../constant/config";
import RestroMenu from "../Components/RestroMenu";


const RestroPage = () => {
  const { resid } = useParams();
  const specificRestro = useCustomHook(Number(resid));

  console.log(resid);
  console.log(specificRestro);
  const imageIdCloud = specificRestro?.data?.cards[0]?.card?.card?.info?.cloudinaryImageId;
  const recommendedMenu = specificRestro?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards
  console.log(recommendedMenu)
  return (
    <div className="restropage-container">
      {specificRestro ? (
        <div>
          <span>{specificRestro?.data?.cards[0]?.card?.card?.info?.name}</span>
          <img src={IMAGE_LINK_CDN + imageIdCloud} alt="restro image" />
          <span>
            {specificRestro?.data?.cards[0]?.card?.card?.info?.avgRating}
          </span>
          <div className="menu-card">
            {/* <h3>{dishName?.info?.name} </h3> */}
            {/* <img src={IMAGE_LINK_CDN + dishImageCloud} alt="dish image" /> */}
            {
              recommendedMenu.map((item)=>{
                return(
                  <RestroMenu menu= {item}  />
                )
              })
            }
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default RestroPage;
