import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password);
    }
    return (
        <div className='hero-section bg-black text-white'>
            <div className='container'>
                <Form onSubmit={handleSubmit} className='bg-dark mx-auto px-4 py-5 from-bg rounded-3' style={{ width: '400px' }}>
                    <h2 className='text-danger mb-3 text-center'>Login</h2>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={handlePassword} type="password" placeholder="Password" />
                    </Form.Group>
                    <button className='btn btn-lg btn-danger w-100 mt-4' type="submit">Login</button>
                </Form>
            </div>
        </div>
    );
};

export default Login;