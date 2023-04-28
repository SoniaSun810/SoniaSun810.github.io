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
import quiz1 from "../../Assets/Projects/quiz1.png";
import quiz2 from "../../Assets/Projects/quiz2.png";
import quiz3 from "../../Assets/Projects/quiz3.png";
import ProjectTextCard from "./ProjectTextCard";

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
              label="📲 Full-stack"
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
              label="🖥️ Full-stack MERN"
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

          <Col md={6} className="project-card">
            <ProjectTextCard
              isBlog={false}
              label="🛠️ Contribute to Open Source & Debugging"
              title="OpenRefine | Java | JavaScript"
              subTitle="jQuery, Maven"
              description="◦ Debug and fix usage of MediaWiki API in auto-completion for fields in the Wikibase schema #5809.
              ◦ OpenRefine (9.5k star) is an open-source data cleaning and transformation tool that operates as a standalone web application. Its architecture includes a web-based user interface, a Java-based backend engine, data import/export functionality, and extensibility through plugins and scripts."
              ghLink="https://github.com/OpenRefine/OpenRefine/pull/5809"
              demoLink="https://github.com/OpenRefine/OpenRefine"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectTextCard
              isBlog={false}
              label="🛠️ Testing & Debugging"
              title="QuestDB | Java"
              subTitle="SQL, Junit, Gradle, Mockito, SpotBugs, CheckStyle"
              description="◦ Collaborated with a group to implement comprehensive testing for the open-source SQL database project QuestDB using Junit, Mockito, and SpotBugs.
              ◦ One teammate contributed to the resolution of an open issue related to backslash escape.
              ◦ Created detailed documentation to record test cases and methodologies, ensuring efficient testing processes and clear communication within the team.
              https://github.com/SoniaSun810/questdb_test_debug/blob/master/docs/FinalReport.md
              "
              ghLink="https://github.com/SoniaSun810/questdb_test_debug"
              demoLink=""
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectTextCard
              isBlog={false}
              label="📂 Java Library"
              title="Add Methods for JSON.org Library"
              subTitle="Java, Maven, JUnit"
              description="◦ Added 5 overloaded static methods to the XML class inside the library with great code performance. 
              ◦ Implemented concrete functional, streaming, and Asynchronous APIs. 
              ◦ Extended existing API with additional programmer-facing functions. 
              ◦ Wrote unit tests that use these new functions, both for obtaining correct results and for testing. 
              "
              ghLink="https://github.com/SoniaSun810/JSON-java"
              demoLink="https://stleary.github.io/JSON-java/"
            />
          </Col>



          {/* Quiz Game App, maybe add later */}

          {/* <Col md={6} className="project-card">
            <ProjectCard
              imgPath1={quiz1}
              imgPath2={quiz2}
              imgPath3={quiz3}
              isBlog={false}
              label="📲 Front-end iOS"
              title="Quiz Game App"
              subTitle="iOS Mobile App Development, Swift, CocoaPods, UIKit "
              description="◦Implemented MVC design pattern. 
              Set Singleton to store data in Model. Set up 
              View programmatically by adding subviews in UIViewControllers, 
              and used SnapKit to build portrait and landscape layouts. 
              Added gestureRecognizer (tap, long press, pan) in UIView to achieve 
              drawing functionality. Implemented 4 custom UIViewControllers to configure the view.
              "
              ghLink="https://github.com/SoniaSun810/iOS_mobile_app_Quiz"
              demoLink="https://www.youtube.com/watch?v=NOh1L4YScM8"
            />
          </Col> */}

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
