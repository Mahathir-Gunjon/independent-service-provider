import React from 'react';
import { Form } from 'react-bootstrap';

const Login = () => {
    return (
        <div className='hero-section bg-black text-white'>
            <div className='container'>
            <Form className='mx-auto bg-dark p-4 mt-5 rounded-3' style={{width: '400px'}}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <button className='btn btn-lg btn-danger d-md-block' type="submit">Login</button>
            </Form>
        </div>
        </div>
    );
};

export default Login;