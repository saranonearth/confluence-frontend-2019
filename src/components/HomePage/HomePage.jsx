import React, { useContext } from 'react';
import Nav from '../utils/Nav';
import Store from '../../store/store';
// import OauthLogin from '../utils/OauthLogin';
const HomePage = () => {
  const { state, dispatch } = useContext(Store);
  console.log(state);
  return (
    <>
      <Nav />
    </>
  );
};

export default HomePage;
