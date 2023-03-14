import React from 'react'
import { Link } from 'react-router-dom'
import './err.css'
const Error = () => {
    return (
        <div className='error-container'>
            <div className="error-title">
                <h1> <span className='error'>OOPS!!</span> Error 404</h1>
            </div>
            <div className="error-content">
                <p>You found our error page</p>
                <button className='redirect'>
                    <Link className='redirect' to='/'>Go Back Home</Link>
                </button>
            </div>
        </div>
    )
}

export default Error
