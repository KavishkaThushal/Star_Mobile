import './card.css'
import ProductImg from '../../assets/product.png'
function Card() {
  return (
    <div className='card-container'>
        <div className='card-img-container'>
            <img src={ProductImg} alt='product'/>
        </div>

        <div className='card-content'>
            <span className='card-price'>
                <p>Lkr <span className='price'>40000</span></p>
                <p className='stock'>Available Stock <span className='stock-count'>22</span></p>
            </span>

            <span className='card-details'>
                <h3>Redmi Note 12C</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At corporis culpa vel nihil eius repellat, unde natus quam, ex voluptatum et. Assumenda, illo nobis? Dolorum quas repellendus saepe officiis fugiat.</p>
             </span>

        </div>
    </div>
  )
}

export default Card