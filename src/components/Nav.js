import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import copyKeys from '../utils/CopyService';
import routes from '../utils/Routes';
import { useWindowDimensions } from '../utils/useWindowDimensions';
import NavList from './NavList';
import Text from './Text';
import Hamburger from './Hamburger';

import '../styles/nav.css';

export const Nav = () => {
  const [openBurger, setOpenBurger] = useState(false);
  const { width } = useWindowDimensions();

  const handleHamburger = () => {
    setOpenBurger(!openBurger);
  };

  const navItems = [
    { path: routes.projects, title: copyKeys.NavProjects },
    { path: routes.about, title: copyKeys.NavAbout },
    { path: routes.blog, title: copyKeys.NavBlog },
    { path: routes.contact, title: copyKeys.NavContact },
  ];

  return (
    <nav className="nav">
      <div className="nav-content-wrapper">
        <Link
          className="nav-list-link"
          to="/"
          onClick={() => {
            openBurger && handleHamburger();
          }}
        >
          <Text
            copyText="{AB}"
            style={{ fontSize: '1.9rem', fontWeight: '600' }}
          />
        </Link>

        {width > 768 ? (
          <NavList navItems={navItems} />
        ) : (
          <Hamburger
            navItems={navItems}
            handleClick={handleHamburger}
            active={openBurger}
          />
        )}
      </div>
    </nav>
  );
};
