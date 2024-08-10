import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn,FaTelegram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Home2() {
  return (
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={8} className="home-about-description">
              <h1 style={{ fontSize: "2.6em" }}>
                LET ME <span className="purple"> INTRODUCE </span> MYSELF
              </h1>
              <p className="home-about-body">
                I fell in love with programming and I have at least learnt
                something, I think… 🤷‍♂️
                <br />
                <br />I am fluent in classics like
                <i>
                  <b className="purple"> Javascript. </b>
                </i>
                <br />
                <br />
                My  Interest's are building new &nbsp;
                <i>
                  <b className="purple">Web sites </b> and
                  also in areas related to{" "}
                  <b className="purple">
                    Cyber-Security.
                  </b>
                </i>
                <br />
                <br />
                Whenever possible, I also apply my passion for developing products
                with <b className="purple">Node.js</b> and
                <i>
                  <b className="purple">
                    {" "}
                    Modern Javascript Library and Frameworks
                  </b>
                </i>
                &nbsp; like
                <i>
                  <b className="purple"> React.js and Next.js</b>
                </i>
              </p>
            </Col>
            <Col md={4} className="myAvtar">
              <Tilt>
                <img src={myImg} className="img-fluid" alt="avatar" />
              </Tilt>
            </Col>
          </Row>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>FIND ME ON</h1>
              <p>
                Feel free to <span className="purple">connect </span>with me
              </p>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                      href="https://github.com/theMuhammad"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                  >
                    <AiFillGithub/>
                  </a>
                </li>
                <li className="social-icons">
                  <a
                      href="https://t.me/mxm_tm"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                  >
                    <FaTelegram/>
                  </a>
                </li>
                <li className="social-icons">
                  <a
                      href="https://www.linkedin.com/in/muhammad-makhmudov-1946552a9/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                  >
                    <FaLinkedinIn/>
                  </a>
                </li>
                <li className="social-icons">
                  <a
                      href="mailto:muhammadbest267@gmail.com"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                  >
                    <SiGmail/>
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
  );
}
export default Home2;
