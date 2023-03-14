import React from 'react'
import { Link } from 'react-router-dom'



const Register = () => {
    return (
        <div className='Login'>
            <div className="form">
                <h1 className="title">
                    Welcome to Booklify
                </h1>
                <form className='login-form'>
                    <input className='auth' type="text" placeholder='Full Names' />
                    <input className='auth' type="text" placeholder='Email' />
                    <input type="password" placeholder='Password' className='auth' />
                    <input type="password" placeholder=' Confirm Password' className='auth' />
                    <button type='submit' className='submit btn' >Register</button>
                </form>
                <p className='message'>
                    Have an account? <Link to='/login'>Login</Link>
                </p>
            </div>
        </div>
    )
}

export default Register
