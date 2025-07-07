import "./Services.css";
import {
  FaClock,
  FaMobile,
  FaCog,
  FaWrench,
  FaTimes,
  FaPhone,
  FaSmile,
  FaTablet,
  FaLaptop,
} from "react-icons/fa";
import React, { useState, useEffect } from "react";
import {
  Clock,
  Smartphone,
  ShieldCheck,
  Settings,
  TabletSmartphone,
} from "lucide-react";
const Services = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sanuda Pushpakumara",
      image: "/src/assets/images/client_4.jpg",
      text: "Overcome faithful endless salvation enlightenment salvation overcome pious mercifulascetic madness holiest joy passion zarathustra suicide overcome snare.",
    },
    {
      id: 2,
      name: "Dilanka Bandara",
      image: "/src/assets/images/client_5.jpg",
      text: "Overcome faithful endless salvation enlightenment salvation overcome pious mercifulascetic madness holiest joy passion zarathustra suicide overcome snare.",
    },
    {
      id: 3,
      name: "Yasindu Rathnayaka",
      image: "/src/assets/images/client_6.jpg",
      text: "Overcome faithful endless salvation enlightenment salvation overcome pious mercifulascetic madness holiest joy passion zarathustra suicide overcome snare.",
    },
    {
      id: 4,
      name: "Ana Perera",
      image: "/src/assets/images/client_7.jpg",
      text: "Overcome faithful endless salvation enlightenment salvation overcome pious mercifulascetic madness holiest joy passion zarathustra suicide overcome snare.",
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial(
        (prevTestimonial) => (prevTestimonial + 1) % testimonials.length
      );
    }, 2000); // Change testimonial every 5 seconds

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const qualityAttributes = [
    {
      icon: Clock,
      titlePart1: "SAME DAY",
      titlePart2: " SERVICE",
      description:
        "Fast and reliable repairs completed on the same day, ensuring you’re never without your phone for long.",
    },
    {
      icon: Smartphone,
      titlePart1: "HIGHEST QUALITY",
      titlePart2: " PARTS",
      description:
        "We use only the highest quality parts to ensure durability and excellent performance for your device.",
    },
    {
      icon: ShieldCheck,
      titlePart1: "90 DAY",
      titlePart2: " WARRANTY",
      description:
        "All repairs come with a 90-day warranty to give you peace of mind and guarantee our workmanship.",
    },
    {
      icon: Settings,
      titlePart1: "EXPERT",
      titlePart2: " TECHNICIANS",
      description:
        "Our skilled technicians have years of experience repairing all major phone brands and models.",
    },
  ];

  return (
    <div className="services fadeInUp">
      <section className="header-section">
        <h1>Services</h1>
      </section>

      <section className="our-services">
        <h2>OUR SERVICES</h2>
        <p>
          At NaplesPhone Repair, we offer a wide range of expert repair services
          for smartphones, tablets, and computers. Our goal is to provide fast,
          reliable, and affordable solutions to keep your devices running
          smoothly.
        </p>

        <div className="service-items">
          <div className="service-item">
            <Smartphone style={{ color: "#02BBA3", width: 75, height: 75 }} />
            <h3>SMARTPHONE REPAIR</h3>
            <p>
              Expert repairs for all major smartphone brands, from screen
              replacements to battery fixes.
            </p>
          </div>
          <div className="service-item">
            <TabletSmartphone
              style={{ color: "#02BBA3", width: 75, height: 75 }}
            />
            <h3>TABLET REPAIR</h3>
            <p>
              Fast and reliable tablet repair services, including touch screen
              repairs and software troubleshooting.
            </p>
          </div>
          <div className="service-item">
            <FaLaptop style={{ color: "#02BBA3", width: 75, height: 75 }} />
            <h3>COMPUTER REPAIR</h3>
            <p>
              Comprehensive computer repairs covering hardware, software, virus
              removal, and performance optimization.
            </p>
          </div>
        </div>
      </section>
      <div
        className="quality-attributes-container"
        style={{ paddingTop: "80px", paddingBottom: "80px" }}
      >
        <div className="quality-attributes">
          {qualityAttributes.map((attribute) => (
            <div className="quality-attribute">
              <attribute.icon
                style={{ color: "white", width: 75, height: 75 }}
              />
              <p
                className="quality-attribute-heading"
                style={{ marginTop: "1rem" }}
              >
                <span>{attribute.titlePart1}</span>
                {attribute.titlePart2}
              </p>
              <p className="quality-attribute-description">
                {attribute.description}
              </p>
              {/* <p className="quality-attribute-learn-more">Learn More</p> */}
            </div>
          ))}
        </div>
      </div>

      {/* <section className="service-features">
                <div className="s-feature">
                    <FaClock />
                    <h3>SAME DAY SERVICE</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <a href="#">LEARN MORE</a>
                </div>
                <div className="s-feature">
                    <FaMobile />
                    <h3>HIGHEST QUALITY PARTS</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <a href="#">LEARN MORE</a>
                </div>
                <div className="s-feature">
                    <FaCog />
                    <h3>90 DAY WARRANTY</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <a href="#">LEARN MORE</a>
                </div>
                <div className="s-feature">
                    <FaWrench />
                    <h3>EXPERT TECHNICIANS</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <a href="#">LEARN MORE</a>
                </div>
            </section> */}

      <section className="customer-testimonials">
        <h2>WHAT OUR CUSTOMERS SAID</h2>
        <p>
          Our customers trust us for fast, reliable, and high-quality phone
          repairs. Here’s what they have to say about their experience with
          NaplesPhone Repair
        </p>

        <div className="testimonial-carousel">
          <div className="testimonial">
            <img
              src={testimonials[currentTestimonial].image}
              alt={testimonials[currentTestimonial].name}
            />
            <p
              style={{
                color: "gray",
                fontStyle: "italic",
                margin: "0", // optional, to remove extra margin if needed
              }}
            >
              "{testimonials[currentTestimonial].text}"
            </p>
            <h4 style={{ fontWeight: "bold", marginTop: "0.5rem" }}>
              — {testimonials[currentTestimonial].name} —
            </h4>
          </div>
        </div>
        <div className="carousel-dots">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentTestimonial ? "active" : ""}`}
              onClick={() => setCurrentTestimonial(index)}
            ></span>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
