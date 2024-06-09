import React from 'react';
import './WelcomeSection.css';

const WelcomeSection = () => {
  return (
    <section className="section">
      <div className="content">
        <h1 className="headline font-Itim">Welcome to TalemtQ Employee Management Portal</h1>
        <h2 className="subheadline">
          Streamline Your Work Experience with Our Comprehensive Management Tools
        </h2>
        <p className="description">
          Our platform provides everything you need to manage your work life efficiently, from onboarding and HR administration to performance tracking and career development.
        </p>
        <div className="button-container">
          <button className="primary-button">Get Started</button>
          <button className="secondary-button">Learn More</button>
        </div>
      </div>
      <img className="hero-image" src="https://i.ibb.co/znjs0Jv/freepik-export-20240609131120-OJw2.png" alt="Welcome" />
    </section> 
     
  );
};

export default WelcomeSection;
