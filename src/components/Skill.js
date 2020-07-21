import React from "react";
import { SkillDiv, Theme, H4, Logo } from "./style";

const Skill = (props) => {
  return (
    <Theme>
      <SkillDiv className="d-flex flex-column justify-content-center text-center align-items-center m-3 p-2">
        <Logo className={props.logo}></Logo>
        <H4>{props.name}</H4>
      </SkillDiv>
    </Theme>
  );
};

export default Skill;
