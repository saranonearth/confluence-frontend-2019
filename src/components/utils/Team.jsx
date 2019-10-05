import React from 'react';
import './team.css';
const Team = () => {
  return (
    <div>
      <div className='card'>
        <div className='image'>
          <img src='pg3.jpg' />
        </div>
        <div className='top'>
          <div>
            <h1>USER NAME</h1>
            <h2>President</h2>
          </div>
        </div>
        <div className='bottom'>
          <div>
            <h3>Contact No- 1234567890</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
