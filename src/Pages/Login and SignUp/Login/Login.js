import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        hookError,
      ] = useSignInWithEmailAndPassword(auth);

    const handleEmail = (e) => {
        const emailRegex = /\S+@\S+\.\S+/;
        emailRegex.test(e.target.value) ? setEmail(e.target.value) : setError('Invalid Email');
    }

    const handlePassword = (e) => {
        const passwordRegex = /.{6,}/;
        passwordRegex.test(e.target.value) ? setPassword(e.target.value) : setError('Invalid Password');
        setPassword(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(email, password);
    }
    return (
        <div className='hero-section bg-black text-white'>
            <div className='container'>
                <Form onSubmit={handleSubmit} className='bg-dark mx-auto px-4 py-5 from-bg rounded-3' style={{ width: '400px' }}>
                    <h2 className='text-danger mb-3 text-center'>Login</h2>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onChange={handleEmail} type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={handlePassword} type="password" placeholder="Password" />
                    </Form.Group>
                    {error && <p className='text-danger'>{error}</p>}
                    {hookError && <p className='text-danger'>{hookError?.message}</p>}
                    <button className='btn btn-lg btn-outline-danger w-100 mt-4' type="submit">Login</button>
                </Form>
            </div>
        </div>
    );
};

export default Login;