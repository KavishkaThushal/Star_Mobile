import { useState } from 'react'
import Card from '../../Components/Card/Card'
import { MdClose } from "react-icons/md";
import './store.css'

const Category=['Smart Phone','Earphones','Smart Watch']
const Brand=['Redmi','Samsung','Infinix']
const Price=['Under 20000Lkr','Under 50000Lkr','Under 100000Lkr']

function Store() {
  const [filter, setFilter] = useState(false)
  return (
    <>
    <div className='store-hero-container'>
        <h1>STORE</h1>
    </div>
    <div className='store-wrapper'>
        <h3 className='filter' onClick={()=>setFilter((prev)=>!prev)}>Filter</h3>
        <div className={filter? 'side-menu-toggle-show':'side-menu-toggle'}>
              <MdClose onClick={()=>setFilter((prev)=>!prev)} />
              <div className='filter-section'>
                <h3>Category</h3>
                {
                  Category?.map((item,index)=>(
                    <span key={index}>
                      <input type='checkbox' id='category1' name='category1' value='category1'/>
                      <p>{item}</p>
                    </span>
                  ))
                }
                
                </div>

                <hr/>

                <div className='filter-section'>
                <h3>Brand</h3>
                
                {
                  Brand?.map((item,index)=>(
                    <span key={index}>
                      <input type='checkbox' id='category1' name='category1' value='category1'/>
                      <p>{item}</p>
                    </span>
                  ))
                }
                </div>

                <hr/>

                <div className='filter-section'>
                <h3>Price</h3>
                
                {
                  Price?.map((item,index)=>(
                    <span key={index}>
                      <input type='checkbox' id='category1' name='category1' value='category1'/>
                      <p>{item}</p>
                    </span>
                  ))
                }
                </div>

                <hr/>
         
        


                
        </div>
        <div className='side-menu'>
           
                <div className='filter-section'>
                <h3>Category</h3>
                
                <span>
                <input type='checkbox' id='category1' name='category1' value='category1'/>
                <p>Smart Phone</p>
                </span>

                <span>
                <input type='checkbox' id='category1' name='category1' value='category1'/>
                <p>Earphones</p>
                </span>

                <span>
                <input type='checkbox' id='category1' name='category1' value='category1'/>
                <p>Smart Watch</p>
                </span>
                </div>

                <hr/>

                <div className='filter-section'>
                <h3>Brand</h3>
                
                <span>
                <input type='checkbox' id='category1' name='category1' value='category1'/>
                <p>Redmi</p>
                </span>

                <span>
                <input type='checkbox' id='category1' name='category1' value='category1'/>
                <p>Samsung</p>
                </span>

                <span>
                <input type='checkbox' id='category1' name='category1' value='category1'/>
                <p>Infinix</p>
                </span>
                </div>

                <hr/>

                <div className='filter-section'>
                <h3>Price</h3>
                
                <span>
                <input type='checkbox' id='category1' name='category1' value='category1'/>
                <p>Under 20000Lkr</p>
                </span>

                <span>
                <input type='checkbox' id='category1' name='category1' value='category1'/>
                <p>Under 50000Lkr</p>
                </span>

                <span>
                <input type='checkbox' id='category1' name='category1' value='category1'/>
                <p>Under 100000Lkr</p>
                </span>
                </div>

                <hr/>


                
                
            
        </div>



        <div className='store-content'>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    </div>
    </>
  )
}

export default Store