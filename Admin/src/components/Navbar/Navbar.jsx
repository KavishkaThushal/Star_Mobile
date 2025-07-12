import './navbar.css';
import { IoMdLogOut } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import api from "../../config/axiosInterceptor.js";

function Navbar({onLogout }) {
    const navigate = useNavigate();

    const handleLogout = async () => {
        const token = localStorage.getItem('authToken');
        try {
            await api.post(
                'auth/logout',
                {}, // send an empty body
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                    withCredentials: true,
                }
            );

            localStorage.removeItem('authToken');
            toast.success("Logged out successfully");
           onLogout();
        } catch (err) {
            toast.error("Logout failed");
            console.error(err);
        }
    };

    return (
        <div className='navbar-wrapper'>
            <div className='nav-logo'>
                <h2 onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
                    STAR MOBILE
                </h2>
            </div>

            <div className='navbar-logout' onClick={handleLogout} style={{ cursor: 'pointer' }}>
                <IoMdLogOut />
            </div>
        </div>
    );
}

export default Navbar;
