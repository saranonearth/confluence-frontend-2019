import React, { useContext, useEffect, useState, useRef } from 'react';
import Store from '../../store/store';
// import OauthLogin from '../utils/OauthLogin';
import Nav from '../utils/Nav';
const HomePage = () => {
  const { state, dispatch } = useContext(Store);
  console.log(state);
  return (
    <>
      <div class='container'>
        <Nav />
      </div>
    </>
  );
};

export default HomePage;
