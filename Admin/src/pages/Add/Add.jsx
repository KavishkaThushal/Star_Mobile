import React, { useRef } from 'react'
import Upload from '../../assets/upload.gif'
import './add.css'
const FeaturesList=[
  'CPU','Screen','RAM_ROM','Camera','Battery'
]

function Add() {
  const imgref=useRef()
  return (
    <div className='add-wrapper'>
        <div className='img-uploader'>
            <img src={Upload} alt='upload' onClick={()=>(imgref.current.click())}/>
            <input type='file' required hidden ref={imgref} id='img'/>
        </div>
        <span className='add-item'>
          <label>Title</label>
          <input type='text' placeholder='Title' required id='title'/>
        </span>

        <span className='price-amount'>

        <span className='add-item'>
          <label>Price</label>
          <input type='text' placeholder='Price' required id='price'/>
        </span>

        <span className='add-item'>
          <label>Amount</label>
          <input type='number' placeholder='Amount' required id='amount'/>
        </span>
        </span>

        <h3>Features</h3>
            {
              FeaturesList.map((item,i)=>(
                <span key={i} className='add-item'>
                <label>{item}</label>
                <input type='text' placeholder={`${item}`} required id={`${item}`}/>
              </span>
              ))
            }

        <span className='add-item'>
          <label>Description</label>
         <textarea rows={4} placeholder='Description' id='description' required></textarea>
        </span>

        <button>Create Item</button>
 
        

    </div>
  )
}

export default Add