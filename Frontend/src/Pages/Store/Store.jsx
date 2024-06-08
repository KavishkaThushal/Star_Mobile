import Card from '../../Components/Card/Card'
import './store.css'


function Store() {
  return (
    <>
    <div className='store-hero-container'>
        <h1>STORE</h1>
    </div>
    <div className='store-wrapper'>
        <h3>Filter</h3>
        <div className='side-menu-toggle'>
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