import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { projects } from "../../constants";

function Projects({ numProjects }) {
  // If numProjects is not provided, set it to the total number of projects
  const projectsToDisplay = numProjects ? projects.slice(0, numProjects) : projects;

  return (
    <section>
    <Container fluid className="project-section">
      <Particle />
      <Container className="project-content">
        <h1 className="section-heading purple">
          <strong className="purple">Projects</strong>
        </h1>

        <p style={{ color: "white" }}>
          Hello there! Welcome to my project gallery. The following projects showcase my skills and experience through real-world examples of my work. They are more than just lines of code – they represent my journey. Each project includes a detailed explanation, links to code repositories, and live demos.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projectsToDisplay.map((project, index) => (
            <Col lg={4} md={6} className="project-card" key={`project-${index}`}>
              <ProjectCard {...project} />
            </Col>
          ))}
        </Row>

        {/* Conditionally render the button */}
        {numProjects && (
          <div className="text-center">
            <Button variant="primary">View All Projects</Button>
          </div>
        )}
      </Container>
    </Container>
    </section>
  );
}

export default Projects;
