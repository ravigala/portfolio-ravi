import React from "react";
import { ImGithub } from "react-icons/im";
import { AiOutlineLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer">
      <a
        href="https://github.com/ravigala"
        target="_blank"
        className="text-decoration-none"
      >
        <ImGithub
          size={32}
          // className="text-muted"
        />
      </a>
      <a
        href="https://linkedin.com/in/ravigala"
        target="_blank"
        className="text-decoration-none"
      >
        <AiOutlineLinkedin
          size={32}
          // className="text-muted"
        />
      </a>
    </div>
  );
};

export default Footer;
