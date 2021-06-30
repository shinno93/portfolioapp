import React from 'react';
import { Card, Row, Col, Carousel, Container } from "react-bootstrap";
import CreateTask from '../images/create_task.png';
import AnswerTask from '../images/answer_task_progress.png';
import ViewTask from '../images/view_result.png';
import ViewTask2 from '../images/view_result2.png';
import TeacherDashboard from '../images/teacher_dashboard.png';
import StockList from '../images/stocklist.png';
import StockInfo from '../images/stockinfo.png';
import Ravenous from '../images/ravenous1.png';
import Ravenous2 from '../images/ravenous2.png';

const projectList = [
    {
        imgList:[
            {
                src: TeacherDashboard,
                alt: 'teacher\'s dashboard'
            },
            {
                src: CreateTask,
                alt: 'create task'
            },
            {
                src: AnswerTask,
                alt: 'answer task progress'
            },
            {
                src: ViewTask,
                alt: 'view students\' progress'
            },
            {
                src: ViewTask,
                alt: 'view students\' progress2'
            }
        ],
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
        imgList:[
            {
                src: StockList,
                alt: 'stock list'
            },
            {
                src: StockInfo,
                alt: 'price history'
            },
        ],
        title: 'Stocks App',
        textList: [
            'Check stock prices for NASDAQ 100 companies',
        ],
        featureList: [
            'Search Stocks',
            'Check price history of a selected stock',
            'Chart function'
        ],
        techList: [
            "devicon-react-original colored",
            "devicon-javascript-plain colored"
        ]
    },
    {
        imgList:[
            {
                src: Ravenous,
                alt: 'search page'
            }
        ],
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
        ]
    }
]



export function Projects() {
    return (
        <Container style={{"marginTop": 30, "marginBottom": 50}}>
            <h2 style={{textAlign: 'center', "marginTop": 30, "marginBottom": 30}}>Projects</h2>
            {projectList.map((projectObject, index) => {
                return (
                    <Row key={`pj-${index}`} style={{ "marginTop": 20, "marginBottom": 20 }}>
                        <Col></Col>
                        <Col xs={12} lg={12}>
                            <Card style={{ width: '100%', justifyContent:'center', alignItems:'center'}}>
                                <Row>
                                    <Col lg={6}>
                                        <Carousel>
                                            {projectObject.imgList.map((img, index) => {
                                                return (
                                                    <Carousel.Item key={`img-${index}`}>
                                                        <img
                                                        className="d-block w-100"
                                                        src={img.src}
                                                        alt={img.alt}
                                                        />
                                                    </Carousel.Item>
                                                )
                                            })}      
                                        </Carousel> 
                                    </Col>
                                    <Col lg={6}>
                                        <Card.Body>
                                        <Card.Title>{projectObject.title}</Card.Title>
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
                                            return <i key={`tech-${index}`} className={technology} style={{"fontSize":'4em'}}></i>
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
