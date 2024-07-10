import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
import Modal from '../Modal/Modal';

const LoginForm = ({ show, setShowLogin, setShowSignup, handleClose, setUser }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');  
        try {
            const response = await axios.post('http://localhost:5000/api/users/routes/login', { email, password });
            const token = response.data.token;
            localStorage.setItem('token', token);
            setUser(response.data.user);
            handleClose(); 
            window.location.reload();
        } catch (err) {
            console.error('Login error:', err);
            if (err.response) {
                setError(err.response.data.message);
            } else if (err.request) {
                setError('Server not responding. Please try again later.');
            } else {
                setError('An unexpected error occurred. Please try again.');
            }
        }
    };

    return (
        <Modal show={show} handleClose={handleClose}>
            <div className="auth-container">
                <h2>Log In</h2>
                {error && <p className="error">{error}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="auth-button">Log In</button>
                </form>
                <div className='no-account'>Don't have an account
                    <span onClick={() => { setShowLogin(false); setShowSignup(true); }}> SignUp</span></div>
            </div>
        </Modal>
    );
};

export default LoginForm;
