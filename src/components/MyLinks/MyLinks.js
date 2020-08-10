import React from 'react';
import './MyLinks.css';

export default function MyLinks() {
  return (
    <div className="mb-6 center">
      <p>Check me out!</p>
      <a
        href="https://www.linkedin.com/in/kaleigh-spurio-44348677/"
        target="_blank"
        rel="noopener noreferrer"
        className="mx-6 icon"
      >
        <figure>
          <i className="fab fa-linkedin fa-4x icon"></i>
          <figcaption className="caption">Linkedin</figcaption>
        </figure>
      </a>
      <a
        href="https://github.com/Kaleighspurio"
        target="_blank"
        rel="noopener noreferrer"
        className="mx-6 icon"
      >
        <figure>
          <i className="fab fa-github-square fa-4x icon"></i>
          <figcaption className="caption">Github</figcaption>
        </figure>
      </a>
      <a
        href={process.env.PUBLIC_URL + '/assets/KaleighSResume.pdf'}
        target="_blank"
        rel="noopener noreferrer"
        className="mx-6 icon"
      ><figure>
         <i className="fas fa-file fa-4x icon"></i>
        <figcaption className="caption">Resume</figcaption>
      </figure>
       
      </a>
    </div>
  );
}
