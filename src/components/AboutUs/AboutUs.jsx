import React from 'react';
import aboutUsText from "./AboutusText.png";
import frontScreen from "./frontScreen.png";
import Console from "./console.png";
import backGlow from "./pinkglow.png";
import './AboutUs.css';
const AboutUs = () => {
  return (
    <>
    <div className="about-container">
      <div className="console">
        <img className="aboutustext" src={aboutUsText} alt="aboutUsText" /> 
        <img className="aboutusscreen" src={frontScreen} alt="frontScreen" />
        <img className="console-pic" src={Console} alt="Console" />
        
        <img className="backglow" src={backGlow} alt="backGlow" />
      </div>
      <p class="aboutuscontent">
                            Photography is the art, application and practice  of 
                            creating durable images by recording light or other
                             electromagnetic radiation, either electronically by
                             means of an image sensor, or chemically by means of
                             a light-sensitive material such as photographic film.
                            It is employed in many fields of science, manufacturing
                            (e.g., photolithography), and business, as well as 
                            its more direct uses for art, film and video production,
                             recreational purposes, hobby, and mass communication.
      </p>
      
    </div>  
    </>
  );
};

export default AboutUs;
