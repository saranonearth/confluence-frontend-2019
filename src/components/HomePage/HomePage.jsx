import React, { useContext } from 'react';
import Store from '../../store/store';
import OauthLogin from '../utils/OauthLogin';
const HomePage = () => {
  const { state, dispatch } = useContext(Store);
  console.log(state);
  return (
    <>
      <h1>Home</h1>
      <OauthLogin />
    </>
  );
};

export default HomePage;
