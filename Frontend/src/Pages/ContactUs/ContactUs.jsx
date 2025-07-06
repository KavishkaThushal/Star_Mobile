import React, { useState } from 'react';
import './ContactUs.css';
import Image1 from '../../assets/phone.svg';
import Image2 from '../../assets/address.svg';
import Image3 from '../../assets/time.svg';
import axios from 'axios';
import api from "../../config/axiosInterceptor.js";

function ContactUs() {
  return (
    <div className="contact-page fadeInUp">
        <section className="header-section">
            <h1>Contact</h1>
        </section>
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
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [errors, setErrors] = useState({});
    const [submitStatus, setSubmitStatus] = useState('');

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Invalid email format';
        }
        if (!formData.message.trim()) newErrors.message = 'Message is required';
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitStatus('');
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        try {
            await api.post('contact', formData);
            setSubmitStatus('Message sent successfully!');
            setFormData({ name: '', email: '', message: '' });
            setErrors({});
        } catch (err) {
            console.error(err);
            setSubmitStatus("Failed to send message. Each person can send only two message per day. Feel free to call us to more details.");
        }
    };

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
                        <img className='imageI' src={Image1} alt='Phone Icon' />
                        <p>PHONE NUMBER</p>
                        <p>+456 789 0321</p>
                    </div>
                    <div className="contact-info-item">
                        <img className='imageI' src={Image2} alt='Address Icon' />
                        <p>ADDRESS</p>
                        <p>123 Western Street, Sydney, Australia</p>
                    </div>
                    <div className="contact-info-item">
                        <img className='imageI' src={Image3} alt='Time Icon' />
                        <p>OPENING HOURS</p>
                        <p>All Days: 9am to 6pm</p>
                    </div>
                </div>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                    />
                    {errors.name && <p className="error-text">{errors.name}</p>}

                    <input
                        type="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                    />
                    {errors.email && <p className="error-text">{errors.email}</p>}

                    <textarea
                        placeholder="Enter Your Message"
                        value={formData.message}
                        onChange={e => setFormData({ ...formData, message: e.target.value })}
                    />
                    {errors.message && <p className="error-text">{errors.message}</p>}

                    <button type="submit">Send Message</button>
                    {submitStatus && <p className="submit-status">{submitStatus}</p>}
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
    );
}

export default ContactUs