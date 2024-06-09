import './navbar.css'
import { IoMdLogOut } from "react-icons/io";

function Navbar() {
  return (
    <div className='navbar-wrapper'>
        <div className='nav-logo'>
            <h2>STAR MOBILE</h2>
        </div>
       
        <div className='navbar-logout'>
        <IoMdLogOut />
        </div>
    </div>
  )
}

export default Navbar