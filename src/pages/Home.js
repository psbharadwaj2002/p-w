import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import FooterComponent from "../components/FooterComponent";
import IntroComponent from "../components/IntroComponent";
import AboutComopnent from "../components/AboutComopnent";
import ProjectComponent from "../components/ProjectComponent";
import Contact from "../components/Contact";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    window.scroll(0, 0);
    AOS.init({ duration: 3000 });
  }, []);
  return (
    <div>
      <Navbar />
      <div data-aos="fade-in">
        <IntroComponent />
      </div>
      <div data-aos="zoom-in">
        <AboutComopnent />
      </div>
      <div data-aos="zoom-in">
        <ProjectComponent />
      </div>
      <Contact />
      <div>
        <FooterComponent />
      </div>
    </div>
  );
}

export default Home;
