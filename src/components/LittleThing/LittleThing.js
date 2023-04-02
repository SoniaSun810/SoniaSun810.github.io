import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import PromptCard from "./Prompt";
import IdeaCard from "./IdeaCard";
import { useAppContext } from "../../Context/appContext";
import CompletionCard from "./Completion";

function LittleThing() {
  const { displayPrompt, displayCompletion } = useAppContext();

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
              <strong className="purple">CoverLetter Generator </strong>with
              Integrated <strong className="purple">GPT-3.5</strong>
            </h1>
            {displayPrompt ? <PromptCard /> : <CompletionCard />}
            <IdeaCard />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default LittleThing;
