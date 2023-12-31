import React from "react";
import Navbar from "../components/Navbar";
import FooterComponent from "../components/FooterComponent";
import IntroComponent from "../components/IntroComponent";
import AboutComopnent from "../components/AboutComopnent";
import ProjectComponent from "../components/ProjectComponent";

function Home() {
  return (
    <div>
      <Navbar />
      <IntroComponent />
      <AboutComopnent />
      <ProjectComponent />
      <FooterComponent />
    </div>
  );
}

export default Home;
