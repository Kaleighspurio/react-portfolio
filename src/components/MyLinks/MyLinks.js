import React from 'react';
import "./MyLinks.css";

export default function MyLinks() {
  return (
    <div className="my-6">
      <a
        href="https://github.com/Kaleighspurio"
        target="_blank"
        rel="noopener noreferrer"
        className="mx-4"
      >
        <i className="fab fa-linkedin fa-4x icon"></i>
      </a>
      <a
        href="https://github.com/Kaleighspurio"
        target="_blank"
        rel="noopener noreferrer"
        className="mx-4"
      >
        <i className="fab fa-github-square fa-4x icon"></i>
      </a>
      <a
        href="https://github.com/Kaleighspurio"
        target="_blank"
        rel="noopener noreferrer"
        className="mx-4 mb-6"
      >
        <i className="fas fa-file fa-4x icon"></i>
      </a>
    </div>
  );
}
