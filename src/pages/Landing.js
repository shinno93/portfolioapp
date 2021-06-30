import React from 'react';
import Profile from '../images/person.png';
import { Row, Col, Jumbotron } from "react-bootstrap";
import {FaLinkedin, FaGithub} from "react-icons/fa";

export function Landing() {
    return (
      <div>
        <Jumbotron>
          <Row className="align-items-center">
            <Col></Col>
            <Col sm={5} md={3}>
              <img
              src={Profile}
              alt="profile"
              />
            </Col>
            <Col sm={5} md={7}>
            <h4>Hi There! I'm</h4>
            <h1>Xinruo Wang</h1>
            <p>
              An aspiring IT graduate passionate about creating interactive applications and web experience
            </p>
            <FaGithub style={{"fontSize":'3em', "marginRight":10}} onClick={() => window.open("https://github.com/shinno93", "_blank")}/>
            <FaLinkedin style={{"fontSize":'3em', "marginRight":10}} onClick={() => window.open("https://www.linkedin.com/in/xinruo-wang/", "_blank")}/>
            </Col>
            <Col></Col>
          </Row>  
        </Jumbotron>
      </div>
    )
}
