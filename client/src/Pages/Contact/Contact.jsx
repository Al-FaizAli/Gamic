import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section className="contact">
            <div className="container">
                <h2 className="contact-title">Get in Touch</h2>
                <div className="contact-content">
                    <div className="contact-info">
                        <h3>Contact Information</h3>
                        <p>If you have any questions, feel free to reach out to us!</p>
                        <ul>
                            <li><strong>Address:</strong> 123 Main Street, Kolkata, India</li>
                            <li><strong>Phone:</strong> +91 12345 67890</li>
                            <li><strong>Email:</strong> info@gamic.com</li>
                        </ul>
                    </div>
                    <div className="contact-form">
                        <h3>Contact Form</h3>
                        <form>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" name="name" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" name="message" rows="5" required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
