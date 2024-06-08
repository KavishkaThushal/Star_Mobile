import './appointment.css'
import { GrLocation } from "react-icons/gr";
import { LuPhone } from "react-icons/lu";
import { TbClockHour7 } from "react-icons/tb";

function Appointment() {
  return (
    <div className='appointment-wrapper'>
            <div className='appointment-left'>
                <h2>GET APPOINTMENT NOW</h2>
                <div className='appointment-form'>
                    <span className='form-row'>
                        <span>
                            <label>Full Name</label>
                            <input type='text' placeholder='Enter your name' required />
                        </span>
                        <span>
                            <label>Last Name </label>
                            <input type='text' placeholder='Enter your name' required />
                        </span>
                    </span>

                    <span className='form-row'>
                        <span>
                            <label>Email</label>
                            <input type='email' placeholder='Enter your email' required />
                        </span>
                        <span>
                            <label>Phone </label>
                            <input type='number' placeholder='Enter your phone number' required />
                        </span>
                    </span>
                    <span className='appointment-text-container'>
                    <label>Your Device issue</label>
                    <textarea rows={4} placeholder='Enter your message' required></textarea>
                    </span>
                    <button type='submit'>Make Appointment</button>
                </div>
            </div>

            <div className='appointment-right'>
                <div className='appointment-right-tabs'>
                <GrLocation />
                <h3>ADDRESS</h3>
                <p>123 Western Street, Sydney, Australia</p>
                </div>

                <div className='appointment-right-tabs'>
                <LuPhone />
                <h3>PHONE NUMBER</h3>
                <p>+456 789 0321</p>
                </div>

                <div className='appointment-right-tabs'>
                <TbClockHour7 />
                <h3>OPENING HOURS</h3>
                <p>All Days: 9am to 6pm</p>
                </div>
            </div>
    </div>
  )
}

export default Appointment