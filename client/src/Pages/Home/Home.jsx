import React from 'react'
import Hero from '../../Components/Hero/Hero'
import Features from '../../Components/Features/Features'
import Contact from '../Contact/Contact'
import Testimonials from '../../Components/Testimonials/Testimonials'

const Home = () => {
    return (
        <div>
            <Hero />
            <div id="features">
                <Features />
            </div>
            <div id="testimonials">
                <Testimonials />
            </div>
            <div id="contact">
                <Contact />
            </div>
        </div>
    )
}

export default Home