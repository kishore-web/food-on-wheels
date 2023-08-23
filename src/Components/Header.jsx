import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Header.css";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const cartitems = useSelector((store) => store.cart.items);
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <nav className="header-bar">
      <Link to="/">
        <div className="logo-div">
          <img src="../src/Assets/LogoNew.png" alt="Logo" />
          <h1>Food on Wheels</h1>
        </div>
      </Link>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="contactus">
          <li>ContactUs</li>
        </Link>
        <Link to="cartpage">
          <li>Cart-{cartitems.length}</li>
        </Link>
        <li>
          {
            isAuthenticated && <p>{user.name}</p> 
          }
        </li>
        <li>
          {isAuthenticated ? (
            <button
              className="Signin-btn"
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Sign Out
            </button>
          ) : (
            <button className="Signin-btn" onClick={() => loginWithRedirect()}>
              Sign In 
            </button>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Header;
