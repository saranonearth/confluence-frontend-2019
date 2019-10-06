import React, { useEffect, useState, useContext } from 'react';
import Store from '../../store/store';
import axios from 'axios';
import Nav from '../utils/Nav';
import config from '../../config.json';
const Onboard = props => {
  const { state } = useContext(Store);
  const event = props.match.params.event;
  const category = props.match.params.category;
  const [data, setData] = useState({
    college: '',
    contactNumber: '',
    year: ''
  });

  console.log(data);

  const onChange = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const onboard = async () => {
    const iconfig = {
      headers: {
        Authorization: state.token
      }
    };

    const body = JSON.stringify(data);
    try {
      const res = await axios.post(
        `${config.BASE}/user/event/?category=${category}&event=${event}`,
        body,
        config
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = e => {
    e.preventDefault();
    onboard();

    setData({
      ...data,
      college: '',
      contactNumber: '',
      year: ''
    });
  };
  return (
    <>
      <div className='category-container'>
        <div className='title-holder'>
          <h1 className='title'>Onboard</h1>

          <div className='form'>
            <form onSubmit={onSubmit}>
              <div className='form-item'>
                <label htmlFor='college'>College:</label>
                <br />
                <input onChange={onChange} type='text' name='college' />
              </div>
              <div className='form-item'>
                <label onChange={onChange} htmlFor='contactNumber'>
                  cContact Number:
                </label>
                <br />
                <input type='text' name='contactNumber' maxLength='10' />
              </div>
              <div className='form-item'>
                <label htmlFor='phone'>Phone No:</label>
                <br />
                <select onChange={onChange} name='year'>
                  <option value='1st'>1st</option>
                  <option value='2nd'>2nd</option>
                  <option value='3rd'>3d</option>
                  <option value='4th'>4th</option>
                </select>
              </div>
              <button type='submit'>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Onboard;
