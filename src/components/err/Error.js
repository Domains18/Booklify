import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <div className='error-container'>
            <div className="error-title">
                <h1>Errror 404</h1>
            </div>
            <div className="error-content">
                <p>Sorry, the page you are looking for does not exist.</p>
                <button className='redirect'>
                    <Link to='/'>Go to Home</Link>
                </button>
            </div>
        </div>
    )
}

export default Error
