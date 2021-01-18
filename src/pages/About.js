import React from 'react';
import Text, { textTypes } from '../components/Text';
import copyKeys from '../utils/CopyService';
import '../styles/layouts/about.scss';
import lovem1 from '../assets/lovem1.jpg';
import aboutImg2 from '../assets/aboutImg2.jpg';
import { Link } from 'react-router-dom';
import IconFA from '../components/IconFA';
import icons from '../utils/Icons';

const About = () => {
  return (
    <div className="main-wrapper">
      <div className="about-content">
        <div className="about-body">
          <div className="about-body-cell">
            <Text
              type={textTypes.headerLarge}
              className="about-header clr-text-primary"
              copyKey={copyKeys.AboutHeaderAbout}
            />
            <img src={lovem1} alt="Anton" className="about-img" />
            <Text className="about-paragraph" copyKey={copyKeys.AboutParaOne} />
            <Text className="about-paragraph" copyKey={copyKeys.AboutParaTwo} />
          </div>

          <div className="about-body-cell">
            <Text
              type={textTypes.headerLarge}
              className="about-header clr-text-primary"
              copyKey={copyKeys.AboutHeaderStrengths}
            />
            <Text
              className="about-paragraph"
              copyKey={copyKeys.AboutParaThree}
            />
            <Text
              className="about-paragraph"
              copyKey={copyKeys.AboutParaFour}
            />
          </div>

          <div className="about-body-cell">
            <Text
              type={textTypes.headerLarge}
              className="about-header clr-text-primary"
              copyKey={copyKeys.AboutHeaderInterests}
            />
            <img src={aboutImg2} alt="Anton" className="about-img" />
            <Text
              className="about-paragraph"
              copyKey={copyKeys.AboutParaFive}
            />
            <Text className="about-paragraph" copyKey={copyKeys.AboutParaSix} />
          </div>
        </div>
        <Link to="/contact" className="about-cta">
          <div className="about-cta-arrow-container">
            <IconFA icon={icons.chevronRight} className="about-cta-arrow" />
          </div>
          <Text copyKey={copyKeys.NavContact} />
        </Link>
      </div>
    </div>
  );
};

export default About;
