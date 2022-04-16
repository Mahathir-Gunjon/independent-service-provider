import React from 'react';
import { Container, Nav, Navbar, } from 'react-bootstrap';
import CustomLink from '../NavLinks/NavLinks';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" className='py-4 sticky-top'>
            <Container>
                <Navbar.Brand className='text-white fs-4 fw-bolder'><span className='text-danger'>Sz</span> Photograps</Navbar.Brand>
                <Navbar.Toggle className='text-danger' aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <CustomLink className='text-decoration-none px-3 fs-5 fw-normal' to="/">Home</CustomLink>
                        <CustomLink className='text-decoration-none px-3 fs-5 fw-normal' to='/about'>About</CustomLink>
                        <CustomLink className='text-decoration-none px-3 fs-5 fw-normal' to='/blogs'>Blogs</CustomLink>
                        <CustomLink className='text-decoration-none px-3 fs-5 fw-normal' to='/login'>Login</CustomLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;