import React from 'react'
import './ContactUs.css';
import Image1 from '../../assets/phone.svg'
import Image2 from '../../assets/address.svg'
import Image3 from '../../assets/time.svg'


function ContactUs() {
  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Contact</h1>
      </div>
      <div className="contact-section">
        <h2>SEND US MESSAGE</h2>
        <p>
          Overcome faithful endless salvation enlightenment salvation overcome 
          pious merciful ecstatic madness holiest joy<br></br>passion zarathustra suicide 
          overcome amen.
        </p>
        <div className="contact-info">
          <div className="contact-info-item">
          <img className='imageI' src = {Image1} alt='iconPhone'/>
            <p>PHONE NUMBER</p>
            <p>+456 789 0321</p>
          </div>
          <div className="contact-info-item">
           <img className='imageI' src = {Image2} alt='iconAddress'/>
            <p>ADDRESS</p>
            <p>123 Western Street, Sydney, Australia</p>
          </div>
          <div className="contact-info-item">
          <img className='imageI' src = {Image3} alt='iconTime'/>
            <p>OPENING HOURS</p>
            <p>All Days: 9am to 6pm</p>
          </div>
        </div>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Enter Your Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
      <div className="map-section">
        <h2>FIND OUR LOCATION</h2>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126738.85718117187!2d151.02041205000002!3d-33.8674876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12bce6276c63ab%3A0x5017d681632c200!2sSydney%20NSW%2C%20Australia!5e0!3m2!1sen!2sin!4v1625560517488!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Google Maps"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default ContactUs