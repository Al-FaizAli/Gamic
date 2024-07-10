import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/GamicLogo.jpg';
import LoginForm from '../Login/Login';
import SignupForm from '../Signup/Signup';
import axios from 'axios';

const Navbar = () => {
    const [showLogin, setShowLogin] = useState(false);
    const [showSignup, setShowSignup] = useState(false);
    const [user, setUser] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const fetchUserData = async () => {
                try {
                    const response = await axios.get('http://localhost:5000/api/users/me', {
                        headers: { Authorization: `Bearer ${token}` }
                    });
                    setUser(response.data);
                } catch (err) {
                    console.error('Error fetching user data:', err);
                }
            };
            fetchUserData();
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        setUser(null);
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="header">
            <div className="logo">
                <Link to="/">
                    <img src={logo} alt="GAMIC Logo" />
                </Link>
                <p>GAMIC</p>
            </div>
            <nav className={`nav-menu ${isOpen ? 'open' : ''}`}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><a href="#features">Features</a></li>
                    <li><a href="#contact">Contact</a></li>
                    {user ? (
                        <>
                            <li>Hello, {user.username}</li>
                            <li><button onClick={handleLogout} className="login-button">Logout</button></li>
                        </>
                    ) : (
                        <li><button onClick={() => setShowLogin(true)} className="login-button">Log In</button></li>
                    )}
                </ul>
            </nav>
            <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            {showLogin && <LoginForm show={showLogin} setShowLogin={setShowLogin} setShowSignup={setShowSignup} handleClose={() => setShowLogin(false)} setUser={setUser} />}
            {showSignup && <SignupForm show={showSignup} setShowSignup={setShowSignup} setShowLogin={setShowLogin} handleClose={() => setShowSignup(false)} setUser={setUser} />}
        </header>
    );
};

export default Navbar;
