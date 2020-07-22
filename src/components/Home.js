import React from "react";
import { Theme, Div, H1, Sub, Img } from "./style";
import ContactInfo from "./ContactInfo";
import image from "./images/profile.jpg";
import resume from "../resume.pdf";

const Home = () => {
  return (
    <Theme>
      <Div
        home
        className="container d-flex align-items-center justify-content-center flex-md-row flex-column"
      >
        <div className="p-md-4 p-3">
          <Img src={image} alt="profile" />
        </div>
        <div className="p-md-4 p-3">
          <H1 className="display-1">Rawand Dargali</H1>
          <div className="d-flex">
            <Sub className="mb-2"> Web Developer</Sub>
            <div className="d-flex mb-2">
              <ContactInfo
                link="https://github.com/rdargali"
                logo="fab fa-github ml-2 mr-3"
              />
              <ContactInfo
                link="https://www.linkedin.com/in/rdargali/"
                logo="fab fa-linkedin mr-3"
              />
              <ContactInfo
                link="https://www.instagram.com/rawandd91/"
                logo="fab fa-instagram mr-3"
              />
            </div>
          </div>
          <div className="d-flex">
            <ContactInfo
              logo="fas fa-envelope"
              info="rdargali@gmail.com"
              link="mailto:rdargali@gmail.com"
            />

            <ContactInfo
              logo="fas fa-briefcase ml-2"
              info="My Resume"
              link={resume}
            />
          </div>
        </div>
      </Div>
    </Theme>
  );
};

export default Home;
