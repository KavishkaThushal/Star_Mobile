import { useState } from 'react';
import './appointment.css';
import { GrLocation } from "react-icons/gr";
import { LuPhone } from "react-icons/lu";
import { TbClockHour7 } from "react-icons/tb";
import api from "../../config/axiosInterceptor.js";
import { toast } from "react-toastify";
import AppointmentTable from "./AppointmentTable.jsx";

function Appointment() {
    const [opened, setOpened] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        issue: '',
        appointDate: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        setErrors(prev => ({ ...prev, [name]: '' })); // clear error on change
    };

    const validate = () => {
        const newErrors = {};

        if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
        if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        if (!formData.phoneNumber.trim()) {
            newErrors.phoneNumber = 'Phone number is required';
        } else if (!/^0\d{9}$/.test(formData.phoneNumber)) {
            newErrors.phoneNumber = 'Phone number must be 10 digits starting with 0';
        }
        if (!formData.appointDate) {
            newErrors.appointDate = 'Appointment date is required';
        } else if (new Date(formData.appointDate) <= new Date()) {
            newErrors.appointDate = 'Appointment date must be in the future';
        }
        if (!formData.issue.trim()) newErrors.issue = 'Issue description is required';

        return newErrors;
    };

    const handleSubmit = async () => {
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setOpened(true);

        try {
            const response = await api.post('appointment/create-appointment', formData, {
                headers: { 'Content-Type': 'application/json' },
            });

            if (response.status === 201) {
                toast.success(`Appointment submit successful!`);
                window.location.reload();
            }
        } catch (error) {
            if (error.response) {
                const { status, data } = error.response;
                if (status === 409 || status === 400 || status === 404) {
                    if (typeof data.message === 'string') {
                        toast.error(data.message);
                    } else if (typeof data.message === 'object') {
                        Object.values(data.message).forEach(msg => toast.error(msg));
                    } else {
                        toast.error("Something went wrong. Please try again.");
                    }
                } else {
                    toast.error("Unexpected server error.");
                }
            } else {
                toast.error("Network error. Please check your connection.");
            }

            console.error('Error making appointment:', error);
        }
    };

    const minDate = new Date();
    minDate.setDate(minDate.getDate() + 1);
    const minDateStr = minDate.toISOString().split("T")[0];

    return (
        <>
            <div className='appointment-wrapper fadeInUp'>
                <div className='appointment-left'>
                    <h2>GET APPOINTMENT NOW</h2>
                    <div className='appointment-form'>
                        <span className='form-row'>
                            <span>
                                <label>Full Name</label>
                                <input
                                    type='text'
                                    name='firstName'
                                    placeholder='Enter your name'
                                    onChange={handleChange}
                                    className={errors.firstName ? 'input-error' : ''}
                                />
                                {errors.firstName && <p className="error-text">{errors.firstName}</p>}
                            </span>
                            <span>
                                <label>Last Name</label>
                                <input
                                    type='text'
                                    name='lastName'
                                    placeholder='Enter your name'
                                    onChange={handleChange}
                                    className={errors.lastName ? 'input-error' : ''}
                                />
                                {errors.lastName && <p className="error-text">{errors.lastName}</p>}
                            </span>
                        </span>

                        <span className='form-row'>
                            <span>
                                <label>Email</label>
                                <input
                                    type='email'
                                    name='email'
                                    placeholder='Enter your email'
                                    onChange={handleChange}
                                    className={errors.email ? 'input-error' : ''}
                                />
                                {errors.email && <p className="error-text">{errors.email}</p>}
                            </span>
                            <span>
                                <label>Phone</label>
                                <input
                                    type='text'
                                    name='phoneNumber'
                                    placeholder='Enter your phone number'
                                    onChange={handleChange}
                                    className={errors.phoneNumber ? 'input-error' : ''}
                                />
                                {errors.phoneNumber && <p className="error-text">{errors.phoneNumber}</p>}
                            </span>
                        </span>

                        <span className='form-row'>
                            <span>
                                <label>Appointment Date</label>
                                <input
                                    type='date'
                                    name='appointDate'
                                    min={minDateStr}
                                    onChange={handleChange}
                                    className={errors.appointDate ? 'input-error' : ''}
                                />
                                {errors.appointDate && <p className="error-text">{errors.appointDate}</p>}
                            </span>
                        </span>

                        <span className='appointment-text-container'>
                            <label>Your Device issue</label>
                            <textarea
                                rows={4}
                                name='issue'
                                placeholder='Enter your message'
                                onChange={handleChange}
                                className={errors.issue ? 'input-error' : ''}
                            />
                            {errors.issue && <p className="error-text">{errors.issue}</p>}
                        </span>

                        <button type='submit' onClick={handleSubmit}>Make Appointment</button>
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

            <div>
                <AppointmentTable />
            </div>
        </>
    );
}

export default Appointment;
