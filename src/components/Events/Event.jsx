import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Nav from '../utils/Nav';

const Event = props => {
  const event = props.match.params.event;
  const [data, setData] = useState(null);
  useEffect(() => {
    const getEvents = async () => {
      try {
        const res = await axios.get(
          `http://confluence-backend.appspot.com/api/events/desc/?event=${event}`
        );

        setData({ ...res.data.data });
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

      <div className='category-container desc'>
        <div className='title-holder'>
          <h1 className='title'>{event}</h1>
        </div>

        {data == null ? (
          <p>loading</p>
        ) : (
          <div className='description'>
            {data.prize == null ? null : <p>Prize : Rs.{data.prize}</p>}
            <br />
            <p>Venue : {data.venue}</p>
            <br />
            <p>Description : {data.description}</p> <br />
            <p>Rules:</p> <br />
            {data.rules == undefined ? (
              <p>loading</p>
            ) : (
              data.rules.length > 0 &&
              data.rules.map((e, i) => (
                <p key={i} className='rule'>
                  {i + 1}. {e}
                </p>
              ))
            )}
            <br />
            <p>Coordinators:</p> <br />
            {data.coordinators == undefined ? (
              <p>loading</p>
            ) : (
              data.coordinators.length > 0 &&
              data.coordinators.map((e, i) => (
                <p key={i} className='rule'>
                  {i + 1}. {e}
                </p>
              ))
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Event;
