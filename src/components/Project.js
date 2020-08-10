import React from 'react';
import ProjectData from '../utils/Projects.json';

export default function Project() {
  return (
    <div>
      {/* <img src={process.env.PUBLIC_URL + '/images/TriviaQuiz.png'} /> */}
      <img src={process.env.PUBLIC_URL + ProjectData[0].image} />
    </div>
  );
}
