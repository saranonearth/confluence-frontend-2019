import React from 'react';
import aboutUsText from "./AboutusText.png";
import frontScreen from "./frontScreen.png";
import Console from "./console.png";
import backGlow from "./pinkglow.png";
import './AboutUs.css';
const AboutUs = () => {
  return (
    <>
    <div className="about-container wd">
      <div className="console">
        <img className="aboutustext" src={aboutUsText} alt="aboutUsText" /> 
        <img className="aboutusscreen" src={frontScreen} alt="frontScreen" />
        <img className="console-pic" src={Console} alt="Console" />
        
        <img className="backglow" src={backGlow} alt="backGlow" />
      </div>
      <p class="aboutuscontent">
      Confluence, the annual cultural Festival of NIT Kurukshetra is a cultural extravaganza beyond words, beyond description. Confluence is the coming together of free spirits, like-minded zealous youth and a celebration of culture of true artistic genius. Its urge to deliver the maximum is what makes it one of the most awaited cultural festival.
      </p>
      
    </div>  
    </>
  );
};

export default AboutUs;
