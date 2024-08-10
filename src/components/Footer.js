import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn, FaTelegram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";


function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Muhammad Makhmudov</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3> {year} </h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/theMuhammad"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://t.me/mxm_tm"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTelegram />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/muhammad-makhmudov-1946552a9/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="mailto:muhammadbest267@gmail.com"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiGmail />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
