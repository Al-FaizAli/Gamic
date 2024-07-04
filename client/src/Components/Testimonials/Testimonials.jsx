import React from 'react';
import './Testimonials.css';
import img1 from '../../assets/testimg1.jpg'
import img2 from '../../assets/testimg2.jpeg'
import img3 from '../../assets/testimg3.webp'

const testimonialsData = [
    {
        name: 'John Doe',
        quote: 'GAMIC has transformed the way I balance sports and academics. Highly recommend it!',
        image: img1,
    },
    {
        name: 'Jane Smith',
        quote: 'The mentorship program is amazing. I have learned so much from my mentors.',
        image: img2,
    },
    {
        name: 'Sam Wilson',
        quote: 'I love how GAMIC helps me keep track of my schedule and progress.',
        image: img3,
    },
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="testimonials-section">
            <h2>What Our Users Say</h2>
            <div className="testimonials-container">
                {testimonialsData.map((testimonial, index) => (
                    <div key={index} className="testimonial">
                        <img src={testimonial.image} alt={`${testimonial.name}'s avatar`} />
                        <p className="quote">"{testimonial.quote}"</p>
                        <p className="name">- {testimonial.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
