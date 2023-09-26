import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/FoodDash.png";
import emotion from "../../Assets/Projects/sorting.png";
import editor from "../../Assets/Projects/image_generation.jpg";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/creditcrad.jpg";
import bitsOfCode from "../../Assets/Projects/Hoobank.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build in MERN Stack and SocketIO. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/Prureddy/Chatify"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="HooBank_modern_website"
              description="HooBank is a modern Website created using react and tailwind"
              ghLink="https://github.com/Prureddy/HooBank_modern_website"
              demoLink="https://venerable-cucurucho-2fbd2b.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="AI_Image_Generation_MERN_App"
              description="This repository contains a MERN (MongoDB, Express.js, React.js, Node.js) Stack application that generates an image based on the provided text input. The application utilizes the Vite tool for creating a development environment and provides easy-to-follow commands for setting up and running the project"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="FoodDash_website"
              description="FoodDash website is a modern website built with HTML, CSS, Javascript and inlcuded Dialogueflow Chatbot where user can communicate, order the food,can track and can know the order id "
              ghLink="https://github.com/Prureddy/FoodDash_website"
              demoLink="https://prureddy.github.io/FoodDash_website/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Credit-Card-Fraud-Detection"
              description="This project aims to build a robust and accurate fraud detection model that can identify fraudulent transactions effectively while minimizing false positives. The implementation is based on a real-world credit card transaction dataset, and the model is trained using supervised learning techniques."
              ghLink="https://github.com/Prureddy/Credit-Card-Fraud-Detection"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Sorting-Visualizer"
              description="The Sorting Visualizer is a web application that demonstrates various sorting algorithms visually. It allows users to visualize the process of sorting an array, helping them understand how different algorithms work and how they compare in terms of efficiency."
              ghLink="https://github.com/Prureddy/Sorting-Visualizer-front-end"
              demoLink="https://prureddy.github.io/Sorting-Visualizer-front-end/"     
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
