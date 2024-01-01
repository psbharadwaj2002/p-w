import React from "react";
import Navbar from "../components/Navbar";
import FooterComponent from "../components/FooterComponent";
import Contact from "../components/Contact";

function ProjectsPage() {
  return (
    <div>
      <Navbar />
      <p style={{ color: "white" }}>Projects Page</p>
      <Contact />
      <FooterComponent />
    </div>
  );
}

export default ProjectsPage;
