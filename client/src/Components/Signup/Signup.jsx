import React, { useState } from 'react';
import axios from 'axios';
import validator from 'validator';
import './Signup.css';
import Modal from '../Modal/Modal';

const SignupForm = ({ show, setShowSignup, setShowLogin, handleClose, setUser }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [gender, setGender] = useState('');
    const [role, setRole] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [error, setError] = useState('');

    const validateForm = () => {
        if (!username || !email || !password || !confirmPassword || !dateOfBirth || !gender || !phoneNumber) {
            setError('All fields are required');
            return false;
        }
        if (!validator.isEmail(email)) {
            setError('Invalid email format');
            return false;
        }
        if (!validator.isMobilePhone(phoneNumber)) {
            setError('Invalid phone number');
            return false;
        }
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return false;
        }
        if (!validator.isStrongPassword(password)) {
            setError('Password must be strong');
            return false;
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;
        try {
            const response = await axios.post('http://localhost:5000/api/users/routes/signup', {
                username,
                email,
                password,
                dateOfBirth,
                role,
                gender,
                phoneNumber
            });
            const token = response.data.token;
            localStorage.setItem('token', token);
            setUser(response.data.user);
            handleClose();
            window.location.reload();
        } catch (err) {
            setError(err.response.data.message);
        }
    };

    return (
        <Modal show={show} handleClose={handleClose}>
            <div className="auth-container">
                <h2>Sign Up</h2>
                {error && <p className="error">{error}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Username:</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
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
                    <div className="form-group">
                        <label>Confirm Password:</label>
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Date of Birth:</label>
                        <input
                            type="date"
                            value={dateOfBirth}
                            onChange={(e) => setDateOfBirth(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Role:</label>
                        <select
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            required
                        >
                            <option value="">Select Role</option>
                            <option value="student">Student</option>
                            <option value="mentor">Mentor</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Gender:</label>
                        <select
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                            required
                        >
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Phone Number:</label>
                        <input
                            type="text"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="auth-button">Sign Up</button>
                </form>
                <div className='no-account'>Already have an account <span onClick={() => { setShowSignup(false); setShowLogin(true); }}> LogIn</span></div>
            </div>
        </Modal>
    );
};

export default SignupForm;
