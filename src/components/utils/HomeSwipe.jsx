import React, { useState } from 'react';

const HomeSwipe = () => {
  let [index, setIndex] = useState(0);
  const state = [
    {
      img:
        'https://tickera-wpsalad.netdna-ssl.com/wp-content/themes/tickera/style/img/freebies/icons/events/6.png',
      catName: 'CATEGORY 1'
    },
    {
      img:
        'https://tickera-wpsalad.netdna-ssl.com/wp-content/themes/tickera/style/img/freebies/icons/events/4.png',
      catName: 'CATEGORY 2'
    },
    {
      img:
        'https://tickera-wpsalad.netdna-ssl.com/wp-content/themes/tickera/style/img/freebies/icons/events/7.png',
      catName: 'CATEGORY 3'
    }
  ];

  const leftClick = () => {
    if (index < 0) {
      console.log('yay', state.length);
      setIndex(state.length);
    } else {
      setIndex(index - 1);
    }
  };
  if (state.length == index) {
    setIndex(0);
  }
  const rightClick = () => {
    if (index > state.length) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };
  return (
    <>
      <div className='bg'>
        <div className='swipe-container'>
          <div onClick={leftClick} className='left-button'>
            <i className='fas fa-arrow-left fa-2x'></i>
          </div>
          <div className='swipe-contnet'>
            <div className='main-content'>
              <img
                src={
                  state[index] == undefined ? state[0].img : state[index].img
                }
                alt='img'
              />
            </div>

            <div>
              <p className='cat-Name'>
                {state[index] == undefined
                  ? state[0].catName
                  : state[index].catName}
              </p>
              <p style={{ color: 'black' }}>CONFILENCE 2019</p>
            </div>

            <div>
              <div className='showEvent-button'>
                <p>Show Events</p>
              </div>
            </div>
          </div>
          <div onClick={rightClick} className='right-button'>
            <i className='fas fa-arrow-right fa-2x'></i>
          </div>
        </div>
        <div className='bar'></div>
      </div>
    </>
  );
};

export default HomeSwipe;
