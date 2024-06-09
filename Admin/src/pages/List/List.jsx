import React from 'react'
import './list.css'
import ProductImg from '../../assets/product.png'

const FeaturesList=[
  ' Snapdragon 685 Octa Core CPU, up to 2.8GHz, GPU: Adreno 610',
  '6.67 inch 2400x1080P AMOLED Display, 120Hz Refresh Rate',
  '6GB+128GB / 8GB+128GB / 8GB+256GB',
  '108MP+8MP+2MP Triple Rear Camera, 16MP Front Camera',
  '5000mAh(Typ), Support 33W Fast Charging, 33W Fast Charger in-box'
]

function List() {
  return (
    <div className='list-wrapper'>
        <div className='list-title'>
          <p className='list-item-title'>Image</p>
          <p className='list-item-title'>Title</p>
          <p className='list-item-title'>Features</p>
          <p className='list-item-title'>Amount</p>
          <p className='list-item-title'>Price</p>
          <p >Remove</p>
        </div>

        <div className='list-item-card'>
          <div className='list-img-container'>
          <img src={ProductImg} alt='' />
          </div>
          <p>Redmi Note 12C</p>
          <span className='list-item-features'>

          {
              FeaturesList.map((item,i)=>(

                <span key={i}>
                    <p>{item}</p>
                    <p></p>
                   </span>
                
            ))}
            
          </span>
          <p>64</p>
          <p>Rs.{40000}</p>
          <p className='item-remove'>X</p>
          

        </div>

    </div>
  )
}

export default List