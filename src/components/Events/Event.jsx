import React, { useEffect, useState, useContext } from 'react';
import Store from '../../store/store';
import axios from 'axios';
import Nav from '../utils/Nav';
import config from '../../config.json';
const Event = props => {
  const { state } = useContext(Store);
  const event = props.match.params.event;
  const category = props.match.params.category;
  const [data, setData] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0);
    const getEvents = async () => {
      try {
        const res = await axios.get(
          `${config.BASE}/events/desc/?event=${event}`
        );

        setData({ ...res.data.data });
      } catch (error) {
        console.log(error);
      }
    };
    getEvents();
  }, []);
  console.log(data);

  const register = async () => {
    console.log(state.token);
    console.log(category, event);
    try {
      const res = await axios.put(
        `http://confluence-backend.appspot.com/api/user/event/?category=Arts&event=ABSTRACT PAINTING`,
        {
          Authorization: state.token
        }
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Nav />

      <div className='category-container desc'>
        <div className='title-holder'>
          <h1 className='title'>{event}</h1>
        </div>

        {data == null ? (
          <p className='loading'>Loading</p>
        ) : (
          <div className='description'>
            <p className='register' onClick={register}>
              Register
            </p>
            <p>Description : {data.description}</p> <br />
            <p>Venue : {data.venue}</p>
            {data.prize == null ? null : <p>Prize : Rs.{data.prize}</p>}
            <br />
            <br />
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
