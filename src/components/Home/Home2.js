import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
      <h1 style={{ fontSize: "2.6em", color:"white" }}>
              About Me
            </h1>
        <Row>
          <Col md={8} className="home-about-description">
            <p className="home-about-body">
              I'm a skilled software engineer with a strong foundation in 
              <i>
                <b className="purple"> web development </b>
              </i>
               and a passion for exploring 
               <i>
                <b className="purple"> diverse technical fields </b>
              </i>. 
              <br />
              <br />
              Proficient in 
              <i>
                <b className="purple"> Java, JavaScript, React, Node.js, and Google Apps Script </b>
              </i>
              , I'm excited to embark on a journey of continuous learning. 
              <br />
              <br />
              My goal is to create 
              <i>
                <b className="purple"> practical, user-friendly solutions </b>
              </i> that address 
              <i>
                <b className="purple"> real-world challenges </b>
              </i>.
            </p>
          </Col>
          <Col md={4} className="myAvtar d--sm-none">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        {/*
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/soumyajit4419/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        */}
      </Container>
    </Container>
  );
}
export default Home2;
