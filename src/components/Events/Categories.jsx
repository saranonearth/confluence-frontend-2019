import React, { useEffect, useState } from 'react';
import axios from 'axios';
import config from '../../config.json';
import Nav from '../utils/Nav';
const Categories = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getEvents = async () => {
      try {
        const res = await axios.get(`${config.BASE}/events/name/`);

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
                {/* <img className='tape' src={Tape} alt='tape' /> */}
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Categories;
