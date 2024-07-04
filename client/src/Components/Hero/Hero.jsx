import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>Bridging Games and Academics</h1>
                <p>Your gateway to excelling in both sports and studies</p>
                <div className="hero-buttons">
                    <Link to="/learn-more" className="btn btn-secondary">Learn More</Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;