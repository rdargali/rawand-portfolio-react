import React from "react";
import { PortfolioDiv, Theme, H4, ProjectImg, PD, Anchor, PI } from "./style";

const Project = (props) => {
  return (
    <Theme>
      <PortfolioDiv className="d-flex flex-column justify-content-center  align-items-center">
        <Anchor href={props.link}>
          <H4>{props.title}</H4>
          <ProjectImg src={props.thumbnail} />
        </Anchor>
        <div className="d-flex mt-3">
          <PD>{props.description}</PD>
          <Anchor href={props.github}>
            <PI className="fa fa-github-square ml-1" aria-hidden="true"></PI>
          </Anchor>
        </div>
      </PortfolioDiv>
    </Theme>
  );
};

export default Project;
