import React, { useState } from "react";
import "./ContactUs.css";
import Image1 from "../../assets/phone.svg";
import Image2 from "../../assets/address.svg";
import Image3 from "../../assets/time.svg";
import axios from "axios";
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
          pious merciful ecstatic madness holiest joy<br></br>passion
          zarathustra suicide overcome amen.
        </p>
        <div className="contact-info">
          <div className="contact-info-item">
            <img className="imageI" src={Image1} alt="iconPhone" />
            <p>PHONE NUMBER</p>
            <p>070 3279293</p>
          </div>
          <div className="contact-info-item">
            <img className="imageI" src={Image2} alt="iconAddress" />
            <p>ADDRESS</p>
            <p>Henyaya, Maddekanda, Balangoda.</p>
          </div>
          <div className="contact-info-item">
            <img className="imageI" src={Image3} alt="iconTime" />
            <p>OPENING HOURS</p>
            <p>All Days: 9AM to 6PM</p>
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
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15867.512439269174!2d80.701355!3d6.650228!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae38f3ec1a50f73%3A0x12c5f86fe3a2e205!2sBalangoda%20Bus%20Stand!5e0!3m2!1sen!2slk!4v1720349615525"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Balangoda Bus Stand"
          />
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
