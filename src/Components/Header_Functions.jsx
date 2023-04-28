import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export const Header_Functions = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <h1 className="wikideas" href="#">
            WIKIDEAS
          </h1>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link>
                <Link className="text-decoration-none text-dark mx-5" to="/">
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  className="text-decoration-none text-dark mx-5"
                  to="/Functions"
                >
                  Funciones
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  className="text-decoration-none text-dark mx-5"
                  to="/Team"
                >
                  Team
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  className="text-decoration-none text-dark mx-5"
                  to="/Team"
                >
                  IA Software
                </Link>
              </Nav.Link>
              <Nav.Link
                className="text-decoration-none text-dark mx-5"
                href="https://idforideas.com"
                target={"_blank"}
              >
                ID for Ideas
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
