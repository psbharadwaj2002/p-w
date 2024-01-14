import { GithubOutlined, LinkedinFilled } from "@ant-design/icons";
import side_image from "../assests/side_image.png";
import React from "react";
// import leetcode from "../assests/icons/leetcode.svg";

function IntroComponent() {
  return (
    <div className="introComponent">
      <div className="icons">
        <div>
          <a href="https://github.com/psbharadwaj2002">
            <GithubOutlined />
          </a>
          {/* <a
            href="https://leetcode.com/user2955XV/"
            rel="noreferrer noopener"
            target="_blank"
          >
            <img src={leetcode} alt="leetcode" />
          </a> */}
          <a href="https://www.linkedin.com/in/srinivasa-bharadwaj-peddinti">
            <LinkedinFilled />
          </a>
        </div>
      </div>
      <div className="img_name">
        <img src={side_image} alt="my_side_image" />
        <p id="name">Srinivasa Bharadwaj Peddinti</p>
        <p>I'm a MERN Stack Web Developer</p>
      </div>
      <div id="right">
        <p>Web Developer</p>
      </div>
    </div>
  );
}

export default IntroComponent;
