import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ggeek from "../../Assets/Projects/game-geek.png";
import billz from "../../Assets/Projects/billz.png";
import country from "../../Assets/Projects/country.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ggeek}
              isBlog={false}
              title="Game Geek"
              ghLink="https://github.com/theMuhammad/Geek-game"
              demoLink="https://geek-game.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={country}
              isBlog={false}
              title="Countiries"
              ghLink="https://github.com/theMuhammad/Country"
              demoLink="https://countries-git-main-muhammads-projects-61b561d4.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={billz}
              isBlog={false}
              title="Billz"
              ghLink=""
              demoLink="https://project-billz.netlify.app/store"              
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
