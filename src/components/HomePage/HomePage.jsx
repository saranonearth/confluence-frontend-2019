import React, { useContext } from 'react';
import Store from '../../store/store';

const HomePage = () => {
  const { state, dispatch } = useContext(Store);
  console.log(state);
  return (
    <>
      <h1>Home</h1>
    </>
  );
};

export default HomePage;
