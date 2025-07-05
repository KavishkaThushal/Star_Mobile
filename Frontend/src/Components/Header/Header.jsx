import React, { useEffect, useState } from 'react'
import './Header.css'
import { HiMiniClock } from "react-icons/hi2";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { Link } from 'react-router-dom'
import {FiMenu, FiX} from "react-icons/fi";

export default function Header() {


    const [scrollY, setScrollY] = useState(0);

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollY]);



    return (
        scrollY < 100 ?
            <div className='header'>

                <div className='header-contact-section' id='header-contact-section'>
                    <div className='header-contact'>
                        <HiMiniClock size={30} color='#2E4C66' className='header-contact-icon' />
                        <div className='header-contact-details'>
                            <p className='header-contact-details-title'>Opening Time</p>
                            <p className='header-contact-details-description'>All days 9.00 to 8.00</p>
                        </div>
                    </div>
                    <div className='header-contact'>
                        <FaPhoneAlt size={25} color='#2E4C66' className='header-contact-icon' />
                        <div className='header-contact-details'>
                            <p className='header-contact-details-title'>Call us 24/7</p>
                            <p className='header-contact-details-description'>+456 756 0329</p>
                        </div>
                    </div>
                    <div className='header-contact'>
                        <IoMdMail size={30} color='#2E4C66' className='header-contact-icon' />
                        <div className='header-contact-details'>
                            <p className='header-contact-details-title'>Email Us</p>
                            <p className='header-contact-details-description'>info@example.com</p>
                        </div>
                    </div>
                </div>

                <div className='header-navigation-section'>
                    <div className='navigation-link-collection'>
                        <Link to='/' className='header-nav-link'>Home</Link>
                        <Link to='/aboutus' className='header-nav-link'>AboutUs</Link>
                        <Link to='/services' className='header-nav-link'>Services</Link>
                        <Link to='/gallery' className='header-nav-link'>Gallery</Link>
                        <Link to='/store' className='header-nav-link'>Store</Link>
                        <Link to='/contactus' className='header-nav-link'>Contact</Link>
                        <Link to='/appointment' className='header-nav-link'>Appointment</Link>
                    </div>
                    <div className='authenticate-link-collection'>
                        <Link to='/register' className='header-nav-link authenticate-link' id='authenticate-link'>Register</Link>
                        <Link to='/login' className='header-nav-link authenticate-link'>Login</Link>
                    </div>
                </div>

                <div className='mobile-header-navigation-section'>
                    <div className="mobile-navigation-menu-controller">
                        <div className='mobile-menu-icon' onClick={toggleMobileMenu}>
                            {isMobileMenuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
                        </div>
                    </div>
                    <div className={`mobile-navigation-link-collection ${isMobileMenuOpen ? 'open' : ''}`}>
                        <Link to='/' className='header-nav-link' onClick={closeMobileMenu}>Home</Link>
                        <Link to='/aboutus' className='header-nav-link' onClick={closeMobileMenu}>AboutUs</Link>
                        <Link to='/services' className='header-nav-link' onClick={closeMobileMenu}>Services</Link>
                        <Link to='/gallery' className='header-nav-link' onClick={closeMobileMenu}>Gallery</Link>
                        <Link to='/store' className='header-nav-link' onClick={closeMobileMenu}>Store</Link>
                        <Link to='/contactus' className='header-nav-link' onClick={closeMobileMenu}>Contact</Link>
                        <Link to='/appointment' className='header-nav-link' onClick={closeMobileMenu}>Appointment</Link>
                        <Link to='/register' className='header-nav-link' onClick={closeMobileMenu}>Register</Link>
                        <Link to='/login' className='header-nav-link' onClick={closeMobileMenu}>Login</Link>
                    </div>

                </div>

            </div> :
            <div className='scrolled-header'>

                <div className='active-header-navigation-section'>
                    <Link to='/' className='header-nav-link'>Home</Link>
                    <Link to='/aboutus' className='header-nav-link'>AboutUs</Link>
                    <Link to='/services' className='header-nav-link'>Services</Link>
                    <Link to='/gallery' className='header-nav-link'>Gallery</Link>
                    <Link to='/store' className='header-nav-link'>Store</Link>
                    <Link to='/contactus' className='header-nav-link'>Contact</Link>
                    <Link to='/appointment' className='header-nav-link'>Appointment</Link>
                    <Link to='/register' className='header-nav-link authenticate-link' id='authenticate-link'>Register</Link>
                    <Link to='/login' className='header-nav-link authenticate-link'>Login</Link>
                </div>

                <div className='mobile-header-navigation-section'>
                    <div className="mobile-navigation-menu-controller">
                        <div className='mobile-menu-icon' onClick={toggleMobileMenu}>
                            {isMobileMenuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
                        </div>
                    </div>
                    <div className={`mobile-navigation-link-collection ${isMobileMenuOpen ? 'open' : ''}`}>
                        <Link to='/' className='header-nav-link' onClick={closeMobileMenu}>Home</Link>
                        <Link to='/aboutus' className='header-nav-link' onClick={closeMobileMenu}>AboutUs</Link>
                        <Link to='/services' className='header-nav-link' onClick={closeMobileMenu}>Services</Link>
                        <Link to='/gallery' className='header-nav-link' onClick={closeMobileMenu}>Gallery</Link>
                        <Link to='/store' className='header-nav-link' onClick={closeMobileMenu}>Store</Link>
                        <Link to='/contactus' className='header-nav-link' onClick={closeMobileMenu}>Contact</Link>
                        <Link to='/appointment' className='header-nav-link' onClick={closeMobileMenu}>Appointment</Link>
                        <Link to='/register' className='header-nav-link' onClick={closeMobileMenu}>Register</Link>
                        <Link to='/login' className='header-nav-link' onClick={closeMobileMenu}>Login</Link>
                    </div>

                </div>

            </div>

    )
}
