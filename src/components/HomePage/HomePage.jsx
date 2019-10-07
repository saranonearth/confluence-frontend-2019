import React, { useContext } from 'react';
import Disk from './discElements.png';
import ConfluText from './smalldisk.png';
import Theme from './homepagetheme.png';
import Nav from '../utils/Nav';
import AboutUs from '../AboutUs/AboutUs'
import Store from '../../store/store';

import './HomePage.css';
import { Redirect } from 'react-router-dom';

const HomePage = () => {
  const { state, dispatch } = useContext(Store);
  console.log(state);

  if (state.user && !state.user.onBoard) return <Redirect to='/onboard' />;
  return (
    <>
      <div className='main'>
        <div className='container'>
          <div class='home-container'>
            <div class='rotator'>
              <img id='disc' src={Disk} alt='disk' />
              <img id='conflutxt' src={ConfluText} alt='conflutxt' />
            </div>
            <img id='theme' src={Theme} alt='theme' />
          </div>
        </div>

        <div>
          <Nav />
        </div>
<<<<<<< HEAD
=======
        <div>
          <OauthLogin />
        </div>
        <div>
          <AboutUs />
          </div>
>>>>>>> about us added, dev and conact updated
      </div>
    </>
  );
};

export default HomePage;
