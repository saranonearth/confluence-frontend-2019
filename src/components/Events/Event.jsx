import React, { useEffect, useState } from 'react';
import axios from 'axios';
const Event = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getEvent = async () => {
      try {
        const res = await axios.get(
          'http://confluence-backend.appspot.com/api/events/desc/'
        );

        setData([...res.data.data]);
      } catch (error) {
        console.log(error);
      }
    };
    getEvents();
  }, []);
  console.log(data);
  return <div>Event</div>;
};

export default Event;
