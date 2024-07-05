import './Services.css';
import { FaClock, FaMobile, FaCog, FaWrench, FaTimes, FaPhone, FaSmile, FaTablet, FaLaptop } from 'react-icons/fa';
import React, { useState, useEffect } from 'react';

const Services = () => {

    const testimonials = [
        {
          id: 1,
          name: "Ana Mae Stiger",
          image: "/src/assets/images/ava-profile.png",
          text: "Overcome faithful endless salvation enlightenment salvation overcome pious mercifulascetic madness holiest joy passion zarathustra suicide overcome snare."
        },
        {
          id: 2,
          name: "Olga Hearnseth Soren",
          image: "/src/assets/images/Chris-profile.png",
          text: "Overcome faithful endless salvation enlightenment salvation overcome pious mercifulascetic madness holiest joy passion zarathustra suicide overcome snare."
        },
        {
            id: 3,
            name: "Ana Mae Stiger",
            image: "/src/assets/images/ava-profile.png",
            text: "Overcome faithful endless salvation enlightenment salvation overcome pious mercifulascetic madness holiest joy passion zarathustra suicide overcome snare."
          },
        {
            id: 4,
            name: "Olga Hearnseth Soren",
            image: "/src/assets/images/Chris-profile.png",
            text: "Overcome faithful endless salvation enlightenment salvation overcome pious mercifulascetic madness holiest joy passion zarathustra suicide overcome snare."
          },
      ];

      const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prevTestimonial) =>
        (prevTestimonial + 1) % testimonials.length
      );
    }, 2000); // Change testimonial every 5 seconds

    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div className="services">
      <header className="services-header">
        <h1>SERVICES</h1>
      </header>
      
      <section className="our-services">
        <h2>OUR SERVICES</h2>
        <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
        <div className="service-items">
          <div className="service-item">
          <FaMobile />
            <h3>SMARTPHONE REPAIR</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
          </div>
          <div className="service-item">
          <FaTablet />
            <h3>TABLET REPAIR</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
          </div>
          <div className="service-item">
          <FaLaptop />
            <h3>COMPUTER REPAIR</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
          </div>
        </div>
      </section>
      
      <section className="service-features">
        <div className="feature">
          <FaClock />
          <h3>SAME DAY SERVICE</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <a href="#">LEARN MORE</a>
        </div>
        <div className="feature">
          <FaMobile />
          <h3>HIGHEST QUALITY PARTS</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <a href="#">LEARN MORE</a>
        </div>
        <div className="feature">
          <FaCog />
          <h3>90 DAY WARRANTY</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <a href="#">LEARN MORE</a>
        </div>
        <div className="feature">
          <FaWrench />
          <h3>EXPERT TECHNICIANS</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <a href="#">LEARN MORE</a>
        </div>
      </section>
      
      <section className="customer-testimonials">
        <h2>WHAT OUR CUSTOMERS SAID</h2>
        <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
        <div className="testimonial-carousel">
          <div className="testimonial">
            <img src={testimonials[currentTestimonial].image} alt={testimonials[currentTestimonial].name} />
            <p>"{testimonials[currentTestimonial].text}"</p>
            <h4>{testimonials[currentTestimonial].name}</h4>
          </div>
        </div>
        <div className="carousel-dots">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentTestimonial ? 'active' : ''}`}
              onClick={() => setCurrentTestimonial(index)}
            ></span>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;