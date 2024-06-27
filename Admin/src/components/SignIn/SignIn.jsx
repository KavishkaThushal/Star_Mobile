import './signin.css'
import {motion} from 'framer-motion'

function SignIn() {
    const variants={
        initial:{
            opacity:0,
            y:200
            
        },
        animate:{
            opacity:1,
            y:0,
            transition:{
                duration:1,
                
                
            }
        }
    }
  return (
    <div className='signin-wrapper'>
        <motion.div className='signin-container' variants={variants} initial='initial' animate='animate'>
            <h3>WELCOME ADMIN</h3>
            <span>
                <label>Username</label>
            <input type='text' placeholder='Username' required/>
            </span>
            <span>
                <label>Password</label>
            <input type='password' placeholder='Password' required/>
            </span>
            
            <button type='submit'>Sign In</button>
        </motion.div>
    </div>
  )
}

export default SignIn