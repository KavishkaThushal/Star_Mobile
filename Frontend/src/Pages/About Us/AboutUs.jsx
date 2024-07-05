import React from 'react';
import './AboutUs.css';
import { FaFacebook, FaTwitter } from 'react-icons/fa';

const highlights = [
  { title: 'Great experience', description: 'Strong knausgaard ugh hammock marfa vice kinfolk heirloom everyday carry. Dreamcatcher enamel pin kogi.' },
  { title: 'Quality guarantee', description: 'Strong knausgaard ugh hammock marfa vice kinfolk heirloom everyday carry. Dreamcatcher enamel pin kogi.' },
  { title: 'Customer support', description: 'Strong knausgaard ugh hammock marfa vice kinfolk heirloom everyday carry. Dreamcatcher enamel pin kogi.' }
];

const technicians = [
  { name: 'Daniel Pearce', image: '/src/assets/images/shashidu-profile.png' },
  { name: 'Theekshan', image: '/src/assets/images/theekshana-profile.png' },
  { name: 'Shahab', image: '/src/assets/images/shashidu-profile.png' }
];

const AboutUs = () => {
  return (
    <div className="about-us">
      <section className="header-section">
        <h1>About Us</h1>
      </section>
      
      <section className="intro-section">
        <div className="intro-image">
          <img src="/src/assets/images/repair.png" alt="Phone Repair" />
        </div>
        <div className="intro-text">
          <h2>We are NaplesPhone Repair</h2>
          <p>
            Good armadillo vulpes philosophy modest Victrola eternal-astern smartwatch dictionary small batch and yoga. Dreamcatcher cold-pressed enamel pin kogi.
          </p>
          <button>Read More</button>
        </div>
      </section>
      
      <section className="highlights-section">
        {highlights.map((highlight, index) => (
          <div className="highlight" key={index}>
            <h3>{highlight.title}</h3>
            <p>{highlight.description}</p>
          </div>
        ))}
      </section>
      
      <section className="technicians-section">
        <h2>Meet Our Technicians</h2>
        <p>Overcome faithful endless salvation enlightenment salvation overcome pious merciful osastic madness hotdish joy passion zenith.</p>
        <div className="technicians">
          {technicians.map((tech, index) => (
            <div className="technician" key={index}>
              <img src={tech.image} alt={tech.name} />
              <h4>{tech.name}</h4>
              <FaTwitter />
              <FaFacebook />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
