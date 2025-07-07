import React from "react";
import "./Services.css";
import mobileSwiperImg from "./img/mobile_service.png";
import batteryImg from "./img/battery.png";
import earbudImg from "./img/earbud.png";
import glassImg from "./img/glass.png";
import microSDImg from "./img/microSD.png";
import smartphoneImg from "./img/smartphone.png";
import smartphonesImg from "./img/smartphones.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Services() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="home-services">
      <div className="home-services-description">
        <p className="home-services-title">
          We offer a full range of smartphone services
        </p>
        <div className="home-service-title-line"></div>
        <p className="home-services-txt">
          Overcome faithful endless salvation enlightenment salvation overcome
          pious mercifulascetic madness holiest joy passion zarathustra suicide
          overcome snare.
        </p>
        <div className="home-services-type">
          <div className="home-services-left-type">
            <div className="home-service">
              <img src={smartphonesImg} className="home-service-img"></img>
              <p className="home-service-description">Phone diagnosis</p>
            </div>
            <div className="home-service">
              <img src={smartphoneImg} className="home-service-img"></img>
              <p className="home-service-description">Display Replacement</p>
            </div>
            <div className="home-service">
              <img src={microSDImg} className="home-service-img"></img>
              <p className="home-service-description">Battery Replacement</p>
            </div>
          </div>
          <div className="home-services-right-type">
            <div className="home-service">
              <img src={glassImg} className="home-service-img"></img>
              <p className="home-service-description">Water Damaged Phone</p>
            </div>
            <div className="home-service">
              <img src={batteryImg} className="home-service-img"></img>
              <p className="home-service-description">Data Recovery</p>
            </div>
            <div className="home-service">
              <img src={earbudImg} className="home-service-img"></img>
              <p className="home-service-description">
                Ear Phone Jack Malfunctions
              </p>
            </div>
          </div>
        </div>
        <div className="home-services-description-btns">
          <button className="home-service-btn">view our services</button>
          <button className="home-service-btn diactive-btn">get a quote</button>
        </div>
      </div>
      <div className="home-service-image-slider">
        <img src={mobileSwiperImg} className="service-image-slider"></img>
      </div>
    </div>
  );
}
