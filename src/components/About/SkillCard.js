import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function SkillCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "left" }}>
            • <span className="purple">Languages</span>: Python, JavaScript, Java, Kotlin, Swift, SQL, HTML5,
            CSS3
            <br />
            <br />
            • <span className="purple">Database & Library & Framework</span>: MySQL, MongoDB, React, Redux,
            Axios, Node.js, Express, Bootstrap, JUnit
            <br />
            <br />
            • <span className="purple">Tools</span>: Git, Azure, Postman, Jira, VS Code, IntelliJ, Xcode,
            Android Studio, Maven, Gradle, npm, yarn
            <br />
            <br />
            • <span className="purple">Coursework</span>: Data Structure and Algorithms, Database
            Programming, Distributed Software Architecture, Software Testing and
            Debugging, Programming Styles, Cloud and Security Foundations,
            Reverse Engineering, Mobile Application Development
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default SkillCard;
