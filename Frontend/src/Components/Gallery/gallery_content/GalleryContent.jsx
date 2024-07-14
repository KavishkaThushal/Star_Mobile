import React from 'react'
import './GalleryContent.css'
import galleryImg from './img/gallery_content.png'

export default function GalleryContent() {
  return (
    <div className='gallery-content'>
       <img src={galleryImg}></img>
    </div>
  )
}
