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
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <Navbar />
      <div data-aos="fade-up">
        <IntroComponent />
      </div>
      <AboutComopnent />
      <div data-aos="zoom-in">
        <ProjectComponent />
      </div>
      <Contact />
      <FooterComponent />
    </div>
  );
}

export default Home;
