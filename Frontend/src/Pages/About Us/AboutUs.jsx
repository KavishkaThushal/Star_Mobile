import React from "react";
import "./AboutUs.css";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import tech1 from "../../assets/images/emp_1.jpg";
import tech2 from "../../assets/images/emp_2.jpg";
import tech3 from "../../assets/images/emp_3.jpg";
import about_hero from "../../assets/images/repair.png";
const highlights = [
  {
    title: "Great experience",
    description:
      "Strong knausgaard ugh hammock marfa vice kinfolk heirloom everyday carry. Dreamcatcher enamel pin kogi.",
  },
  {
    title: "Quality guarantee",
    description:
      "Strong knausgaard ugh hammock marfa vice kinfolk heirloom everyday carry. Dreamcatcher enamel pin kogi.",
  },
  {
    title: "Customer support",
    description:
      "Strong knausgaard ugh hammock marfa vice kinfolk heirloom everyday carry. Dreamcatcher enamel pin kogi.",
  },
];

const technicians = [
  { name: "Vimukthi Jayawicrama", image: tech1 },
  { name: "Mohamad Nafraz", image: tech2 },
  { name: "Kamal Rajapaksha", image: tech3 },
];

const AboutUs = () => {
  return (
    <div className="about-us fadeInUp">
      <section className="header-section">
        <h1>About Us</h1>
      </section>

      <section className="intro-section">
        <div className="intro-image">
          <img src={about_hero} alt="Phone Repair" />
        </div>
        <div className="intro-text">
          <h2>Your Trusted Mobile Repair Experts</h2>
          <p>
            We specialize in fast, affordable, and reliable mobile phone repair
            services. Whether it’s a cracked screen, battery issue, charging
            port problem, or software malfunction, our skilled technicians are
            ready to assist you with care and precision. We work with all major
            phone brands and models, ensuring that your device gets the expert
            attention it deserves. At NaplesPhone Repair, we pride ourselves on
            delivering top-notch service with a personal touch. We offer
            same-day repairs for most issues, competitive pricing, and friendly
            customer support to make your experience smooth and stress-free.
            From diagnostics to repair and after-service care, we’re committed
            to keeping you connected. Your satisfaction and trust are what drive
            us every day.
          </p>
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
        <p>
          Overcome faithful endless salvation enlightenment salvation overcome
          pious merciful osastic madness hotdish joy passion zenith.
        </p>
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
