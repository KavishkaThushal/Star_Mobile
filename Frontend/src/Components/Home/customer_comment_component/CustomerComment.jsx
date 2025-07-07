import "./CustomerComment.css";
import user1Img from "./img/client_1.jpg";
import user2Img from "./img/client_2.jpg";
import user3Img from "./img/client_3.jpg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function CustomerComment() {
  return (
    <div className="home-customer-comment-list">
      <p className="home-customer-comment-title">WHAT OUR CUSTOMERS SAID</p>
      <div className="home-customer-comment-underline"></div>
      <div className="home-customer-comment-swiper-container">
        <Swiper
          //slidesPerView={2}
          breakpoints={{
            1024: { slidesPerView: 2 },
            768: { slidesPerView: 2 },
            0: { slidesPerView: 1 },
          }}
          spaceBetween={30}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          loop={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="home-customer-comment">
              <img
                src={user1Img}
                className="home-customer-comment-usser-pic"
              ></img>
              <div className="home-customer-comment-txt-and-name">
                <p className="home-customer-comment-txt">
                  “Excellent customer support! They explained everything clearly
                  and fixed my phone the same day.”
                </p>
                <p className="home-customer-comment-name">Ravisa Dilanka</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="home-customer-comment">
              <img
                src={user2Img}
                className="home-customer-comment-usser-pic"
              ></img>
              <div className="home-customer-comment-txt-and-name">
                <p className="home-customer-comment-txt">
                  “Fast and reliable service. My phone looks brand new after the
                  repair. Very satisfied!”
                </p>
                <p className="home-customer-comment-name">Isuru Madushanka</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="home-customer-comment">
              <img
                src={user3Img}
                className="home-customer-comment-usser-pic"
              ></img>
              <div className="home-customer-comment-txt-and-name">
                <p className="home-customer-comment-txt">
                  “Great service! They repaired my phone quickly and
                  professionally. Very friendly staff and reasonable prices.
                  Highly recommend this place for any phone issues!”
                </p>
                <p className="home-customer-comment-name">Shanu Disanayaka</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
