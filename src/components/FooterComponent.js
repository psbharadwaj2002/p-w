import React from "react";
import { Link } from "react-router-dom";

function FooterComponent() {
  return (
    <div className="footer">
      <div className="links">
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          HOME
        </Link>
        <Link to="/aboutMe" style={{ textDecoration: "none", color: "black" }}>
          ABOUT
        </Link>
        <Link to="/projects" style={{ textDecoration: "none", color: "black" }}>
          PROJECTS
        </Link>
        <Link style={{ textDecoration: "none", color: "black" }}>RESUME</Link>
        <Link to="/contact" style={{ textDecoration: "none", color: "black" }}>
          CONTACT
        </Link>
      </div>
      <div>
        <h3>Srinivasa Bharadwaj Peddinti</h3>
      </div>
      <div>
        <p>Copyright by Srinivasa Bharadwaj Peddinti 2023</p>
      </div>
    </div>
  );
}

export default FooterComponent;
