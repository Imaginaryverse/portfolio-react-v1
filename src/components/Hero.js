import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/layouts/home.scss';
import '../styles/colors/themes.scss';
import copyKeys from '../utils/CopyService';
import icons from '../utils/Icons';
import routes from '../utils/Routes';
import IconFA from './IconFA';
import Text, { textTypes } from './Text';

const Hero = () => {
  return (
    <div className="hero">
      <Link to={routes.about} className="hero-intro acc-hov anim-fade-in">
        <Text copyKey={copyKeys.HomeHeroIntro} />
        <div className="hero-emoji">
          🧑🏻‍💻
          <span className="hero-emoji-question-one">?</span>
          <span className="hero-emoji-question-two">?</span>
          <span className="hero-emoji-aha">Aha!</span>
        </div>
      </Link>
      <Text
        type={textTypes.headerLarge}
        className="hero-header clr-text-primary anim-fade-in"
        copyKey={copyKeys.HomeHeroHeader}
      />
      <Text
        className="hero-presentation clr-text-primary anim-fade-in"
        copyKey={copyKeys.HomeHeroPresentation}
      />
      <Link to={routes.projects} className="hero-cta anim-fade-in">
        <div className="hero-cta-arrow-container">
          <IconFA icon={icons.chevronRight} className="hero-cta-arrow" />
        </div>
        <Text copyKey={copyKeys.NavProjects} />
      </Link>
    </div>
  );
};

export default Hero;
