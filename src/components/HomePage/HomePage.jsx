import React, { useContext, useEffect, useState, useRef } from 'react';
import Store from '../../store/store';
 import OauthLogin from '../utils/OauthLogin';
import Nav from '../utils/Nav';
const HomePage = () => {
  const { state, dispatch } = useContext(Store);
  console.log(state);
  return (
    <>
      <div className='main'>
      <div className="container">
                <div class="contain">
                    <div class="rotator">
                        <img id="disc" src="discElements.png" alt="" />
                        <img id="conflutxt" src="smalldisk.png" alt="" />
                    </div>
                        <img id="theme" src="homepagetheme.png" alt="" />
                        
                        
                </div>
        </div>
        <Nav />
      </div>
      <div>
        <OauthLogin />
       </div> 
    </>
  );
};

export default HomePage;
