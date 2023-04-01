// import Axios from 'axios';
import axios from "axios";

import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function CoverLetter() {
  const skillOptions = [
    { label: "JavaScript", value: "JavaScript" },
    { label: "React", value: "React" },
    { label: "Nodejs", value: "Nodejs" },
    { label: "Python", value: "Python" },
    { label: "Java", value: "Java" },
  ];

  const positionOptions = [
    { label: "Front-end", value: "Front-end" },
    { label: "Backend", value: "Backend" },
    { label: "Full-stack", value: "Full-stack" },
  ];

  const typeOptions = [
    { label: "Intern", value: "Intern" },
    { label: "Part time", value: "Part time" },
    { label: "Full time", value: "Full time" },
  ];

  const [selectedJobType, setSelectedJobType] = useState([]);
  const [selectedPosition, setSelectedPosition] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [companyName, setCompanyName] = useState("");
  const [companyLocation, setCompanyLocation] = useState("");

  const handleSubmit = () => {
    console.log(selectedJobType);
    console.log(selectedPosition);
    console.log(selectedSkills);
    console.log(companyName);
    console.log(companyLocation);
    console.log("submit");
  };


  return (
    <Card className="coverletter-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            To generator a cover letter, please fill in the following
            information:
            <br />
            <br />
            <div>
              {/* to disable one option: disabled: true */}
              <h2>Job Type</h2>
              <MultiSelect
                className="multi-selection"
                options={typeOptions}
                value={selectedJobType}
                onChange={setSelectedJobType}
                labelledBy="Types"
              />
            </div>
            <div>
              <h2>Position</h2>
              <MultiSelect
                className="multi-selection"
                options={positionOptions}
                value={selectedPosition}
                onChange={setSelectedPosition}
                labelledBy="Postions"
              />
            </div>
            <div>
              <h2>Skills</h2>
              <MultiSelect
                className="multi-selection"
                options={skillOptions}
                value={selectedSkills}
                onChange={setSelectedSkills}
                labelledBy="Skills"
              />
            </div>
            <Form>
              {/* form for company name and location */}
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Company Name"
                  aria-label="company name"
                  aria-describedby="basic-addon1"
                  value = {companyName}
                  onChange={(event) => setCompanyName(event.target.value)}
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Company Location"
                  aria-label="company location"
                  aria-describedby="basic-addon2"
                  value={companyLocation}
                  onChange={(event) => setCompanyLocation(event.target.value)}
                />
              </InputGroup>
            </Form>
            <div class="text-center">
              <Button variant="primary" type="submit" onClick={handleSubmit}>
                Submit
              </Button>
            </div>
            <br />
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default CoverLetter;
