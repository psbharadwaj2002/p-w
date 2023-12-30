import React from "react";
import Navbar from "../components/Navbar";
import FooterComponent from "../components/FooterComponent";
import IntroComponent from "../components/IntroComponent";
import AboutComopnent from "../components/AboutComopnent";

function Home() {
  return (
    <div>
      <Navbar />
      <IntroComponent />
      <AboutComopnent />
      <FooterComponent />
    </div>
  );
}

export default Home;
