import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
const Nav = () => {
  var menu = useRef(null);
  useEffect(() => {
    menu = document.querySelector('#toggle');
    const menuItems = document.querySelector('#overlay');
    const menuContainer = document.querySelector('.menu-container');
    const menuIcon = document.querySelector('i');
    const tape = document.querySelector('.tape');
    const front = document.querySelector('.front');
    function toggleMenu(e) {
      tape.classList.toggle('hide');
      front.classList.toggle('hide');
      menuItems.classList.toggle('open');
      menuContainer.classList.toggle('full-menu');
      menuIcon.classList.toggle('fa-bars');
      menuIcon.classList.add('fa-times');
      e.preventDefault();
    }

    menu.addEventListener('click', toggleMenu, false);
  }, []);

  const menuList = [
    {
      route: '/',
      nav: 'Home'
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
      route: '/ask',
      nav: 'Ask Queries'
    }
  ];
  return (
    <>
      <div class='menu-container' id='toggle'>
        <a href='#' ref={menu} class='menu'>
          <i class='fa fa-bars' aria-hidden='true'></i>
        </a>
      </div>
      <div class='overlay' id='overlay'>
        <nav class='overlay-menu'>
          <ul>
            {menuList.map((m, i) => (
              <li key={i}>
                <Link to={m.route}>{m.nav}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Nav;
