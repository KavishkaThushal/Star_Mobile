import './listcard.css'
import { useNavigate } from 'react-router-dom'


function ListCard({FeaturesList,Name,ProductImg,Price,Amount,}) {
    const navigate=useNavigate()
  return (
    <div className='list-item-card'>
          <div className='list-img-container'>
          <img src={ProductImg} alt='' />
          </div>
          <p>{Name}</p>
          <span className='list-item-features'>

          {
              FeaturesList.map((item,i)=>(

                <span key={i}>
                    <p>{item}</p>
                    <p></p>
                   </span>
                
            ))}
            
          </span>
          <p>{Amount}</p>
          <p>Rs.{Price}</p>
          <p className='item-remove'>X</p>
          <button type='submit' onClick={()=>(navigate('/edit'))}>Edit</button>
          

        </div>
  )
}

export default ListCard