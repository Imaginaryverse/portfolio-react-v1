import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/layouts/home.scss';
import copyKeys from '../utils/CopyService';
import icons from '../utils/Icons';
import routes from '../utils/Routes';
import IconFA from './IconFA';
import Text, { textTypes } from './Text';

const Hero = () => {
  return (
    <div className="hero">
      <Link to={routes.about} className="hero-intro">
        <Text copyKey={copyKeys.HomeHeroIntro} />
      </Link>
      <Text
        type={textTypes.headerLarge}
        className="hero-header"
        copyKey={copyKeys.HomeHeroHeader}
      />
      <Text
        className="hero-presentation"
        copyKey={copyKeys.HomeHeroPresentation}
      />
      <Link to={routes.projects} className="hero-cta">
        <div className="hero-cta-arrow-container">
          <IconFA icon={icons.chevronRight} className="hero-cta-arrow" />
        </div>
        <Text copyKey={copyKeys.NavProjects} />
      </Link>
    </div>
  );
};

export default Hero;
