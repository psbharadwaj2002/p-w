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
            Sri Chandrasekharendra Saraswathi Viswa Maha Vidyalaya University
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
          <h6>Narayana Jr. College</h6>
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
          <h6>Narayana EM High School</h6>
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
      <div></div>
    </div>
  );
}

export default AboutMePageComponent;
