import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import FooterComponent from "../components/FooterComponent";
import IntroComponent from "../components/IntroComponent";
import AboutComopnent from "../components/AboutComopnent";
import ProjectComponent from "../components/ProjectComponent";
import Contact from "../components/Contact";

function Home() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div>
      <Navbar />
      <IntroComponent />
      <AboutComopnent />
      <ProjectComponent />
      <Contact />
      <FooterComponent />
    </div>
  );
}

export default Home;
