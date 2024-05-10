import React from "react";
import { Link } from "react-router-dom";

import image from "../../assests/nav-img.png";

import "./navBar.css";

export default function NavBar() {
  return (
    <div className="navBar">
      <div className="navImg">
        <img src={image} alt="" />
      </div>
      <div className="navButtons">
        <Link to={"/"}>
          <button className="homeButton">Home</button>
        </Link>
        <Link to={"/Login"}>
          <button className="loginButton">Login</button>
        </Link>
      </div>
    </div>
  );
}
