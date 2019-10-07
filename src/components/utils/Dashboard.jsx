import React, { useContext, useEffect, useState } from 'react';
import Nav from './Nav';
import Store from '../../store/store';
import axios from 'axios';
import config from '../../config.json';
const Dashboard = () => {
  const [data, setData] = useState([]);
  const { state } = useContext(Store);

  useEffect(() => {
    const getRegEvents = async () => {
      try {
        const iconfig = {
          headers: {
            Authorization: state.token
          }
        };
        const res = await axios.get(`${config.BASE}/user/event/`, iconfig);

        console.log(res);
        setData([...res.data.data]);
      } catch (error) {
        console.log(error);
      }
    };

    getRegEvents();
  }, []);
  return (
    <div>
      <Nav />

      <div className='m-container'>
        <div className='title-holder'>
          <h1 className='title'>Dashboard</h1>
        </div>
        <div className='details'>
          <div className='proimg'>
            <img src={state.user.picture} alt='' />
          </div>
          <p>
            <span className='bold'>Name:</span>
            {' ' + state.user.name}
          </p>
          <p>
            <span className='bold'>Contact Number:</span>
            {' ' + state.user.contactNumber}
          </p>
          <p>
            <span className='bold'>Year:</span>
            {' ' + state.user.year}
          </p>
          <br />
          <h3>Events Registered</h3>
          <br />
          <div>
            {data.map((e, i) => (
              <div key={i}>
                <h3>{e.name}</h3>
                <br />
                <div>
                  {e.events.map((m, ind) => (
                    <div key={ind}>
                      <p>{m.name}</p> <br />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
