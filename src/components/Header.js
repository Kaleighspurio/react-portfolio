import React from 'react';

export default function Header() {
  return (
    <section className="hero is-medium">
      <img
        src={process.env.PUBLIC_URL + './images/HeaderImage.jpg'}
        alt="Open laptop"
      />
    </section>
  );
}
