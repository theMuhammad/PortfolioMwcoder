import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Muhammad Makhmudov </span>
            from <span className="purple"> Tashkent , Uzbekistan.</span>
            <br />
            I am currently in the 10th grade at school.
            <br />
            In <span className="purple">2023-2024</span>, I graduated from <span className="purple">Najot
              Education LLC </span> in the field of <span className="purple">Frontend</span>
            <br />
            <br />
          </p>
          <ul>
            <li className="about-activity" >
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Making Content
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Draw pictures
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
