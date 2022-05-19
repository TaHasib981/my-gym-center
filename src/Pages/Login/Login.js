import React, { useRef } from 'react';
import './Login.css'
import { Button, Form, Toast } from 'react-bootstrap';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import google from '../../Images/google.png'
import github from '../../Images/github.png'
import { useSignInWithEmailAndPassword, useSendPasswordResetEmail} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Login = () => {
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending, error1] = useSendPasswordResetEmail( auth );

    const navigate = useNavigate()
    const location = useLocation()
    const handleLogin = (e) => {
        e.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value
        signInWithEmailAndPassword(email, password)
    }
    const from = location.state?.from?.pathname || "/";
    if (user) {
        navigate(from, { replace: true })
    }
    const handleResetPassword = async () => {
        const email = emailRef.current.value
        if(email){
            await sendPasswordResetEmail(email)
            toast('Sent email')
        }
        else{
            toast('enter a email')
        }

    }
    return (
        <div className='login-container'>
            <h1>Login</h1>
            <Form onSubmit={handleLogin} className="w-75 mx-auto ">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <p>Not Registered? <Link to="/signin" >create an account</Link></p>
                <p>forgot password? <button className='btn btn-link' onClick={handleResetPassword}>reset password</button></p>
                <ToastContainer/>
                <div className="or-div">
                    <div className="deash"></div>
                    <div className='or'>or</div>
                    <div className="deash"></div>
                </div>
            </Form>
            <button className="social-button">
                <img src={google} alt="" />
                continue with google</button><br />

            <button className="social-button">
                <img src={github} alt="" />
                continue with github</button>
        </div>
    );
};

export default Login;