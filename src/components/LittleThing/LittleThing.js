import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "../About/Github";
import AboutCard from "../About/AboutCard";

function LittleThing() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={8}
            style={{
              justifyContent: "center",
              paddingTop: "20px",
              paddingBottom: "30px",
            }}
          >
            <h1 className="project-heading">
              About <strong className="purple">Me </strong>
            </h1>
            <AboutCard />  
          </Col>
        </Row>
        <Github />
      </Container>
    </Container>
  );
}

export default LittleThing;
