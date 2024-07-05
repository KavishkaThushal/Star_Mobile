import React from 'react'
import './QualityAttributes.css'
import img24 from './img/24hours.png'
import imgGurantee from './img/guarantee.png'
import imgSmartphone from './img/smartphone.png'
import imgTools from './img/tools.png'



export default function QualityAttributes() {

    let qualityAtrributes = [
        {
            img: img24,
            titlePart1: 'same day',
            titlePart2: ' service',
            discription: 'Strong inexpedient ubermensch moral sexuality of Holiest hatred free christianity morality love of holiest pinnacle zarathustra.'
        },
        {
            img: imgSmartphone,
            titlePart1: 'HIGHEST QUALITY',
            titlePart2: ' PARTS',
            discription: 'Strong inexpedient ubermensch moral sexuality of Holiest hatred free christianity morality love of holiest pinnacle zarathustra.'
        },
        {
            img: imgGurantee,
            titlePart1: 'ONE YEAR',
            titlePart2: ' WARRANTY',
            discription: 'Strong inexpedient ubermensch moral sexuality of Holiest hatred free christianity morality love of holiest pinnacle zarathustra.'
        },
        {
            img: imgTools,
            titlePart1: 'EXPERT',
            titlePart2: ' TECHNICIANS',
            discription: 'Strong inexpedient ubermensch moral sexuality of Holiest hatred free christianity morality love of holiest pinnacle zarathustra.'
        },

    ]
    return (
        <div className='quality-attributes-container'>
            <div className='quality-attributes'>
                {qualityAtrributes.map((attribute) => (
                    <div className='quality-attribute'>
                        <img className='quality-attribute-img' src={attribute.img}></img>
                        <p className='quality-attribute-heading'><span>{attribute.titlePart1}</span>{attribute.titlePart2}</p>
                        <p className='quality-attribute-description'>{attribute.discription}</p>
                        <p className='quality-attribute-learn-more'>Learn More</p>
                    </div>
                ))}

            </div>
        </div>
    )
}
