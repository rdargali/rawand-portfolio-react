import React from "react";
import { ProjectDiv, Theme, H4, ProjectImg, PD, Anchor, PI } from "./style";

const Project = (props) => {
  return (
    <Theme>
      <ProjectDiv className="d-flex flex-column justify-content-center  align-items-center">
        <H4>{props.title}</H4>
        <Anchor target="_blank" className="m-3" href={props.link}>
          <ProjectImg src={props.thumbnail} />
        </Anchor>
        <div className="d-flex mt-3">
          <PD>{props.description}</PD>
          <Anchor target="_blank" href={props.github}>
            <PI className="fa fa-github-square ml-1" aria-hidden="true"></PI>
          </Anchor>
        </div>
      </ProjectDiv>
    </Theme>
  );
};

export default Project;
