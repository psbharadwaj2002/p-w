import React from "react";
import cryptoSharingDapp from "../assests/cryptoSharingDapp.webp";
import notesApp from "../assests/desktopNotesApp.png";
import shopEase from "../assests/shopEase.png";
import { Link } from "react-router-dom";

function ProjectComponent() {
  return (
    <div className="projectComponent">
      <div>
        <div className="title">
          PORTFOLIO
          <div></div>
        </div>
        <div className="projects">
          <div className="project">
            <img src={cryptoSharingDapp} alt="project_image" />
            <p className="title">Crypto Sharing DApp</p>
            <p></p>
          </div>
          <div className="project">
            <img src={shopEase} alt="project_image" />
            <p className="title">shopEase</p>
            <p></p>
          </div>
          <div className="project">
            <img src={notesApp} alt="project_image" />
            <p className="title">Desktop Notes App</p>
            <p></p>
          </div>
        </div>
      </div>
      <Link
        to="/projects"
        style={{ textDecoration: "none", color: "grey", fontSize: 12 }}
      >
        Click here to view more projects and their details
      </Link>
    </div>
  );
}

export default ProjectComponent;
