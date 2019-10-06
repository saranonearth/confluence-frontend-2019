


import React, { useContext } from 'react';

import Nav from '../utils/Nav';
import Store from '../../store/store';
import OauthLogin from '../utils/OauthLogin';
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

      <div>
        <Nav />
      </div>
      <div>
        <OauthLogin />

       </div> 

      </div>

    </>
  );
};

export default HomePage;
