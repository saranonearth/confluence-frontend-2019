import React, { useContext } from 'react';
import Store from '../../store/store';
import OauthLogin from '../utils/OauthLogin';
import HomeSwipe from '../utils/HomeSwipe';
const HomePage = () => {
  const { state, dispatch } = useContext(Store);
  console.log(state);
  return (
    <>
      <HomeSwipe />
    </>
  );
};

export default HomePage;
