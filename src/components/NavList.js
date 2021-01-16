import React from 'react';
import { Link } from 'react-router-dom';
import LanguageButton from './LanguageButton';
import Text from './Text';
import ThemeButton from './ThemeButton';

const NavList = ({ navItems }) => {
  return (
    <>
      <ul className="nav-list">
        {navItems.map((item, i) => (
          <Link className="nav-list-link" key={i} to={item.path}>
            <li>
              <Text
                className="nav-list-text"
                copyKey={item.title}
                style={{ fontSize: '1.2rem' }}
              />
            </li>
          </Link>
        ))}
      </ul>
      <div className="nav-site-options">
        <ThemeButton />
        <LanguageButton />
      </div>
    </>
  );
};

export default NavList;
