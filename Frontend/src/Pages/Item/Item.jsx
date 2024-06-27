import './item.css'
import ItemImg from '../../assets/product.png'
import { MdLocalPhone } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { ImLocation2 } from "react-icons/im";

const productFeature=[
    {CPU: 'Snapdragon 685 Octa Core CPU, up to 2.8GHz, GPU: Adreno'},
    {Screen: '6.67 inch 2400x1080P AMOLED Display, 120Hz Refresh Rate'},
    {RAM_ROM: '6GB+128GB / 8GB+128GB / 8GB+256GB'},
    {Camera: '108MP+8MP+2MP Triple Rear Camera, 16MP Front Camera'},
    {Battery: '5000mAh(Typ), Support 33W Fast Charging, 33W Fast Charger in-box'}
]

function Item() {
  return (
    <div className='store-item-wrapper'>
        <div className='item-content-row'>
            <div className='item-img-container'>
                <img src={ItemImg} alt='item' className='item-img'/>
            </div>

            <div className='item-mobile-details'>
                <h2>Redmi Note 12C</h2>
                <p>Global Version Xiaomi Redmi Note 13 4G Mobile Phone 6.67" AMOLED Screen 120Hz Snapdragon 685 Octa Core CPU 108MP Triple Camera</p>
                <p className='item-price'>Lkr <span className='iten-price-amount'>40000</span></p>
                <span className='details-footer'>
                    <span className='bundle-container'>
                        <p>Bundle :</p>
                        <p >select your bundle</p>
                    </span>
                    <span>
                        <p className='bundle-btn'>
                            <p>8GB</p>
                            <p>64GB</p>
                        </p>

                        <p className='bundle-btn'>
                            <p>8GB</p>
                            <p>64GB</p>
                        </p>

                        <p className='bundle-btn'>
                            <p>8GB</p>
                            <p>64GB</p>
                        </p>

                    </span>
                </span>
                <div className='item-footer'>
                    <p>Available stock 1244</p>
                </div>
            </div>
        </div>

        <div className='item-features'>
            <div className='mobile-features'>
                <h2>Features</h2>
                {
                    productFeature.map((feature, index) => {
                        return (
                            <span key={index} className='feature'><p>{Object.keys(feature)}</p><p>:</p><p>{Object.values(feature)}</p></span>
                        )
                    })
                }
               
            </div>

            <div className='item-info'>
                <h3>More Info</h3>
                <div className='item-info-content'>
                    <span><MdLocalPhone /><p>+456 789 0321</p></span>
                    <span><MdEmail /><p>info@example.com</p></span>
                    <span><ImLocation2 /><p>123 Western Street, Sydney, Australia</p></span>
                    
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Item