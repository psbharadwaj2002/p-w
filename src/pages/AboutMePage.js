import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import FooterComponent from "../components/FooterComponent";
import AboutMePageComponent from "../components/AboutMePageComponent";
import Contact from "../components/Contact";
import AOS from "aos";
import "aos/dist/aos.css";

function AboutMePage() {
  useEffect(() => {
    window.scroll(0, 0);
    AOS.init({ duration: 2000 });
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
