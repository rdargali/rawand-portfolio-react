import React from "react";
import { Theme, Div, H4, Hr } from "./style";
import AboutContent from "./AboutContent";
import education from "./info/education";
import experience from "./info/experience";
import volunteer from "./info/volunteer";

function About() {
  return (
    <Theme>
      <Div className="d-flex align-content-center align-self-center justify-content-center flex-wrap flex-column mb-5 px-md-5">
        <H4 className="mt-4">EDUCATION</H4>
        {education.map((edu) => (
          <AboutContent
            key={edu.id}
            title={edu.school}
            location={edu.location}
            year={edu.year}
            description={edu.description}
          />
        ))}

        <Hr className="my-3" />

        <H4 className="mt-4">WORK EXPERIENCE</H4>
        {experience.map((experience) => (
          <AboutContent
            key={experience.id}
            title={experience.title}
            location={experience.location}
            year={experience.year}
            description={experience.description}
          />
        ))}

        <Hr className="my-3" />
        <H4 className="mt-4">VOLUNTEER WORK</H4>
        {volunteer.map((volunteer) => (
          <AboutContent
            key={volunteer.id}
            title={volunteer.title}
            location={volunteer.location}
            year={volunteer.year}
            description={volunteer.details}
          />
        ))}
      </Div>
    </Theme>
  );
}

export default About;
