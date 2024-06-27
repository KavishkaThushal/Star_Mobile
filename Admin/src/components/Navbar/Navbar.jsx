import './navbar.css'
import { IoMdLogOut } from "react-icons/io";
import { useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate=useNavigate()
  return (
    <div className='navbar-wrapper'>
        <div className='nav-logo'>
            <h2 onClick={()=>(navigate('/'))} style={{cursor:'pointer'}}>STAR MOBILE</h2>
        </div>
       
        <div className='navbar-logout'>
        <IoMdLogOut />
        </div>
    </div>
  )
}

export default Navbar