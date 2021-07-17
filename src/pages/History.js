import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { IoBriefcase, IoSchool, IoRocketSharp } from "react-icons/io5";
import { Container } from "react-bootstrap";

const contents =
    [
        {
            category: 'school',
            title: 'Master of Information Technology (Data Science)',
            subtitle: 'Queensland University of Technology, Australia',
            tasks: 'Data Mining | Web Development | Agile Software Development | Database | AI and Machine Learning',
            date: 'July 2019 - July 2021', 
        },
        {
            category: 'work',
            title: 'Business Analyst',
            subtitle: 'ABeam Consulting, Japan',
            tasks: 'SAP Finance | Requirement Gathering | Business Process Modelling | Workshop Facilitation | Testing | User Training',
            date: 'April 2017 - July 2019', 
        },
        {
            category: 'school',
            title: 'Bachelor of Science',
            subtitle: 'Sophia University, Japan',
            tasks: '',
            date: 'April 2012 - March 2017', 
        },
    ]

export function History() {
    return (
        <Container className="section-container">
            <h2 className="section-title">Work Experience & Education</h2>
            <VerticalTimeline>
                {contents.map( (content, index) => {
                    return (
                        <VerticalTimelineElement
                            key={index}
                            className="vertical-timeline-element--work"
                            date={content.date}
                            iconStyle={content.category==='work'?{ background: 'rgb(33, 150, 243)', color: '#fff' }
                            :{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                            icon={content.category==='work'?<IoBriefcase />:<IoSchool />}
                        >
                            <h3 className="vertical-timeline-element-title">{content.title}</h3>
                            <h4 className="vertical-timeline-element-subtitle" style={{ color: 'grey' }}>{content.subtitle}</h4>
                            <p>{content.tasks}</p>
                        </VerticalTimelineElement>
                    )                
                })}
            <VerticalTimelineElement
                iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                icon={<IoRocketSharp />}
            />
            </VerticalTimeline>       
        </Container>
    )
}
