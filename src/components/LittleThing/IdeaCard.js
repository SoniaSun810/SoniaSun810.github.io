import React from "react";
import Card from "react-bootstrap/Card";
import { ImArrowLeft } from "react-icons/im";

function IdeaCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Share some of my thoughts on AI applications :
            <br />
            <br />
            
            • It is actually safer and more controllable to use the restricted AI
            functions under the framework of the graphical interface for the
            public.
            <br />
            <br />
            • Having multiple AIs who are experts in several different fields,
            rather than an omnipotent and omniscient god, seems to serve us
            better in the form of products.
            <br />
            <br />
            • We still lack imagination in the application scenarios.
            <br />
            <br />
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default IdeaCard;
