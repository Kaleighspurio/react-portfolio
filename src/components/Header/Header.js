import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <section className="hero is-medium">
            <div className="tabs is-right is-large">
        <ul>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/portfolio">Projects</Link>
          </li>
        </ul>
      </div>
      <img
        src={process.env.PUBLIC_URL + './images/HeaderImage.jpg'}
        alt="Open laptop"
      />

    </section>
  );
}
