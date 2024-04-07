import React from 'react';
import './LoginForm.css'; // Import the CSS file for styling

// LoginForm component
const LoginForm = () => {
    return (
        <div className="login-form">
            <h3 className="login-heading">Log In</h3>
            <form>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default LoginForm;