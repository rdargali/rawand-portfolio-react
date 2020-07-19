import React from "react";
import { AboutDiv, Theme, Title, Sub, D } from "./style";

function Education(props) {
  return (
    <Theme>
      <AboutDiv>
        <Title>{props.title}</Title>
        <Sub>
          {props.year}&nbsp;|&nbsp;{props.location}
        </Sub>
        {props.description.map((description) => (
          <D>{description}</D>
        ))}
      </AboutDiv>
    </Theme>
  );
}

export default Education;
