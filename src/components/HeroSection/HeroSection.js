import React from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import './HeroSection.css'; // Make sure to have your CSS file with the styles

const HeroSection = () => {
  const onVisibilityChange = isVisible => {
    if (isVisible) {
    }
  };

  return (
    <section className="hero">
      <h1>Crafting Excellence in Every Thread</h1>
      <h2>Elevate Your Brand with Our Premium Uniforms</h2>
      <div className="statistics">
        <VisibilitySensor onChange={onVisibilityChange} offset={{ top: 10 }} delayedCall>
          <div className="stat-item">
            <CountUp end={17} duration={25} />
            <br></br>
            <span className="stat-text"> More than years in industry </span>
          </div>
        </VisibilitySensor>
        <VisibilitySensor onChange={onVisibilityChange} offset={{ top: 10 }} delayedCall>
          <div className="stat-item">
            <CountUp end={255000} duration={25} />
            <br></br>
            <span className="stat-text">Coustmer Served and Counting</span>
          </div>
        </VisibilitySensor>
        <VisibilitySensor onChange={onVisibilityChange} offset={{ top: 10 }} delayedCall>
          <div className="stat-item">
            <CountUp end={100} duration={25} />
            <br></br>
            <span className="stat-text">schools partnered</span>
          </div>
        </VisibilitySensor>
      </div>
    </section>
  );
};

export default HeroSection;
