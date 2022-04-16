import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Login.css'

const Login = () => {

    const [userDetails, setUserDetails] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({
        email: '',
        password: '',
        others: ''
    });

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        hookError,
    ] = useSignInWithEmailAndPassword(auth);

    const handleEmail = (e) => {
        const emailRegex = /\S+@\S+\.\S+/;
        const emailValue = emailRegex.test(e.target.value);
        if (emailValue) {
            setUserDetails({ ...userDetails, email: e.target.value });
            setErrors({ ...errors, email: '' });
        }
        else {
            setErrors({ ...errors, email: 'Invalid Email' });
            setUserDetails({ ...userDetails, email: '' });
        }
    }

    const handlePassword = (e) => {
        const passwordRegex = /.{6,}/;
        const passwordValue = passwordRegex.test(e.target.value);
        if (passwordValue) {
            setUserDetails({ ...userDetails, password: e.target.value });
            setErrors({ ...errors, password: '' });
        }
        else {
            setErrors({ ...errors, password: 'Atleast provide 6 characters' });
            setUserDetails({ ...userDetails, password: '' });
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(userDetails.email, userDetails.password);
    }

    // useEffect(() => {

    // },[hookError]);

    return (
        <div className='hero-section bg-black text-white'>
            <div className='container'>
                <Form onSubmit={handleSubmit} className='bg-dark mx-auto px-4 py-5 from-bg rounded-3' style={{ width: '400px' }}>
                    <h2 className='text-danger mb-3 text-center'>Login</h2>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onChange={handleEmail} type="email" placeholder="Enter email" />
                        {errors?.email && <Form.Text className="text-danger">{errors?.email}</Form.Text>}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={handlePassword} type="password" placeholder="Password" />
                        {errors?.password && <Form.Text className="text-danger">{errors?.password}</Form.Text>}
                    </Form.Group>
                    {hookError && <Form.Text className="text-danger">{hookError?.message}</Form.Text>}
                    {loading && <Form.Text className="text-white">Loading...</Form.Text>}
                    <button className='btn btn-lg btn-outline-danger w-100 mt-4' type="submit">Login</button>
                    <p className='text-center'>Don't have an account?  <Link className='text-decoration-none text-danger' to='/signup'>Signup now</Link></p>
                </Form>
            </div>
        </div>
    );
};

export default Login;