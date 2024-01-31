import React from "react";
import { Navbar, Nav, Container, Image } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const NavBar = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand>
                        <Image src="images/deliciousPizza.jpg" alt="Logo Pizza Delicious" style={{width: '20%'}} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-bar" />
                    <Navbar.Collapse id="responsive-navbar-bar">
                        <Nav className="ms-auto">
                            <LinkContainer to="/login">
                                <Nav.Link>Login</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/cart">
                                <Nav.Link>Cart</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default NavBar;
