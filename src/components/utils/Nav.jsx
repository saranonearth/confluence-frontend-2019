import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
const Nav = () => {
  
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
  );
};

export default Nav;
