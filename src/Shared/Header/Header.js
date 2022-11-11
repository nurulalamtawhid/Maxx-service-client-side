import React from 'react';
import logo from '../../Asset/logo/cover3.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';

import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
    <Navbar collapseOnSelect expand="lg" className='bg-indigo-100' >
      <Container>
        <Navbar.Brand >
        <Link to={'/'}
                            className='mt'
                        >
                            <img
                                src={logo}
                                width="120"
                                height="40"
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                            />

                        </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href=""><Link to='/' className='text-black no-underline'>Home</Link></Nav.Link>
            <Nav.Link href="">
              <Link to='/services' className='text-black no-underline'>Services</Link>
            </Nav.Link>
            
          </Nav>
          <Nav>
            <Nav.Link href="#deets" className=''>LogIn</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              SignUp
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

            
            
        </div>
    );
};

export default Header;