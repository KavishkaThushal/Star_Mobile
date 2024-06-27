import './home.css'
import {motion} from 'framer-motion'

function Home() {
    
    const variants={
        initial:{
            opacity:0,
            
        },
        animate:{
            opacity:1,
            
            transition:{
                duration:1,
                staggerChildren:0.4
                
            }
        }
    }
  return (
    <div className='home-wrapper'>
        <motion.span className='home-text-area' initial='initial' animate='animate' variants={variants}>
        <motion.h1 variants={variants} >WELCOME ADMIN PANEL</motion.h1>
       <motion.h3 variants={variants}>STAR <span style={{color:'#4ecdc4'}}>MOBILE</span></motion.h3>
       <motion.span variants={variants}>
        <p>Bus Station, Road, Balangoda</p>
       </motion.span>
        </motion.span>
       
    </div>
  )
}

export default Home