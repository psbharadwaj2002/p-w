import React from "react";
import my_image from "../assests/my_image.png";

function AboutComopnent() {
  return (
    <div className="aboutComponent">
      <div>
        <img src={my_image} alt="my_image" />
        <div className="about_skill">
          <div className="about">
            <div className="title">
              ABOUT
              <div></div>
            </div>
            <div className="about_me_matter">
              <p>
                MERN stack developer with a passion for web development. Eager
                to learn, apply cutting-edge technologies, and contribute fresh
                perspectives to create innovative solutions. Bringing a strong
                work ethic to every project. Let's embark on this coding journey
                together!
              </p>
            </div>
          </div>
          <div className="skill">
            <div className="title">
              SKILLS
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutComopnent;
