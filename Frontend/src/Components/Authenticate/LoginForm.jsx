import {FaEye, FaRegEyeSlash} from "react-icons/fa";
import {toast} from "react-toastify";
import {useState} from "react";
import api from "../../config/axiosInterceptor.js";

export default function LoginForm() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [showPassword, setShowPassword] = useState(false);

    const isLoggedIn = Boolean(localStorage.getItem('access_token'));

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleLogin = async () => {
        try {
            const response = await api.post('auth/login', { email, password });
            const data = response.data;
            console.log(data);
            if (data.success === true) {
                localStorage.setItem('access_token', data.token);
                toast.success(`Login successful! Welcome.`);
                window.location.reload();
            }
        } catch (error) {
            if (error.response) {
                toast.error(error.response.data.message || 'Login failed.');
            } else {
                toast.error('Network error or server not responding.');
            }
            console.error('Login error:', error);
        }
    };

    if (isLoggedIn) {
        return (
            <div className='authenticate-form-screen'>
                <div className='authenticate-form-container'>
                    <div className='authenticate-form'>
                        <h2>You are already logged in.</h2>
                        <button
                            className="logout-button"
                            onClick={() => {
                                localStorage.removeItem('access_token');
                                toast.success('Logged out successfully!');
                                window.location.reload();
                            }}
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className='authenticate-form-screen'>
            <div className='authenticate-form-container fadeInUp'>
                <div className='authenticate-form'>
                    <h2>Welcome Again</h2>
                    <p>Unlocking Seamless Phone Repair Solutions Right at Your Fingertips.</p>
                    <div className='authenticate-form-user-input'>
                        <label>Email</label>
                        <input type='email' onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className='authenticate-form-user-input'>
                        <label>Password</label>
                        <div className='password-input-container'>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <span className='toggle-password' onClick={handleShowPassword}>
                {!showPassword
                    ? <FaEye className='eye-icon' size={20} />
                    : <FaRegEyeSlash className='eye-icon' size={18} />
                }
              </span>
                        </div>
                    </div>
                    <button onClick={handleLogin}>Log in</button>
                </div>
            </div>
        </div>
    );
}
