import React from 'react';
import { Link } from 'react-router-dom';
import LanguageButton from './LanguageButton';
import Text from './Text';

const NavList = ({ navItems }) => {
  return (
    <ul className="nav-list">
      {navItems.map((item, i) => (
        <Link className="nav-list-link" key={i} to={item.path}>
          <li>
            <Text copyKey={item.title} style={{ fontSize: '1.2rem' }} />
          </li>
        </Link>
      ))}
      <LanguageButton />
    </ul>
  );
};

export default NavList;
