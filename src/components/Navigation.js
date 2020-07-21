import React, { useState } from "react";
import { Theme, Nav, Li, A } from "./style.js";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [home, setHome] = useState(true);
  const [skills, setSkills] = useState(false);
  const [about, setAbout] = useState(false);
  const [portfolio, setPortfolio] = useState(false);

  const linkStyle = {
    textDecoration: "none",
    color: "#66FCF1",
  };

  return (
    <Theme>
      <Nav className="navbar navbar-expand justify-content-center fixed-top">
        <ul className="navbar-nav">
          <Li active={home} className="nav-item p-md-2 p-1">
            <A
              className="nav-link"
              onClick={(e) => {
                setHome(true);
                setSkills(false);
                setAbout(false);
                setPortfolio(false);
                e.preventDefault();
              }}
            >
              <Link to={"/"} style={linkStyle}>
                HOME
              </Link>
            </A>
          </Li>

          <Li active={about} className="nav-item p-md-2 p-1">
            <A
              className="nav-link"
              onClick={(e) => {
                setHome(false);
                setSkills(false);
                setAbout(true);
                setPortfolio(false);
                e.preventDefault();
              }}
            >
              <Link to={"about"} style={linkStyle}>
                ABOUT
              </Link>
            </A>
          </Li>

          <Li active={skills} className="nav-item p-md-2 p-1">
            <A
              className="nav-link"
              onClick={(e) => {
                setHome(false);
                setSkills(true);
                setAbout(false);
                setPortfolio(false);
                e.preventDefault();
              }}
            >
              <Link to={"skills"} style={linkStyle}>
                SKILLS
              </Link>
            </A>
          </Li>

          <Li active={portfolio} className="nav-item p-md-2 p-1">
            <A
              className="nav-link"
              onClick={(e) => {
                setHome(false);
                setSkills(false);
                setAbout(false);
                setPortfolio(true);
                e.preventDefault();
              }}
            >
              <Link to={"portfolio"} style={linkStyle}>
                PORTFOLIO
              </Link>
            </A>
          </Li>
        </ul>
      </Nav>
    </Theme>
  );
}

export default Navigation;
