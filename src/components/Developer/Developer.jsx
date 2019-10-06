import React, { Components } from 'react';
import './dev.css';

class Card extends React.Component {
  render() {
    return (
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
    );
  }
}

const Developer = () => {
  return (
    <>
      <div className='heading'>
        <img className='title' src='DevelopersText_1.svg' alt='' />
      </div>
      <div className='contain'>
        <div className='cards'>
          <Card />
        </div>
      </div>
    </>
  );
};

export default Developer;
