import React from "react";
import "./Footer.css";
import logo from "./img/LOGO.png";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaGooglePlusG } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-upper-section">
        <div className="upper-section-left-part">
          <div className="left-part-about-part" style={{ marginRight: "5rem" }}>
            <img src={logo}></img>
            <p className="about-part-text" style={{ color: "white" }}>
              We provide fast, reliable mobile phone repairs using quality
              parts, handled by expert technicians you can trust.
            </p>

            <div className="footer-social-media-section">
              <div className="footer-social-media-icon-container">
                <FaFacebookF
                  size={20}
                  className="footer-social-media-icon"
                ></FaFacebookF>
              </div>
              <div className="footer-social-media-icon-container">
                <RiTwitterXLine
                  size={20}
                  className="footer-social-media-icon"
                ></RiTwitterXLine>
              </div>
              <div className="footer-social-media-icon-container">
                <FaGooglePlusG
                  size={20}
                  className="footer-social-media-icon"
                ></FaGooglePlusG>
              </div>
            </div>
          </div>
          <div className="left-part-about-part">
            <p
              style={{
                fontWeight: "700",
                fontSize: "1.5rem",
                marginBottom: "1rem",
                color: "white",
              }}
            >
              BRANDS
            </p>

            <p
              style={{
                fontSize: "0.9rem",
                color: "white", // description text white
                marginBottom: "1rem",
                maxWidth: "300px",
              }}
            >
              We offer repairs and services for all major mobile and laptop
              brands.
            </p>

            <ul
              style={{
                listStyleType: "disc",
                paddingLeft: "20px",
                fontSize: "0.9rem",
                color: "black", // brand list text black
                marginBottom: "1rem",
                maxWidth: "300px",
                columnCount: 2,
                columnGap: "20px",
              }}
            >
              <li>Apple</li>
              <li>Samsung</li>
              <li>OnePlus</li>
              <li>Xiaomi</li>
              <li>Google Pixel</li>
              <li>Huawei</li>
              <li>Dell</li>
              <li>HP</li>
              <li>Lenovo</li>
              <li>Asus</li>
              <li>Acer</li>
            </ul>
          </div>

          <div className="left-part-about-part">
            <p className="about-part-title">Get in touch</p>
            <p className="about-part-subtitile">Email:</p>
            <p className="about-part-text">starmobile@gmail.com</p>
            <p className="about-part-subtitile">Address:</p>
            <p className="about-part-text">Henyaya, Maddekanda, Balangoda.</p>
          </div>
        </div>

        <div className="upper-section-right-part">
          <FaPhoneAlt size={60} color="#02BBA3"></FaPhoneAlt>
          <div className="right-part-contact-details">
            <p className="rght-part-contact-number">070 3279293</p>
            <p className="rght-part-contact-description">
              Call Us Free, We are 24/7 Available
            </p>
          </div>
        </div>
      </div>

      <div className="footer-down-section">
        <Link to="/" className="footer-nav-link">
          Home
        </Link>
        <Link to="/aboutus" className="footer-nav-link">
          AboutUs
        </Link>
        <Link to="/services" className="footer-nav-link">
          Services
        </Link>
        <Link to="/gallery" className="footer-nav-link">
          Gallery
        </Link>
        <Link to="/store" className="footer-nav-link">
          Store
        </Link>
        <Link to="/contactus" className="footer-nav-link">
          Contact
        </Link>
      </div>
    </div>
  );
}
