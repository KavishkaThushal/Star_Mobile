import React, { useEffect, useState } from 'react';
import './Header.css';
import { HiMiniClock } from 'react-icons/hi2';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
    const [scrollY, setScrollY] = useState(0);
    const navigate = useNavigate();
    const isLoggedIn = Boolean(localStorage.getItem('access_token'));

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('access_token');
        navigate('/login'); // optional: redirect after logout
    };

    const renderAuthLinks = () => {
        return isLoggedIn ? (
            <Link
                to="/"
                className="header-nav-link authenticate-link"
                onClick={handleLogout}
            >
                Logout
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
            <Link to="/" className="header-nav-link">Home</Link>
            <Link to="/aboutus" className="header-nav-link">AboutUs</Link>
            <Link to="/services" className="header-nav-link">Services</Link>
            <Link to="/gallery" className="header-nav-link">Gallery</Link>
            <Link to="/store" className="header-nav-link">Store</Link>
            <Link to="/contactus" className="header-nav-link">Contact</Link>
            <Link to="/appointment" className="header-nav-link">Appointment</Link>
            {renderAuthLinks()}
        </>
    );

    return scrollY < 100 ? (
        <div className="header">
            <div className="header-contact-section" id="header-contact-section">
                <div className="header-contact">
                    <HiMiniClock size={30} color="#2E4C66" className="header-contact-icon" />
                    <div className="header-contact-details">
                        <p className="header-contact-details-title">Opening Time</p>
                        <p className="header-contact-details-description">All days 9.00 to 8.00</p>
                    </div>
                </div>
                <div className="header-contact">
                    <FaPhoneAlt size={25} color="#2E4C66" className="header-contact-icon" />
                    <div className="header-contact-details">
                        <p className="header-contact-details-title">Call us 24/7</p>
                        <p className="header-contact-details-description">+456 756 0329</p>
                    </div>
                </div>
                <div className="header-contact">
                    <IoMdMail size={30} color="#2E4C66" className="header-contact-icon" />
                    <div className="header-contact-details">
                        <p className="header-contact-details-title">Email Us</p>
                        <p className="header-contact-details-description">info@example.com</p>
                    </div>
                </div>
            </div>

            <div className="header-navigation-section">{renderNavLinks()}</div>
        </div>
    ) : (
        <div className="header">
            <div className="active-header-navigation-section">{renderNavLinks()}</div>
        </div>
    );
}
