//Footer.js- site footer -----------------

import React from "react"

import './Footer.css';

export function Footer() {
//  console.log('FooterSite----------------------');
  window.location.hash = 'London_bgr';
  return (
    <footer className="footer_site">
      <hr />
      <p>Designed by Volodymyr Kokhanovskyi</p>
      <p>&nbsp;&#9993;&nbsp; doc.kokhanovskyi@gmail.com</p>
    </footer>
  )
}