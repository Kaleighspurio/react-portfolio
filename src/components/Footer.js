import React from 'react';

export default function Footer() {
    const footerStyle = {
        position: "fixed",
        width: "100%",
        bottom: 0,
        overflow: "hidden",
    }

    return (
        <footer className="is-size-7-mobile" style={footerStyle} >
        <div className="has-text-centered mt-3">
          <p className="mt-0">Kaleigh Spurio</p>
          <a className="white-font" href="mailto:kaleighastell@gmail.com"
            >kaleighastell@gmail.com</a
          >
          <p className="mb-3">(603)770-7841</p>
        </div>
      </footer>
    );
}