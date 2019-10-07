import React, { useEffect, useState } from 'react';
import axios from 'axios';
import config from '../../config.json';
import Nav from '../utils/Nav';
import { List } from '../EventImg';
import { Link } from 'react-router-dom';
const Categories = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
    const getEvents = async () => {
      try {
        const res = await axios.get(`${config.BASE}/category/`);

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
      {' '}
      <Nav />
      <div className='m-container'>
        <div className='title-holder'>
          <h1 className='title'>Categories</h1>
        </div>

        <div className='content'>
          {List.map((e, i) => (
            <Link to={`/categories/${e.eventName}`}>
              <img className='catImg' src={e.img} alt={e.eventName} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Categories;
