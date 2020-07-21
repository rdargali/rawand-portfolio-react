import React from "react";
import { Div } from "./style";
import projects from "./info/projects";
import Project from "./Project";

const Portfolio = () => {
  return (
    <Div className="d-flex align-content-center align-self-center justify-content-center flex-wrap">
      {projects.map((proj) => (
        <Project
          key={proj.title}
          title={proj.title}
          thumbnail={proj.thumbnail}
          description={proj.description}
          github={proj.github}
          link={proj.link}
        />
      ))}
    </Div>
  );
};

export default Portfolio;
