import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/layouts/footer.scss';
import copyKeys from '../utils/CopyService';
import LanguageButton from './LanguageButton';
import Text from './Text';
import ThemeButton from './ThemeButton';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-bottom">
        <section className="grid-section cell-1">
          <p>© 2020-2021</p>
          <Link to="/">
            <Text
              copyKey={'Anton Bertilsson'}
              className="footer-link clr-text-primary"
            />
          </Link>
        </section>
        <section className="grid-section cell-2">
          <a
            href="https://github.com/Imaginaryverse"
            className="footer-link clr-text-primary"
            target="_blank"
          >
            GitHub
          </a>
          <a
            href="https://codepen.io/imaginaryverse"
            className="footer-link clr-text-primary"
            target="_blank"
          >
            Codepen
          </a>
          <a
            href="https://www.linkedin.com/in/anton-bertilsson-3ab1ba66/"
            className="footer-link clr-text-primary"
            target="_blank"
          >
            LinkedIn
          </a>
        </section>
        <section className="grid-section cell-3">
          <Link to="/">
            <Text
              copyKey={copyKeys.NavHome}
              className="footer-link clr-text-primary"
            />
          </Link>
          <Link to="/projects">
            <Text
              copyKey={copyKeys.NavProjects}
              className="footer-link clr-text-primary"
            />
          </Link>
          <Link to="/about">
            <Text
              copyKey={copyKeys.NavAbout}
              className="footer-link clr-text-primary"
            />
          </Link>
          <Link to="/blog">
            <Text
              copyKey={copyKeys.NavBlog}
              className="footer-link clr-text-primary"
            />
          </Link>
          <Link to="/projects">
            <Text
              copyKey={copyKeys.NavContact}
              className="footer-link clr-text-primary"
            />
          </Link>
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
