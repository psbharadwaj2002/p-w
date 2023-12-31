import React from "react";
import Navbar from "../components/Navbar";
import FooterComponent from "../components/FooterComponent";
import AboutMePageComponent from "../components/AboutMePageComponent";

function AboutMePage() {
  return (
    <div>
      <Navbar />
      <AboutMePageComponent />
      <FooterComponent />
    </div>
  );
}

export default AboutMePage;
