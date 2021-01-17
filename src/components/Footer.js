import React from 'react';
import '../styles/layouts/footer.scss';
import LanguageButton from './LanguageButton';
import ThemeButton from './ThemeButton';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-bottom">
        <section className="grid-section cell-1">
          <p>© 2020-2021</p>
          <p>Anton Bertilsson</p>
        </section>
        <section className="grid-section cell-2">
          <p>GitHub</p>
          <p>Codepen</p>
          <p>LinkedIn</p>
        </section>
        <section className="grid-section cell-3">
          <p>HOME</p>
          <p>PROJECTS</p>
          <p>ABOUT ME</p>
          <p>BLOG</p>
          <p>CONTACT</p>
        </section>
      </div>
      <div className="footer-top">
        <div className="theme-container">
          Theme: <ThemeButton />
        </div>
        <div className="lang-container">
          Language: <LanguageButton />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
