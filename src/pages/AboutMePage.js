import React from "react";
import Navbar from "../components/Navbar";
import FooterComponent from "../components/FooterComponent";
import AboutMePageComponent from "../components/AboutMePageComponent";
import Contact from "../components/Contact";

function AboutMePage() {
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
