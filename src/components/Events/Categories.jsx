import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Nav from '../utils/Nav';
import Tape from '../../tape1.png';
import Cassete from '../utils/Cassete';
const Categories = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getEvents = async () => {
      try {
        const res = await axios.get(
          'http://confluence-backend.appspot.com/api/events/name/'
        );

        setData([...res.data.data]);
      } catch (error) {
        console.log(error);
      }
    };
    getEvents();
  }, []);
  console.log(data);
  return (
    <>
      <Nav />

      <div className='category-container'>
        <div className='title-holder'>
          <h1 className='title'>Categories</h1>
        </div>

        <div className='content'>
          {data.length == 0 ? (
            <p>loading</p>
          ) : (
            data.map(e => (
              <div className='cat-div'>
                <img className='tape' src={Tape} alt='tape' />
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Categories;
