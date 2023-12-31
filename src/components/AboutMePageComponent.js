import React from "react";

function AboutMePageComponent() {
  return (
    <div className="aboutMePageComponent">
      <div className="education">
        <div className="title">
          <div></div>
          EDUCATION
          <div></div>
        </div>
        <h5 style={{ color: "wheat" }}>BACHELOR's DEGREE</h5>
        <div className="study">
          <h6>
            <em>
              Sri Chandrasekharendra Saraswathi Viswa Maha Vidyalaya University
            </em>
          </h6>
          <div>
            <ul>
              <li>B.E - Computer Science and Engineering</li>
              <li>
                CGPA <b>:</b> 9.50
              </li>
              <li>
                Percentage <b>:</b> 92.85%
              </li>
              <li>2019-2023</li>
            </ul>
          </div>
        </div>
        <h5 style={{ color: "wheat" }}>INTERMEDIATE</h5>
        <div className="study">
          <h6>
            <em>Narayana Jr. College</em>
          </h6>
          <div>
            <ul>
              <li>M.P.C</li>
              <li>
                CGPA <b>:</b> 9.67
              </li>
              <li>
                Percentage <b>:</b> 93.5%
              </li>
              <li>2017-2019</li>
            </ul>
          </div>
        </div>
        <h5 style={{ color: "wheat" }}>
          X <sup>TH</sup>
        </h5>
        <div className="study">
          <h6>
            <em>Narayana EM High School</em>
          </h6>
          <div>
            <ul>
              <li>State Board</li>
              <li>
                CGPA <b>:</b> 9.7
              </li>
              <li>2016-2017</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="skills">
        <div className="title">
          <div></div>
          SKILLS
          <div></div>
        </div>
        <div className="skill_container">
          <div>
            <ul>
              <li>React.js</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDB</li>
              <li>Redux</li>
              <li>MySQL</li>
              <li>REST API's</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>JavaScript</li>
              <li>Python</li>
              <li>C</li>
              <li>C++</li>
              <li>OOPS</li>
              <li>DSA</li>
              <li>SASS</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>UI/UX</li>
              <li>Backend Web Development &nbsp;</li>
              <li>Bootstrap</li>
              <li>System Design</li>
              <li>Linux</li>
              <li>Git</li>
              <li>GitHub</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMePageComponent;
