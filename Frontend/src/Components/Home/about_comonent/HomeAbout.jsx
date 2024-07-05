import React from 'react'
import './HomeAbout.css'
import toolImg from './img/Tools.png'
import phoneImg from './img/SmartphoneApprove.png'
import customerImg from './img/CustomerSupport.png'

export default function HomeAbout() {
    return (
        <div className='home-about-container'>

            <p className='home-about-title'>We are napels phone repairs</p>
            <div className='home-about-title-line'></div>
            <p className='home-about-text'>Overcome faithful endless salvation enlightenment salvation overcome 
            pious mercifulascetic madness holiest joy passion zarathustra suicide overcome snare</p>

            <div className='home-about-types-container'>

               <div className='home-about-type'>
                  <img src={toolImg} className='home-about-type-img'></img>
                  <p className='home-about-type-title'>Great Exprerince</p>
                  <p className='home-about-type-text'>Strong inexpedient ubermensch moral sexuality of Holiest 
                  hatred free christianity morality love of holiest pinnacle zarathustra.</p>
                  <div className='home-about-type-readmore'>Read More</div>
               </div>

               
               <div className='home-about-type'>
                  <img src={phoneImg} className='home-about-type-img'></img>
                  <p className='home-about-type-title'>Great Exprerince</p>
                  <p className='home-about-type-text'>Strong inexpedient ubermensch moral sexuality of Holiest 
                  hatred free christianity morality love of holiest pinnacle zarathustra.</p>
                  <div className='home-about-type-readmore'>Read More</div>
               </div>

               
               <div className='home-about-type'>
                  <img src={customerImg} className='home-about-type-img'></img>
                  <p className='home-about-type-title'>Great Exprerince</p>
                  <p className='home-about-type-text'>Strong inexpedient ubermensch moral sexuality of Holiest 
                  hatred free christianity morality love of holiest pinnacle zarathustra.</p>
                  <div className='home-about-type-readmore'>Read More</div>
               </div>


            </div>

        </div>
    )
}
