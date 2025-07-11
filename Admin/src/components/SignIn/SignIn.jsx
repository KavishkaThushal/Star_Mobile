import './signin.css'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from "../../config/axiosInterceptor.js";
import {toast} from "react-toastify";

function SignIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const variants = {
        initial: { opacity: 0, y: 200 },
        animate: {
            opacity: 1,
            y: 0,
            transition: { duration: 1 },
        },
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await api.post('auth/admin/login', {
                email,
                password,
                role: 'admin',
            })
            const data = response.data
            localStorage.setItem('authToken', data.data.accessToken)

            if(data.success === true){
                toast.success( 'Login successfully!' );
                window.location.reload();
            }

        } catch (error) {
            if (error.response) {
                toast.error(error.response.data.message || 'Login failed')
            } else {
                toast.error('Network error or server is down')
            }
            console.error('Login error:', error)
        }
    }

    return (
        <div className='signin-wrapper'>
            <motion.form
                className='signin-container'
                variants={variants}
                initial='initial'
                animate='animate'
                onSubmit={handleSubmit}
            >
                <h3>WELCOME ADMIN</h3>

                <span>
          <label>Email</label>
          <input
              type='email'
              placeholder='Email'
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
          />
        </span>

                <span>
          <label>Password</label>
          <input
              type='password'
              placeholder='Password'
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
          />
        </span>

                <button type='submit'>Sign In</button>
            </motion.form>
        </div>
    )
}

export default SignIn
