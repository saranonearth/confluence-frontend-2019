import React, { useContext, useEffect, useState, useRef } from 'react';
import Nav from '../utils/Nav';
import Store from '../../store/store';
import Tape from '../../tapei.png';
import Strip from '../../triangle.png';
// import OauthLogin from '../utils/OauthLogin';
const HomePage = () => {
  const { state, dispatch } = useContext(Store);
  console.log(state);
  return (
    <>
      <div className='main'>
        <div class='section-1'>
          <div className='home-content'>
            <img className='tapei' src={Tape} alt='tape' />

            <div className='heading-holder'>
              {/* <img className='strip' src={Strip} alt='triangle' /> */}
              <div>
                <h1 className='confluence' contenteditable spellcheck='false'>
                  Confluence19
                </h1>
              </div>
            </div>
          </div>
        </div>
        <Nav />
      </div>
    </>
  );
};

export default HomePage;
