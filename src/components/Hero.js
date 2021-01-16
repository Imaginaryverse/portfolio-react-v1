import React from 'react';
import '../styles/home.scss';
import copyKeys from '../utils/CopyService';
import icons from '../utils/Icons';
import IconFA from './IconFA';
import Text from './Text';

const Hero = () => {
  return (
    <div className="hero">
      <a href="#" className="hero-intro">
        <Text copyKey={copyKeys.HomeHeroIntro} />
      </a>
      <h1 className="hero-header">
        <Text copyKey={copyKeys.HomeHeroHeader} />
      </h1>
      <p className="hero-presentation">
        <Text copyKey={copyKeys.HomeHeroPresentation} />
      </p>
      <a href="#" className="hero-cta">
        <div className="hero-cta-arrow-container">
          <IconFA icon={icons.chevronRight} className="hero-cta-arrow" />
        </div>
        Projects
      </a>
    </div>
  );
};

export default Hero;
