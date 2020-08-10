import React from 'react';
import ProjectData from '../../utils/Projects.json';

export default function Project() {
  const imageStyle = {
    width: '90%',
    maxWidth: '300px',
  };

  return (
    <div className="container">
      {ProjectData.map((project) => (
        <div key={project.id} className="level columns project-div my-4">
          <div className="column is-3 is-centered">
            <h3 className="title is-4">{project.projectName}</h3>
            <img
              style={imageStyle}
              src={process.env.PUBLIC_URL + project.image}
              alt={project.projectName}
            />
          </div>
          <div className="column">
            <div className="columns">
              <div className="column is-7">
                <p className="white-font is-size-7-mobile">
                  {project.projectDescription}
                </p>
                <div className="columns">
                  <a
                    className="column is-6 mt-4"
                    href={project.deployedLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View the app
                  </a>
                  <a
                    className="column is-6 mt-4"
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
                    <li key={tool} className="is-size-7-mobile">
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
