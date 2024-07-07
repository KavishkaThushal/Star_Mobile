
import './CustomerComment.css'
import user1Img from './img/user_1.png'
import user2Img from './img/user_2.png'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function CustomerComment() {
  return (
    <div className='home-customer-comment-list'>
      <p className='home-customer-comment-title'>WHAT OUR CUSTOMERS SAID</p>
      <div className='home-customer-comment-underline'></div>
      <div className='home-customer-comment-swiper-container'>
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            visible: true,
            //el: 'swiper-pagination',
            clickable: true,
          }}
          loop={Infinity}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            < div className='home-customer-comment'>
              <img src={user1Img} className='home-customer-comment-usser-pic'></img>
              <div className='home-customer-comment-txt-and-name'>
                <p className='home-customer-comment-txt'>Overcome faithful endless salvation
                  enlightenment salvation overcome pious mercifulascetic madness holiest joy passion zarathustra suicide overcome snare.</p>
                <p className='home-customer-comment-name'>Ava Max,Singer</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            < div className='home-customer-comment'>
              <img src={user2Img} className='home-customer-comment-usser-pic'></img>
              <div className='home-customer-comment-txt-and-name'>
                <p className='home-customer-comment-txt'>Overcome faithful endless salvation
                  enlightenment salvation overcome pious mercifulascetic madness holiest joy passion zarathustra suicide overcome snare.</p>
                <p className='home-customer-comment-name'>Ava Max,Singer</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            < div className='home-customer-comment'>
              <img src={user1Img} className='home-customer-comment-usser-pic'></img>
              <div className='home-customer-comment-txt-and-name'>
                <p className='home-customer-comment-txt'>Overcome faithful endless salvation
                  enlightenment salvation overcome pious mercifulascetic madness holiest joy passion zarathustra suicide overcome snare.</p>
                <p className='home-customer-comment-name'>Ava Max,Singer</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}
