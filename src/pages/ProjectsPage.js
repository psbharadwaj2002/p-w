import React from "react";
import Navbar from "../components/Navbar";
import FooterComponent from "../components/FooterComponent";
import Contact from "../components/Contact";
import ProjectPageComponent from "../components/ProjectPageComponent";

function ProjectsPage() {
  return (
    <div>
      <Navbar />
      <ProjectPageComponent />
      <Contact />
      <FooterComponent />
    </div>
  );
}

export default ProjectsPage;
