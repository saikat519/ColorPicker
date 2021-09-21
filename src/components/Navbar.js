import React from 'react'
import {Navbar,Container,Nav} from 'react-bootstrap';
import "./Navbar.css";


function navbar() {
    return (
        <>
        <Navbar className="color-nav">
        <Container className="nav-container">
            <h3 className="logo">ColourPicker</h3>
            <Nav className="d-flex row-reverse">
            
            <h3 className="about">Group G</h3>
            </Nav>
        </Container>
        </Navbar>
        </>
    )
}

export default navbar
