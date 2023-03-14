import React from 'react'
import { Link } from 'react-router-dom'
import './login.css'


const Login = () => {
    return (
        <div className='Login'>
            <div className="form">
                <h1 className="title">
                    Login to your account
                </h1>
                <form className='login-form'>
                    <input className='auth' type="text" placeholder='Email' />
                    <input type="password" placeholder='Password' className='auth' />
                    <button type='submit' className='submit btn'>Login</button>
                </form>
                <p className='message'>
                    not registered? <Link to='/signup'>Create an account</Link>
                </p>
            </div>
        </div>
    )
}

export default Login
