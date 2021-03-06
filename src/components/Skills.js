import React from "react";
import { Div } from "./style";
import skills from "./info/skills";
import Skill from "./Skill";

const Skills = () => {
  return (
    <Div className="d-flex align-content-center align-self-center justify-content-center flex-wrap flex-md-row flex-column">
      {skills.map((skill) => (
        <Skill key={skill.id} logo={skill.logo} name={skill.name}></Skill>
      ))}
    </Div>
  );
};

export default Skills;
