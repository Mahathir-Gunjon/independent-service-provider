import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import CustomLink from '../NavLinks/NavLinks';

const Header = () => {
    const [user] = useAuthState( auth );

    const handleLogout = () => {
        signOut(auth)
    }
    return (
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" className='py-2 sticky-top'>
            <Container>
                <Navbar.Brand className='text-white fs-2 fw-bolder'><span className='text-danger'>Sz</span> Photograps</Navbar.Brand>
                <Navbar.Toggle className='text-danger' aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <CustomLink className='text-decoration-none px-3 fs-5 fw-normal' to="/">Home</CustomLink>
                        <CustomLink className='text-decoration-none px-3 fs-5 fw-normal' to='/about'>About</CustomLink>
                        <CustomLink className='text-decoration-none px-3 fs-5 fw-normal' to='/blogs'>Blogs</CustomLink>
                        <CustomLink className='text-decoration-none px-3 fs-5 fw-normal' to='/checkout'>CheckOut</CustomLink>
                        {
                          user ? <button className='btn btn-sm btn-danger' onClick={handleLogout}>Logout</button> : <CustomLink className='text-white btn btn-sm btn-danger' to='/login'>Login</CustomLink>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;