import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../Loading';
import './Login.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    // login user with email and password
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        hookError,
    ] = useSignInWithEmailAndPassword(auth);
    // login user with google
    const [
        signInWithGoogle,
        googleUser,
        googleLoading,
        GoogleError
    ] = useSignInWithGoogle(auth);

    // reset password
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
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
    // login user
    const handleSubmit = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(userDetails.email, userDetails.password);
    }
    //  reset password condition
    const resetPassword = async () => {
        if (userDetails.email) {
            await sendPasswordResetEmail(userDetails.email);
            toast('Sent email');
        }
        else {
            toast('Please enter email');
        }

    }
    // redirect to checkout page
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

    useEffect(() => {
        if (user) {
            navigate(from)
        }
    }, [user, googleUser]);

    const error = hookError || GoogleError;
    const allLoading = loading || googleLoading;

    return (
        <div className='hero-section bg-black text-white'>
            <div className='container'>
                <div className='bg-dark mx-auto px-4 py-5 from-bg rounded-3' style={{ width: '400px' }}>
                    <Form onSubmit={handleSubmit}>
                        <h2 className='text-danger mb-3 text-center'>Sign in</h2>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control onChange={handleEmail} type="email" placeholder="Enter email" required />
                            {errors?.email && <Form.Text className="text-danger">{errors?.email}</Form.Text>}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onChange={handlePassword} type="password" placeholder="Password" required />
                            {errors?.password && <Form.Text className="text-danger">{errors?.password}</Form.Text>}
                        </Form.Group>
                        {error && <Form.Text className="text-danger">{error?.message}</Form.Text>}
                        {allLoading && <Form.Text className="text-white"><Loading /></Form.Text>}
                        <button className='btn btn-lg btn-outline-danger w-100 mt-4' type="submit">Sign in</button>
                        <p className='text-center'>Don't have an account?  <Link className='text-decoration-none text-danger' to='/signup'>Signup now</Link></p>
                        <p className='text-center'>Forget password?<button className='btn btn-link text-decoration-none text-danger' onClick={resetPassword}>Reset</button></p>
                    </Form>
                    <div style={{ display: 'flex' }}>
                        <p className='lines'></p>
                        <p>or</p>
                        <p className='lines'></p>
                    </div>
                    <div className='d-flex justify-content-center mt-1'>
                        <button className='btn btn-lg btn-danger w-100' onClick={() => signInWithGoogle()}>Google Sign in</button>
                    </div>
                </div>
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

export default Login;