import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import './App.css';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import AboutUsSection from './components/AboutUsSection/AboutUsSection';
import CategoriesSection from './components/CategoriesSection/CategoriesSection';
import ContactForm from './components/ContactForm/ContactForm';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/about" element={<AboutUsSection />} />
          <Route path="/categories" element={<CategoriesSection />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
