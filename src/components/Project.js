import React from "react";
import { PortfolioDiv, Theme, H4, ProjectImg, Sub, Anchor, I } from "./style";

const Project = (props) => {
  return (
    <Theme>
      <PortfolioDiv className="d-flex flex-column justify-content-center text-center align-items-center m-3 p-2">
        <Anchor href={props.link}>
          <H4>{props.title}</H4>
          <ProjectImg src={props.thumbnail} />
        </Anchor>
        <Sub>{props.description}</Sub>
        <Anchor href={props.github}>
          <I class="fa fa-github-square" aria-hidden="true"></I>
        </Anchor>
      </PortfolioDiv>
    </Theme>
  );
};

export default Project;
