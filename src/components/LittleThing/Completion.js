import React from "react";
import Card from "react-bootstrap/Card";
import { useAppContext } from "../../Context/appContext";
import ReactMarkdown from "react-markdown";
import Button from "react-bootstrap/Button";

function CompletionCard() {
  const { completion, displayCoverLetter } = useAppContext();
  console.log(completion);

  return (
    <Card className="completion-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "left" }}>
            My Cover Letter
            <br />
            <br />
            <ReactMarkdown>{completion}</ReactMarkdown>
            <br />
            <br />
          </p>
        </blockquote>
        <div class="text-center" style={{ paddingTop: "20px" }}>
          <Button variant="primary" type="submit" onClick={displayCoverLetter}>
            Go Back
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CompletionCard;
