import React from 'react';
import Nav from '../utils/Nav';
const NotAuth = () => {
  return (
    <div>
      <Nav />

      <div className='category-container'>
        <div className='title-holder'></div>

        <div className='c-container'>
          <p className='text'>
            You are not loggedin. Please login from home page.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotAuth;
