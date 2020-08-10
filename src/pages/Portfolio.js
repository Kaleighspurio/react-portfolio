import React from 'react';
import Project from '../components/Project/Project';
import './Pages.css';

export default function Portfolio() {
    return (
    <div className="section">
        <h2 className="title is-4 project-title" id="project-title">Kaleigh's Projects</h2>
        <Project />
    </div>
    
    );
}