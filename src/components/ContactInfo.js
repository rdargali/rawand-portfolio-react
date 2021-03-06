import React from "react";
import { P, I } from "./style";

const ContactInfo = (props) => {
  return (
    <div className="pb-1">
      <a
        href={props.link}
        style={{ textDecoration: "none" }}
        target="_blank"
        rel="noopener noreferrer"
      >
        <I className={props.logo}></I>
        <P inline>{props.info}</P>
      </a>
    </div>
  );
};

export default ContactInfo;
