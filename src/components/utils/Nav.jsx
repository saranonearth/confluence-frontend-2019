import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import OauthLogin from './OauthLogin';
import Store from '../../store/store';

const Nav = () => {
  const { state } = useContext(Store);
  const menuList = [
    {
      route: '/',
      nav: 'Home'
    },
    {
      route: '/aboutus',
      nav: 'About Us'
    },
    {
      route: '/categories',
      nav: 'Events'
    },
    {
      route: '/sponsors',
      nav: 'Sponsors'
    },
    {
      route: '/contact',
      nav: 'Team Confluence'
    },
    {
      route: '/developers',
      nav: 'Developers'
    }
  ];
  return (
    <>
      <div class='outer-menu'>
        <input class='checkbox-toggle' type='checkbox' />
        <div class='hamburger'>
          <div></div>
        </div>
        <div class='menu'>
          <div>
            <ul>
              {menuList.map((m, i) => (
                <li key={i}>
                  <Link data-text={m.nav} to={m.route}>
                    {m.nav}
                  </Link>
                </li>
              ))}
              {state.isAuth ? (
                <li>
                  {' '}
                  <Link to='/dashboard'>Dashboard</Link>
                </li>
              ) : null}
              <li className="login">
                <OauthLogin />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
