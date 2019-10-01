import React, { useEffect, useState } from 'react';
import axios from 'axios';
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
      <h1>Categories</h1>
    </>
  );
};
