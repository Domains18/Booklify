import React from 'react'
import { Link } from 'react-router-dom'
import './err.css'
const Error = () => {
    return (
        <div className='error-container'>
            <div className="error-title">
                <h1>Error 404</h1>
            </div>
            <div className="error-content">
                <p>Sorry, the page you are looking for does not exist.</p>
                <button className='redirect'>
                    <Link className='redirect' to='/'>Go Back Home</Link>
                </button>
            </div>
        </div>
    )
}

export default Error
