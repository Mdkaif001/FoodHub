import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <div className="main-div">
        <div className="logo-div">
          <h1>
            <span>F</span>ood<span>H</span>ub
          </h1>
        </div>
        <div className={showMediaIcons ? "mobile" : "main-list"}>
          <ul className="list">
            <li>
              <NavLink to="/">Home</NavLink>  
               </li>
            <li>
            <NavLink to="/about">About</NavLink>
            </li>
            <li>
            <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
            <NavLink to="/service">Services</NavLink>
            </li>
          </ul>
        </div>
        <div className="icons">
          <ul className="icons-items">
            <li>
              <a href="#" className="facebook">
                <i className="fa-brands fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#" className="insta">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#" className="whatsapp">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </li>
          </ul>
        </div>
        {/* ham  */}
        <div className="hamburger">
          <i
            className="fa-solid fa-bars"
            onClick={() => {
              setShowMediaIcons(!showMediaIcons);
            
            }}
          ></i>
        </div>
      </div>
    </>
  );
};

export default NavBar;
