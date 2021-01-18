import React from 'react';
import Text, { textTypes } from '../components/Text';
import copyKeys from '../utils/CopyService';

const Projects = () => {
  return (
    <div className="main-wrapper">
      <Text copyKey={copyKeys.NavProjects} type={textTypes.headerLarge} />

      <Text copyKey={copyKeys.GeneralComingSoon} type={textTypes.headerLarge} />
    </div>
  );
};

export default Projects;
