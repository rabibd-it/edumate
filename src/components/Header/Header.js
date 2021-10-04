import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../logo.png';

const Header = () => {
    return (
        <div>
            {/* Main Menu */}
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand className="d-flex align-items-center">
                        <img
                            src={logo}
                            width="50"
                            height="50"
                            className="d-inline-block align-top"
                            alt="Eud Mate"
                        />
                        <span>EDU MATE</span>
                    </Navbar.Brand>

                    <Nav className="me-auto text-uppercase">
                        <NavLink exact to="/" activeClassName="active" className="nav-link">Home</NavLink>
                        <NavLink to="/about" activeClassName="active" className="nav-link">About Us</NavLink>
                        <NavLink to="/courses" activeClassName="active" className="nav-link">Courses</NavLink>
                        <NavLink to="/contact" activeClassName="active" className="nav-link">Contact Us</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;