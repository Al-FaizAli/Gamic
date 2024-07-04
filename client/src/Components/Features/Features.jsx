import React from 'react';
import './Features.css';

const Features = () => {
    return (
        <section className="features">
            <div className="container">
                <h2 className="features-title">Our Key Features</h2>
                <div className="features-grid">
                    <div className="feature-item">
                        <h3>Dashboard</h3>
                        <p>Get a comprehensive view of your activities, performance, and progress all in one place.</p>
                    </div>
                    <div className="feature-item">
                        <h3>Schedule</h3>
                        <p>Manage your sports and academic schedules efficiently with our integrated calendar.</p>
                    </div>
                    <div className="feature-item">
                        <h3>Progress Tracking</h3>
                        <p>Monitor your progress in both academics and sports with detailed analytics and insights.</p>
                    </div>
                    <div className="feature-item">
                        <h3>Mentorship</h3>
                        <p>Receive guidance and mentorship from experts to excel in both your academic and athletic pursuits.</p>
                    </div>
                    <div className="feature-item">
                        <h3>Profile Management</h3>
                        <p>Maintain and update your personal profile with achievements, goals, and preferences.</p>
                    </div>
                    <div className="feature-item">
                        <h3>Community</h3>
                        <p>Engage with a community of like-minded individuals to share experiences and grow together.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
