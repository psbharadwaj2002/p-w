import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import FooterComponent from "../components/FooterComponent";
import AboutMePageComponent from "../components/AboutMePageComponent";
import Contact from "../components/Contact";

function AboutMePage() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div>
      <Navbar />
      <AboutMePageComponent />
      <Contact />
      <FooterComponent />
    </div>
  );
}

export default AboutMePage;
