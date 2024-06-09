import React from 'react'
import './list.css'
import ProductImg from '../../assets/product.png'
import ListCard from '../../components/ListCard/ListCard'
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
          <p className='list-item-title'>Remove</p>
          <p >Edit</p>
        </div>

        <ListCard FeaturesList={FeaturesList} Name={'Redmi Note 12C'} ProductImg={ProductImg} Price={'40000'} Amount={'22'}  />

    </div>
  )
}

export default List