import React from "react";
import { useDispatch } from "react-redux";
import { IMAGE_LINK_CDN } from "../constant/config";
import { addItem } from "../Redux/CartSlice";

const RestroMenu = ({ menu}) => {
  const dispatch = useDispatch()
  const addFoodItem = ( ) =>{
      dispatch(addItem(menu))
  }

  console.log(menu);
  return (
    <div style={{border:"1px solid green"}} >
      <h3>{menu?.card?.info?.name}</h3>

      <img src={IMAGE_LINK_CDN + menu?.card?.info?.imageId} alt="" />
      <button onClick={()=>{addFoodItem(menu)}}>Add cart</button>
    </div>
  );
};

export default RestroMenu;
