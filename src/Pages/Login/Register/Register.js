import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css'

const Register = () => {

    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate(`/login`)
    }

    const handleRegister = event => {
        event.preventDefault();
        //  console.log(event.target.email.value)
        console.log(event.target.password.value)
    }

    return (
        <div className='register-form'>
            <h2 style={{ textAlign: 'center' }}>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text " name='name' id='' placeholder='your name' />
                <input type="email" name="email" id="" placeholder='email address' required />
                <input type="password" name="password" id="" placeholder='your password' required />
                <input type="submit" value="Register" />
            </form>
            <p>Already have an account? <span className='text-danger  ' style={{ cursor: 'pointer' }} onClick={navigateLogin}>Click Here to Login</span></p>
        </div>
    );
};

export default Register;