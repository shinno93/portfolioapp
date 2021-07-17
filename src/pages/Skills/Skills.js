import './Skills.css';
import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';

const skillList = [
    {
        tech: "devicon-react-original-wordmark colored",
        name: "react",
    },
    {
        tech: "devicon-javascript-plain colored",
        name: "JavaScript",
    },
    {
        tech: "devicon-express-original-wordmark colored",
        name: "express",
    },
    {
        tech: "devicon-nodejs-plain-wordmark colored",
        name: "node.js",
    },
    {
        tech: "devicon-firebase-plain-wordmark colored",
        name: "Firebase",
    },
    {
        tech: "devicon-mysql-plain-wordmark colored",
        name: "MySQL",
    },
    {
        tech: "devicon-html5-plain-wordmark colored",
        name: "HTML",
    },
    {
        tech: "devicon-css3-plain-wordmark colored",
        name: "CSS",
    },
    {
        tech: "devicon-bootstrap-plain-wordmark colored",
        name: "Bootstrap",
    },
    {
        tech: "devicon-python-plain-wordmark colored",
        name: "Python3",
    },
    {
        tech: "devicon-git-plain-wordmark colored",
        name: "Git",
    },
    {
        tech: "devicon-trello-plain-wordmark colored",
        name: "Trello",
    }
]

export function Skills() {
    return (
        <Container className="section-container">
            <h2 className="section-title">Skills</h2>
            <div className="container rounded mt-4 p-2" style={{"backgroundColor": "white"}}>
                <Row>
                    {skillList.map((skill, index) => {
                        return(
                            <Col xs={4} sm={4} md={3} lg={2} key={index} className="skill-icon" >
                                <Card
                                bg='light'
                                text='black'
                                className="shadow-sm text-center"
                                >
                                    <Card.Body>
                                    <i className={skill.tech}></i>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })}    
                </Row>        
            </div>
        </Container>
    )
}