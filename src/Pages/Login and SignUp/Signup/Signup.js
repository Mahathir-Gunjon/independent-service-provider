import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Signup.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {

    const [userDetails, setUserDetails] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [errors, setErrors] = useState({
        email: '',
        password: '',
        others: ''
    });
    // create user with email and password
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        hookError,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    // email here
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
    // password here
    const handlePassword = (e) => {
        const passwordRegex = /.{6,}/;
        const passwordValue = passwordRegex.test(e.target.value);
        if (passwordValue) {
            setUserDetails({ ...userDetails, password: e.target.value });
            setErrors({ ...errors, password: '' });
        }
        else {
            setErrors({ ...errors, password: 'At least provide 6 characters' });
            setUserDetails({ ...userDetails, password: '' });
        }
    }
    // confirm password
    const handleConfirmPassword = (e) => {

        if (e.target.value === userDetails.password) {
            setUserDetails({ ...userDetails, confirmPassword: e.target.value });
            setErrors({ ...errors, password: '' });
        }
        else {
            setErrors({ ...errors, password: 'not matched' });
            setUserDetails({ ...userDetails, confirmPassword: '' });
        }
    }
    // from here
    const handleSubmit = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(userDetails.email, userDetails.password);
    }
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

    useEffect(() => {
        if (user) {
            navigate(from)
            // toast.success for success;
            toast('???? Wow so easy!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }
    }, [user]);

    return (
        <div className='hero-section bg-black text-white'>
            <div className='container'>
                <Form onSubmit={handleSubmit} className='bg-dark mx-auto px-4 py-5 from-bg rounded-3' style={{ width: '400px' }}>
                    <h2 className='text-danger mb-3 text-center'>Signup</h2>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onChange={handleEmail} type="email" placeholder="Enter email" required />
                        {errors?.email && <Form.Text className="text-danger">{errors?.email}</Form.Text>}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={handlePassword} type="password" placeholder="Password" required />
                        {errors?.password && <Form.Text className="text-danger">{errors?.password}</Form.Text>}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formConfirmPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control onChange={handleConfirmPassword} type="password" placeholder="Confirm Password" required />
                        {errors?.password && <Form.Text className="text-danger">{errors?.password}</Form.Text>}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Accept terms and conditions" />
                    </Form.Group>
                    {hookError && <Form.Text className="text-danger">{hookError?.message}</Form.Text>}
                    {loading && <Form.Text className="text-white">Loading...</Form.Text>}
                    <button className='btn btn-lg btn-outline-danger w-100 mt-4' type="submit">Sign Up</button>
                    <p className='text-center'>Already signed up?  <Link className='text-decoration-none text-danger' to='/login'>Login now</Link></p>
                </Form>
                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            </div>
        </div>
    );
};

export default Signup;