import "./Projects.css";
import React from 'react';
import { Card, Row, Col, Container, Button } from "react-bootstrap";
import StocksApp from '../../images/stocksApp.gif';
import StudentConnect from '../../images/StudentConnect.gif';
import Revenous from '../../images/revenous.gif';
import MobileStocksApp from '../../images/MobileStocksApp.gif';
import {FaGithub} from "react-icons/fa";

const projectList = [
    {
        img:{
            src: StudentConnect,
            alt: 'Student Connect web platoform'
        },
        title: 'Student Connect',
        textList: [
            'During the outbreak of COVID-19, teachers found that it was hard to monitor student progress, engagement and mental well-being under remote learning',
            'Student Connect adresses these issues by allowing teachers to monitor students via its platform'
        ],
        featureList: [
            'Teachers can create daily goals with tasks',
            'Students can answer task progress',
            'Teachers can view students\' progress',
            'Parents can view their childrens\' active tasks'
        ],
        techList: [
            "devicon-react-original colored",
            "devicon-nodejs-plain-wordmark colored",
            "devicon-express-original colored",
            "devicon-firebase-plain colored",
            "devicon-javascript-plain colored"
        ]
    },
    {
        img: {
            src: StocksApp,
            alt: 'stocks web app'
        },
        title: 'Stocks App',
        textList: [
            'Check stock prices for NASDAQ 100 companies',
        ],
        featureList: [
            'Search stocks',
            'Check price history of a selected stock',
            'Chart function'
        ],
        techList: [
            "devicon-react-original colored",
            "devicon-javascript-plain colored"
        ],
        sourceLink: "https://github.com/shinno93/stocksapp"
    },
    {
        img:{
            src: Revenous,
            alt: 'revenous we app'
        },
        title: 'Ravenous',
        textList: [
            'Find local businesses from Yelp!',
        ],
        featureList: [
            'Search by keyword',
            'Search by location',
            'Search by best match, rating or review count'
        ],
        techList: [
            "devicon-react-original colored",
            "devicon-javascript-plain colored"
        ],
        sourceLink: "https://github.com/shinno93/Ravenous"
    },
    {
        img:{
            src: MobileStocksApp,
            alt: 'stocks mobile app'
        },
        title: 'Stocks App (Mobile)',
        textList: [
            'Check stock prices on a mobile phone',
        ],
        featureList: [
            'Login & Sign Up',
            'Add stocks to your watchlist',
            'Access your wachlsit from any devices'
        ],
        techList: [
            "devicon-react-original colored",
            "devicon-nodejs-plain-wordmark colored",
            "devicon-express-original colored",
            "devicon-mysql-plain-wordmark colored",
            "devicon-javascript-plain colored",
        ]
    }
]



export function Projects() {
    return (
        <Container className="section-container">
            <h2 className="section-title">Projects</h2>
            {projectList.map((projectObject, index) => {
                return (
                    <Row key={`pj-${index}`} className="project-container">
                        <Col></Col>
                        <Col xs={12} lg={12}>
                            <Card className="project-card">
                                <Row>
                                    <Col lg={6}>
                                        <img src={projectObject.img.src} alt={projectObject.img.alt} />  
                                    </Col>
                                    <Col lg={6}>
                                        <Card.Body>
                                        <Card.Title className="project-title">{projectObject.title}</Card.Title>
                                        {projectObject.sourceLink && 
                                            <FaGithub className="project-icon" 
                                            onClick={() => window.open(projectObject.sourceLink, "_blank")}/>}
                                        {projectObject.textList.map((text, index) => {
                                            return (
                                                <Card.Text key={`text-${index}`}>{text}</Card.Text>
                                            )
                                        })
                                        }
                                        <Card.Text>Some features include</Card.Text>
                                            <ul>
                                                {projectObject.featureList.map((feature, index) => {
                                                    return <li key={`feature-${index}`}>{feature}</li>
                                                })}
                                            </ul> 
                                            {projectObject.techList.map((technology, index) => {
                                                return <i key={`tech-${index}`} className={technology}></i>
                                            })}
                                        </Card.Body>
                                    </Col>
                                </Row>
                            </Card> 
                        </Col>
                        <Col></Col>
                    </Row>     
                )
            })}           
        </Container>
    )
}
