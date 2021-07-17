import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Projects } from "../pages/Projects/Projects";
import { History } from "../pages/History";
import { Skills } from "../pages/Skills/Skills";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage";
import { Navbar, Nav } from "react-bootstrap";
import Logo from "../images/favicon-32x32.png";

/* Nav bar */
export function Header() {
  
  return (
    <div>
        <Router>
            <div>
                <Navbar bg="light" expand="lg">
                    <LinkContainer to="/">
                    <Navbar.Brand>
                        <img src={Logo} className="d-inline-block align-top" alt="Stock Market Portal logo"></img>
                        Xinruo's Portfolio
                    </Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <LinkContainer exact to="/">
                        <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/projects">
                        <Nav.Link>Projects</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/skills">
                        <Nav.Link>Skills</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/history">
                        <Nav.Link>Work History</Nav.Link>
                        </LinkContainer>
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
            <div>
                <Switch>
                    <Route path="/history">
                        <History />
                    </Route>
                    <Route path="/skills">
                        <Skills />
                    </Route>
                    <Route exact path="/projects">
                        <Projects />
                    </Route>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route>
                        <ErrorPage errorCode={"404 - Not Found"} errorMessage={"The page you are looking for does not exist."}
                        linkRoot="/" rootName="Go Home"/>
                    </Route>
                </Switch>      
            </div>
        </Router>
    </div>
  )}