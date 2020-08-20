import React from 'react';
import MyLinks from '../components/MyLinks/MyLinks';
import './Pages.css';

export default function About() {
  return (
    <section className="section pt-1 mb-6 about-me-section">
      <div className="container columns has-text-centered-mobile">
        <div className="column">
          <img
            src={process.env.PUBLIC_URL + '/assets/images/MyPicture.jpg'}
            alt="Me"
            width="300px"
            className="my-pic"
          />
        </div>
        <div className="column is-6">
          <p className="about-me is-size-5-desktop">
            My name is Kaleigh Spurio and I am excited to delve down a career
            path as a Full Stack Web Developer. I hold a Bachelor of Arts in
            Teaching, and a Masters of Education which have provided me with a
            solid background of collaboration and problem solving within the
            field of education, and consider myself a life long learner. I
            recently earned a certificate in Full Stack Web Development from the
            University of New Hampshire Coding Bootcamp, where I developed
            skills in JavaScript, HTML, CSS, Node.js, Express, MySQL, MongoDB,
            ReactJS and responsive website design.
            <br /> <br />
            Recognized for my excellent communication skills, quick learning and
            attention to detail, I work well both in and out of a collaborative
            team setting and have been a valued team member within all of my
            past professional environments. I’m passionate about creating web
            applications that provide a meaningful user experience and am very
            excited to leverage my skills in a fast-paced and collaborative
            team of developers.
          </p>
        </div>
      </div>
      <MyLinks />
    </section>
  );
}
