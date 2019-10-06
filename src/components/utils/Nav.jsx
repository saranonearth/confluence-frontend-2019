import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
const Nav = () => {
<<<<<<< HEAD
  
  return (
    <>
      <div class="outer-menu">
        <input class="checkbox-toggle" type="checkbox" />
        <div class="hamburger">
            <div></div>
        </div>
        <div class="menu">
            <div>
                <ul>
                <li><a href="#" data-text="Home">Home</a></li>
                <li><a href="#" data-text="About us">About Us</a></li>
                <li><a href="#" data-text="Sponsors">Sponsors</a></li>
                <li><a href="#" data-text="Contact">Contact</a></li>
                <li><a href="#" data-text="Developers">Developers</a></li>
                </ul>
            </div>
        </div>
        </div>
    </>
=======
  useEffect(() => {
    const menu = document.querySelector('#toggle');
    const menuItems = document.querySelector('#overlay');
    const menuContainer = document.querySelector('.menu-container');
    const menuIcon = document.querySelector('i');

    function toggleMenu(e) {
      menuItems.classList.toggle('open');
      menuContainer.classList.toggle('full-menu');
      menuIcon.classList.toggle('fa-bars');
      menuIcon.classList.add('fa-times');
      e.preventDefault();
    }

    menu.addEventListener('click', toggleMenu, false);
  }, []);
  return (
    <div className='menu-holder'>
      <div class='menu-container' id='toggle'>
        <a href='#' class='menu'>
          <i class='fa fa-bars' aria-hidden='true'></i>
        </a>
      </div>
      <div class='overlay' id='overlay'>
        <nav class='overlay-menu'>
          <ul>
            <li>
              <Link className='m-item' to='/'>
                Home
              </Link>
            </li>
            <li>
              <Link className='m-item' to='/categories'>
                Events
              </Link>
            </li>
            <li>
              <Link className='m-item' to='/sponsors'>
                Sponsors
              </Link>
            </li>
            <li>
              <Link className='m-item' to='/contact'>
                Gallery
              </Link>
            </li>
            <li>
              <Link className='m-item' to='/contact'>
                Contact
              </Link>
            </li>
            <li>
              <Link className='m-item' to='/developers'>
                Developers
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
>>>>>>> 29af45869048bbd8c1db442f376c5e5591e0b29d
  );
};

export default Nav;
