import React from 'react';
import './App.css';
import Header from './Header'; // Make sure to import your Header component
import HeroSection from './HeroSection'; // Make sure to import your HeroSection component

function App() {
  return (
    <div className="App">
      <Header /> 
      <HeroSection/>
    </div>
  );
}

export default App;
