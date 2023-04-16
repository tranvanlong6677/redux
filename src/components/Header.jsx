import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useSelector } from "react-redux";
const Header = () => {
  const listUsers = useSelector((state) => state.user.listUsers);
  return (
    <div>
      <Navbar bg="light" expand="lg" className="mb-5">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown
                title={`(${listUsers.length}) users`}
                id="basic-nav-dropdown"
              >
                {listUsers &&
                  listUsers.length > 0 &&
                  listUsers.map((item) => {
                    return (
                      <NavDropdown.Item href="#action/3.1">
                        {item.username}
                      </NavDropdown.Item>
                    );
                  })}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
