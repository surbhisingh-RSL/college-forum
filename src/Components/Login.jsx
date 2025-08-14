import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

const Login = () => {
    return (
        <div className="login-container">
            <h2>Login</h2>
            <form>
                <div>
                    <label>Email:</label>
                    <input type="email" placeholder="Enter email" />
                </div>
                <br />
                <div>
                    <label>Password:</label>
                    <input type="password" placeholder="Enter password" />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>

    );
};

export default Login;