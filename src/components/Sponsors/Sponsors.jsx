import React from 'react';
import Nav from '../utils/Nav';
import { Link } from 'react-router-dom';
// import axios from 'axios';
// import config from '../../config.json';
import sponsorHeading from "./SponsorsFont.svg";
import './sponsors.css';
import title from "./bulb.jpg";
import online from "./online.jpg";
const Sponsors = () => {
  return (
    <>
    <div className="sponsor-container">
      <Nav />
        <img className="sponsor-head" src={sponsorHeading} alt="sponsorHeading" />
      
      <div className="sponsors-cont">
        <div className="title">
          <h1 className="title-head"> TITLE SPONSOR </h1>
          {/* card started for titlee sponsor */}
          <img className="title-img" src={title} alt="titleImg" />
          <h3 className="title-name"> TITLE NAME </h3>
        </div>
        <div className="online">
          <h1 className="online-head"> ONLINE PATNERS </h1>
          <div className="online-sponsors">
               {/* cards started for online patners */}
              {/* change link to ref link */}
              <Link to='./sponsors' >
                <div className="online-single">
                  <img className="online-img" src={online} alt="" />
                  <h2 className="online-name" > ONLINENAME </h2>
                </div>
              </Link>
          </div> 
        </div> 
      </div> 
    </div> 
      
    </>
  );
};

export default Sponsors;
