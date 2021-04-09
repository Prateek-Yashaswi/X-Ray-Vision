import React from 'react';
import { NavLink } from 'react-router-dom';
import './Mynav.css';
import * as ReactBootStrap from 'react-bootstrap';

function Mynav() {
    return (
        <ReactBootStrap.Navbar bg="dark" expand="lg" sticky="top">
            <ReactBootStrap.Navbar.Brand id="nav-brand">Rakathon 2021 : Team E.i.S</ReactBootStrap.Navbar.Brand>
            <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
            <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
                <ReactBootStrap.Nav className="ml-auto link-div">
                    <NavLink exact to='/' className='nav-link'><span className="nav-link-text">Home</span></NavLink>
                    <NavLink exact to='/content' className='nav-link'><span className="nav-link-text">X-Ray Vision</span></NavLink>
                    <NavLink exact to='/developers' className='nav-link'><span className="nav-link-text">Developers</span></NavLink>
                    <NavLink exact to='/technologies' className='nav-link'><span className="nav-link-text">Technologies Used</span></NavLink>
                    <NavLink exact to='/discussion' className='nav-link'><span className="nav-link-text">Discussion Forum</span></NavLink>
                </ReactBootStrap.Nav>
            </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Navbar>
    );
}

export default Mynav;