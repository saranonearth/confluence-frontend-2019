import React, { useEffect, useState } from 'react';
import axios from 'axios';
const Events = props => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getEvents = async () => {
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
  const category = props.match.params.category;
  console.log(data);

  const Events = data && data.find(e => e.name === category);
  // console.log(Events);
  return (
    <div></div>
    // <div>{Events.events && Events.events.map((e, i) => <h1>e.name</h1>)}</div>
  );
};

export default Events;
