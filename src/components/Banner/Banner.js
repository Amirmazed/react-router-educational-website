import React from "react";
import { Link } from "react-router-dom";
import MenuBar from "../MenuBar/MenuBar";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-container ">
      <div className="">
        <div className="row d-flex banner align-items-center justify-content-center">
          <MenuBar></MenuBar>
          <div className="col-md-6">
            <h1 className="title">
              Be the wise learner 
            </h1>
            <p className="text-white text-center mt-3">
              this is a learning platform, where you can achieve your dreams
            </p>
          
            <Link to="/about" className="items">
                  <li>About us</li>
                </Link>
            
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
