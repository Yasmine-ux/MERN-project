import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import {NavDropdown, Nav} from 'react-bootstrap'

class Navmenu extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">HOMIES</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/home">Home</Nav.Link>
      <NavDropdown title="Our Serices" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Home Help</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Garden and Outdoor</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Plumbing and Painting</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Health and Beauty</NavDropdown.Item>
        <NavDropdown.Divider />
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="/">Register</Nav.Link>
      <Nav.Link eventKey={2} href="/">
        Login
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        {/* <nav className="z-depth-0">
          <div className="nav-wrapper white">
            <Link
              to="/"
              style={{
                fontFamily: "monospace"
              }}
              className="col s5 brand-logo center black-text"
            >
              <i className="material-icons">code</i>
              HOMIES
            </Link>
          </div>
        </nav> */}
      </div>
    );
  }
}
export default Navmenu;