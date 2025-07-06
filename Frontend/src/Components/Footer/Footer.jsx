import React from 'react'
import './Footer.css'
import logo from './img/LOGO.png'
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaGooglePlusG } from "react-icons/fa6";
import { Link } from 'react-router-dom'


export default function Footer() {
  return (
      <div className='footer'>

        <div className='footer-upper-section'>

          <div className='upper-section-left-part'>
            <div className='left-part-about-part' style={{ marginRight: '5rem' }}>
              <img src={logo}></img>
              <p className='about-part-text' style={{ color: 'white' }}>
                Ascetic mountains hatred truth hope victorious sexuality ocean and abstract
                inexpedient noble burying faith. Merciful madness of sea decieve derive.
              </p>
              <div className='footer-social-media-section'>
                <div className='footer-social-media-icon-container'>
                  <FaFacebookF size={20} className='footer-social-media-icon'></FaFacebookF>
                </div>
                <div className='footer-social-media-icon-container'>
                  <RiTwitterXLine size={20} className='footer-social-media-icon'></RiTwitterXLine>
                </div>
                <div className='footer-social-media-icon-container'>
                  <FaGooglePlusG size={20} className='footer-social-media-icon'></FaGooglePlusG>
                </div>
              </div>
            </div>
            <div className='left-part-about-part'>
              <p className='about-part-title'>RECENT POSTS</p>
              <p className='about-part-text'>Free fearful disgust hatred fearful decieve. Strong chaos eternal-return abstract...</p>
              <p className='about-part-subtitile recent-post'>By admin May 03</p>
              <p className='about-part-text'>Free fearful disgust hatred fearful decieve. Strong chaos eternal-return abstract...</p>
              <p className='about-part-subtitile recent-post'>By admin May 01</p>
            </div>
            <div className='left-part-about-part'>
              <p className='about-part-title'>Get in touch</p>
              <p className='about-part-subtitile'>Email:</p>
              <p className='about-part-text'>info@example.com</p>
              <p className='about-part-subtitile'>Address:</p>
              <p className='about-part-text'>123 Western Street, Sydney, Australia</p>
            </div>
          </div>

          <div className='upper-section-right-part'>
            <FaPhoneAlt size={60} color='#02BBA3'></FaPhoneAlt>
            <div className='right-part-contact-details'>
              <p className='rght-part-contact-number'>+456 789 0321</p>
              <p className='rght-part-contact-description'>Call Us Free, We are 24/7 Available</p>
            </div>
          </div>

        </div>

        <div className='footer-down-section'>
          <Link to='/' className='footer-nav-link'>Home</Link>
          <Link to='/aboutus' className='footer-nav-link'>AboutUs</Link>
          <Link to='/services' className='footer-nav-link'>Services</Link>
          <Link to='/gallery' className='footer-nav-link'>Gallery</Link>
          <Link to='/store' className='footer-nav-link'>Store</Link>
          <Link to='/contactus' className='footer-nav-link'>Contact</Link>
        </div>

      </div>
  )
}
