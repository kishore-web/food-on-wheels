import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const cartitems = useSelector((store) => store.cart.items);
  return (
    <nav className="header-bar">
      <div>logo here</div>
      <ul>
        <Link to="/">Home</Link>
        <Link to="contactus">
          <li>ContactUs</li>
        </Link>
        <Link to="cartpage">
          <li>Cart-{cartitems.length}</li>
        </Link>
        <Link to="signin">
          <li className="Signin-btn">Sign In</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Header;
