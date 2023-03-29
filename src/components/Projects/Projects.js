import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import campusoffer from "../../Assets/Projects/campusoffer.png";
import frontachi from "../../Assets/Projects/frontachi.png";
import generalachi from "../../Assets/Projects/generalachi.png";
import jobify1 from "../../Assets/Projects/jobify1.png";
import jobify2 from "../../Assets/Projects/jobify2.png";
import jobify3 from "../../Assets/Projects/jobify3.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath1={campusoffer}
              imgPath2={frontachi}
              imgPath3={generalachi}
              isBlog={false}
              title="CampusOffer Android App"
              subTitle="Kotlin, Gradle, Retrofit, Node.js, Express, MySQL, Azure"
              description="◦ Built a full-stack mobile app to allow students to sell or buy second-hand items online. 
              ◦ System Design: utilizing user stories as a foundation, selected the MVVM architecture and executed the design of API, data, and component elements for system development.
              ◦ Client: reated the front-end using Dagger-Hilt for dependency injection, Google Play Services for login, and UI components for the View layer. Managed UI state with ViewModel and Kotlin Coroutines, and performed asynchronous operations with MutableLiveData. 
              ◦ Server: developed scalable RESTful APIs, and integrated Google OAuth authentication and authorization for secure access.
              ◦ Database: established a MySQL database by implementing the schema design.
              "
              ghLink="https://github.com/SoniaSun810/CampusOfferFrontend"
              demoLink="https://www.youtube.com/watch?v=xBvZhxIJdRU"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath1={jobify1}
              imgPath2={jobify2}
              imgPath3={jobify3}
              isBlog={false}
              title="Jobify Web App"
              subTitle="React.js, Node.js, Express, MongoDB"
              description="◦ Built a full-stack RESTful web app to help candidates manage their applications online.
              ◦ Front-end: implemented React Hook, React Router and Axios to build responsive UI with login status synchronization, user profile management, and data retrieval (partial search, filtering, sort, pagination).
              ◦ Server: set up routes, controllers and middleware, completed CRUD functionality, and tested the server with Postman. 
              ◦ Database: set up MongoDB database in the cloud (Atlas), used Mockaroo to create mock data and populate the database. 
              ◦ Set up Github Repo and deployed this application on Render.
              "
              ghLink="https://github.com/SoniaSun810/Jobify_MERN"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
