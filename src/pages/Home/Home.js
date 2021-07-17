import './Home.css';
import React from 'react';
import { History } from '../History';
import { Projects } from '../Projects/Projects';
import { Landing } from '../Landing/Landing';
import { Skills } from '../Skills/Skills';
import { IoCodeSlash } from 'react-icons/io5';


/* landing page */
export default function Home() {
    return (
        <div>
            <Landing />
            <div className="separator-icon">
                <IoCodeSlash/>
            </div>
            <Projects />
            <div className="separator-icon">
                <IoCodeSlash/>
            </div>
            <Skills />
            <div className="separator-icon">
                <IoCodeSlash/>
            </div>
            <History />
        </div>
    )
}