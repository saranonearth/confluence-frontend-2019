import React from 'react';
import './dev.css';
const Developers = () => {
  return (
    <div className='bg'>
      <div className='card'>
        <div className='info'>
          <div className='name'>USER NAME</div>
          <div className='prof'>Designer</div>
          <div className='divider'></div>

          <div className='git-icon'>
            <i className='fa fa-github'></i>
          </div>
          <div className='photo'>
            <img className='image' src='pg3.jpg' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Developers;
