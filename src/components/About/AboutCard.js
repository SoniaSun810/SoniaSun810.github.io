import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            • Proficient in{" "}
            <span className="purple">JavaScript, React, Node.js</span>, and
            fluent in <span className="purple">Python</span> and <span className="purple">Java</span>.
            <br />
            <br />
            • Three years of in-depth and diverse experiences in the <span className="purple">software industry</span>
            , working as a <span className="purple">software engineer</span> and <span className="purple">product manager</span>.
            <br />
            <br />
            • Highly motivated and skilled <span className="purple">team player</span> with a demonstrated
            ability to learn quickly, think creatively and work collaboratively.
            <br />
            <br />
            
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
