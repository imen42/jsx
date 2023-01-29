import React from 'react'
import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { BsMicFill , BsCameraVideo , } from 'react-icons/bs';
import { AiOutlineBell } from "react-icons/ai";

const HeaderNav = () => {
  return (
    <div><Navbar bg="light" expand="lg">
    <Container fluid>
      <Navbar.Brand href="#"> <img height="60px" width="auto" src='https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg' alt=''/> </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
                  <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
        <Nav.Link href="#action1">
          {" "}
           <BsMicFill /> 
           {" "}
           </Nav.Link>
        <Nav.Link href="#action2"><BsCameraVideo/></Nav.Link>
        <Nav.Link href="#action3"><AiOutlineBell/></Nav.Link>

          <Nav.Link href="#" disabled>
          </Nav.Link>
         
          <NavDropdown title="Profile" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">login</NavDropdown.Item>
            <NavDropdown.Item href="#action4">
             historique
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              watch later
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>

      </Navbar.Collapse>
    </Container>
  </Navbar></div>
  )
}

export default HeaderNav