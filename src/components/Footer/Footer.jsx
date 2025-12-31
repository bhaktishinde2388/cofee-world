import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Product Manager App</p>
      <p className="footer-sub">
        Built with React • All rights reserved
      </p>
    </footer>
  );
}

export default Footer;
