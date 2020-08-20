import React from 'react';
import ProjectData from '../../utils/Projects.json';
import './Project.css';

export default function Project() {

  return (
    <div className="container mb-6">
      {ProjectData.map((project) => (
        <div key={project.id} className="level columns project-div my-4">
          <div className="column is-3 is-centered">
            <h3 className="project-title">{project.projectName}</h3>
            <img
              src={process.env.PUBLIC_URL + project.image}
              alt={project.projectName}
              className="project-img"
            />
          </div>
          <div className="column">
            <div className="columns">
              <div className="column is-8">
                <p className="white-font is-size-7-mobile description">
                  {project.projectDescription}
                </p>
                <div className="columns is-centered">
                  <a
                    className="column mt-4 app-link"
                    href={project.deployedLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View the app
                  </a>
                  <a
                    className="column mt-4 app-link"
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View the repository
                  </a>
                </div>
              </div>
              <div className="column is-5">
                <dl>
                  {project.toolsUsed.map((tool) => (
                    <li key={tool} className="is-size-7-mobile tool-list has-text-centered-mobile">
                      {tool}
                    </li>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
