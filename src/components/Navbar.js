import React from 'react'
import {Navbar,Container,Nav} from 'react-bootstrap';
import "./Navbar.css";


function navbar() {
    return (
        <div >
        <Navbar bg="dark" variant="dark" className="header">
        <Container className="Cont">
            <Navbar.Brand className="txt">ColourPicker</Navbar.Brand>
            <Nav className="d-flex row-reverse">
            
            <Nav.Link >Group G</Nav.Link>
            </Nav>
        </Container>
        </Navbar>
        </div>
    )
}

export default navbar
