import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import './App.css'
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Footer from './Components/Footer/Footer';
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/mentorship" element={<Mentorship />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/logout" element={<Logout />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
