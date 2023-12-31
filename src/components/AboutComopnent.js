import React from "react";
import my_image from "../assests/my_image.png";
import { Link } from "react-router-dom";

function AboutComopnent() {
  return (
    <div className="aboutComponent">
      <div className="container">
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
                work ethic to every project.
              </p>
            </div>
            <Link
              to="aboutMe"
              style={{ textDecoration: "none", color: "#5aea44", fontSize: 12 }}
            >
              Click here to know more about me
            </Link>
          </div>
          <div className="skill">
            <div className="title">
              SKILLS
              <div></div>
            </div>
            <div className="skills">
              <ul>
                <li>MERN Stack</li>
                <li>Redux</li>
                <li>Python</li>
                <li>MySQL</li>
                <li>DSA</li>
                <li>OOPS</li>
              </ul>
              <ul>
                <li>REST API's</li>
                <li>System Design</li>
                <li>Linux</li>
                <li>Git</li>
                <li>GitHub</li>
              </ul>
            </div>
            <div>
              <Link
                to="projects"
                style={{
                  textDecoration: "none",
                  color: "#5aea44",
                  fontSize: 12,
                }}
              >
                Click here to know more about my skills
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutComopnent;
