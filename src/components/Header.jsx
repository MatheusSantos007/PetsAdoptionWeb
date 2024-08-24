import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, NavDropdown } from 'react-bootstrap';
import './Header.css';

const Header = () => (
  <Navbar bg="light" expand="lg" className="header-navbar">
    <Navbar.Brand href="#home">
      <img src="https://media.istockphoto.com/id/1366789511/pt/vetorial/pet-icon-illustration.jpg?s=1024x1024&w=is&k=20&c=W40D1SN_O7CSfiVZ1yqfqdSRIhOY4HBppoSYWnYpovE=" alt="PetsAdoption Logo" width="40" height="40" className="d-inline-block align-top" />
      <span className="navbar-brand-text">PetsAdoption</span>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#about">Sobre</Nav.Link>
        <NavDropdown title="Mais" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Ação</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Outra ação</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.3">Algo mais aqui</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Form className="inline-form">
        <FormControl type="text" placeholder="Pesquisar" className="mr-sm-2" />
        <Button variant="outline-success">Pesquisar</Button>
      </Form>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
