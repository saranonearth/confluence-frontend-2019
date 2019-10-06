import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
const Nav = () => {
  const menuList = [	
    {	
      route: '/',	
      nav: 'Home'	
    },
    {	
      route: '/categories',	
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
      route: '/ask',	
      nav: 'Ask Queries'	
    }	
  ];
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
                    {menuList.map((m, i) => (	                
                      <li key={i}>	                
                        <Link data-text={m.nav} to={m.route}>{m.nav}</Link>	                
                      </li>	               
                    ))}
                </ul>
            </div>
        </div>
        </div>
    </>
  );
};

export default Nav;

