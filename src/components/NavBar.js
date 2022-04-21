import React from 'react'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import './CartWidget'
import CartWidget from './CartWidget';

export default function NavBar() {
  return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Green Submerged</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="">Nosotros</Nav.Link>
                <Nav.Link href="">Concurso</Nav.Link>
                <NavDropdown title="Tienda" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Acuarios UltraGlass</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Flora Tropical</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Fauna Tropical</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Marinos</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <CartWidget/>
              </Nav>
              <Nav>
                <Nav.Link href="">Social Media</Nav.Link>
                <Nav.Link href="">Contacto</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
  );
}
