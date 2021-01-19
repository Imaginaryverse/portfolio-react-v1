import React from 'react';
import Text, { textTypes } from '../components/Text';
import copyKeys from '../utils/CopyService';
import '../styles/layouts/projects.scss';

const Projects = () => {
  return (
    <div className="main-wrapper">
      <Text copyKey={copyKeys.NavProjects} type={textTypes.headerLarge} />

      <div className="projects">
        <ul className="projects-list">
          <li className="projects-items">
            <div className="project-container">
              <a
                className="project-link"
                href="https://github.com/Imaginaryverse/portfolio-react-v1"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="project-thumbnail"
                  src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
                  alt="developer icon"
                />
                <div className="project-info-container">
                  <Text
                    type={textTypes.headerNormal}
                    className="project-title"
                    copyKey={copyKeys.ProjectsPortfolioTitle}
                  />
                  <Text
                    type={textTypes.paragraph}
                    className="project-description"
                    copyKey={copyKeys.ProjectsPortfolioDesc}
                  />
                  <Text
                    type={textTypes.paragraph}
                    className="project-description"
                    copyKey={copyKeys.ProjectsSourceCode}
                  />
                </div>
              </a>
            </div>
          </li>
          <li className="projects-items">
            <div className="project-container">
              <div className="project-link">
                <img
                  className="project-thumbnail"
                  src="https://images.unsplash.com/photo-1523474438810-b04a2480633c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1500&q=80"
                  alt="developer icon"
                />
                <div className="project-info-container">
                  <Text
                    type={textTypes.headerNormal}
                    className="project-title"
                    copyKey={copyKeys.ProjectsChatAppTitle}
                  />
                  <Text
                    type={textTypes.paragraph}
                    className="project-description"
                    copyKey={copyKeys.GeneralWIP}
                  />
                </div>
              </div>
            </div>
          </li>
          <li className="projects-items">
            <div className="project-container">
              <div className="project-link">
                <img
                  className="project-thumbnail"
                  src="https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1500&q=80"
                  alt="developer icon"
                />
                <div className="project-info-container">
                  <Text
                    type={textTypes.headerNormal}
                    className="project-title"
                    copyKey={copyKeys.ProjectsPaletteGeneratorTitle}
                  />
                  <Text
                    type={textTypes.paragraph}
                    className="project-description"
                    copyKey={copyKeys.GeneralWIP}
                  />
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Projects;
