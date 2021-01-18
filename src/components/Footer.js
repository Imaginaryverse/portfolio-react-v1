import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/layouts/footer.scss';
import copyKeys from '../utils/CopyService';
import routes from '../utils/Routes';
import LanguageButton from './LanguageButton';
import Text from './Text';
import ThemeButton from './ThemeButton';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-bottom">
        <section className="grid-section cell-1">
          <p>© 2020-2021</p>
          <Link to={routes.home}>
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
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://codepen.io/imaginaryverse"
            className="footer-link clr-text-primary"
            target="_blank"
            rel="noreferrer"
          >
            Codepen
          </a>
          <a
            href="https://www.linkedin.com/in/anton-bertilsson-3ab1ba66/"
            className="footer-link clr-text-primary"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </section>
        <section className="grid-section cell-3">
          <Link to={routes.home}>
            <Text
              copyKey={copyKeys.NavHome}
              className="footer-link clr-text-primary"
            />
          </Link>
          <Link to={routes.projects}>
            <Text
              copyKey={copyKeys.NavProjects}
              className="footer-link clr-text-primary"
            />
          </Link>
          <Link to={routes.about}>
            <Text
              copyKey={copyKeys.NavAbout}
              className="footer-link clr-text-primary"
            />
          </Link>
          <Link to={routes.blog}>
            <Text
              copyKey={copyKeys.NavBlog}
              className="footer-link clr-text-primary"
            />
          </Link>
          <Link to={routes.contact}>
            <Text
              copyKey={copyKeys.NavContact}
              className="footer-link clr-text-primary"
            />
          </Link>
        </section>
      </div>

      <div className="footer-top">
        <div className="theme-container">
          <Text copyKey={copyKeys.FooterTheme} /> <ThemeButton />
        </div>
        <div className="lang-container">
          <Text copyKey={copyKeys.FooterLanguage} /> <LanguageButton />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
