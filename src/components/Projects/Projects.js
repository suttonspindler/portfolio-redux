import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Patient Daily Health Survey"
              description="Created for Aidar Health, a biotech company, this web application allows physicians to create daily health
              surveys and assign them to patients."
              ghLink="https://github.com/suttonspindler/Patient-Daily-Health-Survey"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Snail Game"
              description="Programmed 3D horror/puzzle game in Unity with C# as entry for 2023 Jam-O-Lantern Game Jam."
              ghLink="https://github.com/AlexMalakov/SnailUnity"
              demoLink="https://daezel.itch.io/snail-game"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Leaky"
              description="Collaborated on user-experience design for prototype app used to detect water leaks in
              buildings."
              demoLink="https://docs.google.com/presentation/d/1iDNFgkjJBG_ixZdO5ga_RQukxaTCW_ti_jky_TZNq6c/edit?usp=sharing"
            //  demoLink2="https://4yrirn.axshare.com/?id=rw91fu&p=intial_page"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Marble Solitaire"
              description="Designed game containing UI using Swing to control user input and output of images in Java."
              ghLink="https://github.com/suttonspindler/Marble-Solitaire"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
