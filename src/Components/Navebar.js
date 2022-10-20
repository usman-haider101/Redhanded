import React from 'react'
import { Nav, Navbar, Container, NavDropdown, MenuItem, Tabs, ButtonToolbar, Button, Table, ButtonGroup, Row, Col, Grid, Panel, FormGroup, FormControl } from 'react-bootstrap';
import '../App.css'
const Navebar = () => {
  return (
    <Navbar className='fixed-top' bg="light" expand="lg">
      <Container>


        <Navbar.Brand className='brand' href="#home"><h2>REDHANDED</h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto justify-content-around">
            <Nav.Link href="#home" className='navlink px-4'>About</Nav.Link>
            <Nav.Link href="#link" className='navlink px-4'>Blog</Nav.Link>
            <Nav.Link href="#link" className='navlink px-4'>Partners</Nav.Link>
            <Nav.Link href="#link" className='navlink px-4'>Pricing</Nav.Link>
            <div className='header-btn d-flex  align-items-start'>
              <Button className='font-size signin me-2 '>Log In</Button>
              <Button className='font-size  btn-dark '>Sign up</Button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navebar
