import React from "react";
import Navbar from "../components/Navbar";
import FooterComponent from "../components/FooterComponent";
import IntroComponent from "../components/IntroComponent";

function Home() {
  return (
    <div>
      <Navbar />
      <IntroComponent />
      <FooterComponent />
    </div>
  );
}

export default Home;
