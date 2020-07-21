import React from "react";
import { PortfolioDiv, Theme, H4 } from "./style";

function Project(props) {
  return (
    <Theme>
      <PortfolioDiv className="d-flex flex-column justify-content-center text-center align-items-center m-3 p-2">
        <H4>{props.title}</H4>
        <H4>{props.thumbnail}</H4>
        <H4>{props.description}</H4>
        <H4>{props.github}</H4>
        <H4>{props.link}</H4>
      </PortfolioDiv>
    </Theme>
  );
}

export default Project;
