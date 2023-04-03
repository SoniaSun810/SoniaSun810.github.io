// import Axios from 'axios';
import axios from "axios";
import React, { useState } from "react";
import { useAppContext } from "../../Context/appContext";
import { MultiSelect } from "react-multi-select-component";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const PromptCard = () => {
  const { displayCompletion, isLoading } = useAppContext();

  const skillOptions = [
    { label: "JavaScript", value: "JavaScript" },
    { label: "React", value: "React" },
    { label: "Nodejs", value: "Nodejs" },
    { label: "Python", value: "Python" },
    { label: "Java", value: "Java" },
    { label: "Azure", value: "Azure" },
    { label: "Git", value: "Git" },
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
    if (
      !selectedJobType ||
      !selectedPosition ||
      !selectedSkills ||
      !companyName ||
      !companyLocation
    ) {
      alert("Please fill in all the fields");
      return;
    }

    const type = selectedJobType.map((item) => item.value).join(", ");
    const position = selectedPosition.map((item) => item.value).join(", ");
    const skills = selectedSkills.map((item) => item.value);
    const company_name = companyName;
    console.log(company_name);
    const company_location = companyLocation;
    console.log(company_location);

    displayCompletion({
      type,
      position,
      skills,
      company_name,
      company_location,
    });
    // console.log("submit");
  };

  return (
    <Card className="coverletter-card-view">
      <Card.Body>
        <blockquote
          className="blockquote mb-0"
          style={{ textAlign: "left" }}
        >
          To generator a cover letter, please fill in the following information:
          <br />
          <br />
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
          <Form>
            {/* form for company name and location */}
            <InputGroup className="mb-3 input-group">
              <Form.Control
                placeholder="Company Name"
                aria-label="company name"
                aria-describedby="basic-addon1"
                value={companyName}
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
          <div class="text-center" style={{ paddingTop: "20px" }}>
            <Button
              variant="primary"
              type="submit"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              {isLoading ? "Please wait..." : "Submit"}
            </Button>
          </div>
          <br />
        </blockquote>
      </Card.Body>
    </Card>
  );
};

export default PromptCard;
