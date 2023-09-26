import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Pruthvi S </span>
            from <span className="purple"> Bengaluru, India.</span>
            <br /> I am a pre final year student pursuing an Bachelors of Technology
            in Computer Science and Technology at Dayananda Sagar University Bengaluru.
            <br />
            Additionally, I am currently as a intern at
            Future Ready Talent.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Live a life before life Leaves you!"{" "}
          </p>
          <footer className="blockquote-footer">Pruthvi S</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
