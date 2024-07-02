import React, { useState } from 'react'
import './LoginForm.css'
import loginImg from './img/form_img.png'
import { FaEye, FaRegEyeSlash } from 'react-icons/fa'


export default function SignupForm() {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [userName, setUserName] = useState()
    const [showPassword, setShowPassword] = useState(false)

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const handleLogin = (e) => {
        e.preventDefault()
        alert(userName+" "+ email + " " + password);
        setUserName('')
        setEmail('')
        setPassword('')
    }

    return (
        <div className='authenticate-form-screen'>
            <div className='authenticate-form-container'>
                <div className='authenticate-form'>
                    <h2>Create an account</h2>
                    <p>Unlocking Seamless Phone Repair Solutions Right at Your Fingertips.</p>
                    <div className='authenticate-form-user-input'>
                        <label>User Name</label>
                        <input
                            type='text'
                            placeholder=''
                            value={userName}
                            onChange={(e) => (setUserName(e.target.value))}
                        >
                        </input>
                    </div>
                    <div className='authenticate-form-user-input'>
                        <label>Email</label>
                        <input
                            type='email'
                            placeholder=''
                            value={email}
                            onChange={(e) => (setEmail(e.target.value))}
                        >
                        </input>
                    </div>
                    <div className='authenticate-form-user-input'>
                        <label>Password</label>
                        <div className='password-input-container'>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                placeholder=''
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            >
                            </input>
                            <span className='toggle-password' onClick={handleShowPassword}>
                                {
                                    !showPassword ?
                                        <FaEye className='eye-icon' onClick={handleShowPassword} size={20}></FaEye> :
                                        <FaRegEyeSlash className='eye-icon' onClick={handleShowPassword} size={18}></FaRegEyeSlash>
                                }
                            </span>
                        </div>
                    </div>
                    <button onClick={handleLogin}>Register</button>
                </div>
                <div className='authenticate-form-image'>

                </div>
            </div>
        </div>
    )
}

