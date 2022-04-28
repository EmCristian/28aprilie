import React from 'react'
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export default function NavigationBar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand as={Link} to='/home'>Simple React App</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={Link} to='/dashboard'>Dashboard</Nav.Link>
      <Nav.Link as={Link} to='/login'>Log in</Nav.Link>
      <Nav.Link as={Link} to='/register'>Register</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">Github</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Twitter
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    )
}