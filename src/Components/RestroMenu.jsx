import React from "react";
import { useDispatch } from "react-redux";
import { IMAGE_LINK_CDN } from "../constant/config";
import { addItem } from "../Redux/CartSlice";
import './RestroMenu.css'

const RestroMenu = ({ menu }) => {
  const dispatch = useDispatch();
  const addFoodItem = () => {
    dispatch(addItem(menu));
  };
  console.log(menu);
  return (
    <div className="menuItem-container">
      <div className="menuItem-desc">
        <h3>{menu?.card?.info?.name}</h3>
        <p>&#8377; {(menu?.card?.info?.price)/100}</p> 
        <p className="desc">{menu?.card?.info?.description}</p>
      </div>
      <div className="image-add">
        <div className="image-div">
          <img className="item-image" src={IMAGE_LINK_CDN + menu?.card?.info?.imageId} alt="" />
        </div>
        
        <button className="add-btn"
          onClick={() => {
            addFoodItem(menu);
          }}
        >
          Add cart
        </button>
      </div>
    </div>
  );
};

export default RestroMenu;
