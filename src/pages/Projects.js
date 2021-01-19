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
              <a href="/" className="project-link">
                <img
                  className="project-thumbnail"
                  src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
                  alt="developer icon"
                />
                <div className="project-info-container">
                  <h2>Portfolio site</h2>
                  <p className="project-description">
                    Click here to visit the Github repository.
                  </p>
                </div>
              </a>
            </div>
          </li>
          <li className="projects-items">
            <div className="project-container">
              <a href="/" className="project-link">
                <img
                  className="project-thumbnail"
                  src="https://images.unsplash.com/photo-1600021781227-c918dc05ab79?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1533&q=80"
                  alt="developer icon"
                />
                <div className="project-info-container">
                  <h2>Chat App</h2>
                  <p className="project-description">Work in progress...</p>
                </div>
              </a>
            </div>
          </li>
          <li className="projects-items">
            <div className="project-container">
              <a href="/" className="project-link">
                <img
                  className="project-thumbnail"
                  src="https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1500&q=80"
                  alt="developer icon"
                />
                <div className="project-info-container">
                  <h2>Palette Generator</h2>
                  <p className="project-description">Work in progress...</p>
                </div>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Projects;
