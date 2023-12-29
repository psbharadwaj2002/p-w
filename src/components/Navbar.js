import { MenuOutlined } from "@ant-design/icons";
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            SRINIVASA BHARADWAJ PEDDINTI
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ border: "1px solid white", color: "white" }}
          >
            <MenuOutlined />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" href="#">
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#about">
                  ABOUT
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">
                  PROJECTS
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
