import React, { useEffect, useState } from "react";
import "./Header.css";
import { HiMiniClock } from "react-icons/hi2";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { userDetails } from "../redux/services/userDetailsAPI";
export default function Header() {
  const [scrollY, setScrollY] = useState(0);
  const navigate = useNavigate();
  const isLoggedIn = Boolean(localStorage.getItem("access_token"));
  const dispatch = useDispatch();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  //const { userData, loading } = useSelector((state) => state.user.userDetails);

  // useEffect(() => {
  //   if (!isLoggedIn) return;
  //   dispatch(userDetails());
  // }, [dispatch]);

  const mobileNavLinks = [
    { path: "/", label: "Home" },
    { path: "/aboutus", label: "AboutUs" },
    { path: "/services", label: "Services" },
    { path: "/gallery", label: "Gallery" },
    { path: "/store", label: "Store" },
    { path: "/contactus", label: "Contact" },
    { path: "/appointment", label: "Appointment" },
    { path: "/register", label: "Register" },
    { path: "/login", label: "Login" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    navigate("/login"); // optional: redirect after logout
  };

  const renderAuthLinks = () => {
    return isLoggedIn ? (
      <Link
        to="/"
        className="header-nav-link authenticate-link"
        onClick={handleLogout}
      >
        {`need to Logout?`}
      </Link>
    ) : (
      <>
        <Link
          to="/register"
          className="header-nav-link authenticate-link"
          id="authenticate-link"
        >
          Register
        </Link>
        <Link to="/login" className="header-nav-link authenticate-link">
          Login
        </Link>
      </>
    );
  };

  const renderNavLinks = () => (
    <>
      <Link to="/" className="header-nav-link">
        Home
      </Link>
      <Link to="/aboutus" className="header-nav-link">
        AboutUs
      </Link>
      <Link to="/services" className="header-nav-link">
        Services
      </Link>
      <Link to="/gallery" className="header-nav-link">
        Gallery
      </Link>
      <Link to="/store" className="header-nav-link">
        Store
      </Link>
      <Link to="/contactus" className="header-nav-link">
        Contact
      </Link>

      <Link to="/appointment" className="header-nav-link">
        Appointment
      </Link>
    </>
  );

  return scrollY < 100 ? (
    <div className="header">
      <div className="header-contact-section" id="header-contact-section">
        <div className="header-contact">
          <HiMiniClock
            size={30}
            color="#2E4C66"
            className="header-contact-icon"
          />
          <div className="header-contact-details">
            <p className="header-contact-details-title">Opening Time</p>
            <p className="header-contact-details-description">
              All days 9.00 AM to 8.00 PM
            </p>
          </div>
        </div>
        <div className="header-contact">
          <FaPhoneAlt
            size={25}
            color="#2E4C66"
            className="header-contact-icon"
          />
          <div className="header-contact-details">
            <p className="header-contact-details-title">Call us 24/7</p>
            <p className="header-contact-details-description">0703279293</p>
          </div>
        </div>
        <div className="header-contact">
          <IoMdMail size={30} color="#2E4C66" className="header-contact-icon" />
          <div className="header-contact-details">
            <p className="header-contact-details-title">Email Us</p>
            <p className="header-contact-details-description">
              starmobile@gmail.com
            </p>
          </div>
        </div>
      </div>

      <div className="header-navigation-section">
        <div className="navigation-link-collection">{renderNavLinks()}</div>
        <div className="authenticate-link-collection">{renderAuthLinks()}</div>
      </div>

      <div className="mobile-header-navigation-section">
        <div className="mobile-navigation-menu-controller">
          <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
          </div>
        </div>
        <div
          className={`mobile-navigation-link-collection ${
            isMobileMenuOpen ? "open" : ""
          }`}
        >
          {mobileNavLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="header-nav-link"
              onClick={closeMobileMenu}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  ) : (
    <div className="scrolled-header">
      <div className="active-header-navigation-section">
        {renderNavLinks()}
        {renderAuthLinks()}
      </div>

      <div className="mobile-header-navigation-section">
        <div className="mobile-navigation-menu-controller">
          <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
          </div>
        </div>
        <div
          className={`mobile-navigation-link-collection ${
            isMobileMenuOpen ? "open" : ""
          }`}
        >
          {mobileNavLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="header-nav-link"
              onClick={closeMobileMenu}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
