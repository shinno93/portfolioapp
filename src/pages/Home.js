import React from "react";
import { History } from './History';
import { Projects } from './Projects';
import { Landing } from './Landing';
import { Skills } from './Skills';
import { IoCodeSlash } from "react-icons/io5";


/* landing page */
export default function Home() {
    return (
        <div>
            <Landing />
            <div style={{textAlign: 'center', color:'white'}}>
                <IoCodeSlash style={{"fontSize":'4em'}}/>
            </div>
            <Projects />
            <div style={{textAlign: 'center', color:'white'}}>
                <IoCodeSlash style={{"fontSize":'4em'}}/>
            </div>
            <Skills />
            <div style={{textAlign: 'center', color:'white'}}>
                <IoCodeSlash style={{"fontSize":'4em'}}/>
            </div>
            <History />
        </div>
    )
}