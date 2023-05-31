import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const Header = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
      <Container fluid>
      <img className='icon' src="../public/favicon.ico" alt="" /><h1 className='wikideas' href="#">WIKIDEAS</h1>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link><Link className="text-decoration-none text-dark mx-3" to='/'>Home</Link></Nav.Link>
            <Nav.Link><Link className="text-decoration-none text-dark mx-3" to='/Functions'>Funciones</Link></Nav.Link>
            <Nav.Link><Link className="text-decoration-none text-dark mx-3" to='/Team'>Team</Link></Nav.Link>
            <Nav.Link><Link className="text-decoration-none text-dark mx-3" to='/Team'>IA Software</Link></Nav.Link>
            <Nav.Link className="text-decoration-none text-dark mx-5" href="https://idforideas.com" target={'_blank'}>ID for Ideas</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <img className='image_wikideas' src="./img/wikideas.png" alt="" />
    </div>
  )
}
