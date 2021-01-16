import React from 'react';
import { Link } from 'react-router-dom';
import LanguageButton from './LanguageButton';
import Text from './Text';
import ThemeButton from './ThemeButton';

const Hamburger = ({ navItems, handleClick, active }) => {
  return (
    <>
      <div
        onClick={handleClick}
        className={`hamburger-btn ${active ? 'active-hamburger' : null}`}
      >
        <div
          className={`hamburger-bar bar-top ${active ? 'active-top' : null}`}
        ></div>
        <div
          className={`hamburger-bar bar-mid ${active ? 'active-mid' : null}`}
        ></div>
        <div
          className={`hamburger-bar bar-bottom ${
            active ? 'active-bottom' : null
          }`}
        ></div>
      </div>

      {active && (
        <div className="hamburger-wrapper clr-bg-primary">
          <ul className="hamburger-content clr-bg-primary">
            {navItems.map((item, i) => (
              <Link
                className="nav-list-link hamburger-link"
                key={i}
                to={item.path}
                onClick={handleClick}
              >
                <li>
                  <Text
                    className="nav-list-text clr-text-primary"
                    copyKey={item.title}
                    style={{ fontSize: '1.5rem', fontWeight: 'normal' }}
                  />
                </li>
              </Link>
            ))}
            <LanguageButton className="nav-opt-btn-hamburger" />
            <ThemeButton className="nav-opt-btn-hamburger" />
          </ul>
        </div>
      )}
    </>
  );
};

export default Hamburger;
