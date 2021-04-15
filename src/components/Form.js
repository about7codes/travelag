import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { motion } from 'framer-motion';

const Form = ({ location, allFormData, containerVariants }) => {
    const history = useHistory();
    const [formData, setFormData] = useState({
        country: location?.country,
        city: location?.location,
        firstName: '',
        lastName: '',
        email: '',
        class: '',
        adults: '',
        children: '',
        date: '',
    });
    useEffect(() => {
        const localData = JSON.parse(localStorage.getItem('formData'));
        console.log(localData);
        setFormData({...formData, ...localData});
    }, [])
    
    const handleSubmit = (e) => {
        e.preventDefault();
        allFormData(formData);
        localStorage.setItem('formData', JSON.stringify({ ...formData }));
        history.push('/confirm');
    }
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }
    return (
        <motion.div
            variants={containerVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
        >
            <form className='form' onSubmit={handleSubmit}>
                <h2>Start your holiday today.</h2>
                <div className='destination'>
                    <span>Destination selected: </span>
                    <span>{`${formData.city}, ${formData.country}`}</span>
                </div>
                <div className='form-a'>
                    <input type='text' required name='firstName' value={formData.firstName} onChange={handleChange} placeholder='First name' />
                    <input type='text' required name='lastName' value={formData.lastName} onChange={handleChange} placeholder='Last name' />
                </div>
                <div className='form-b'>
                    <input type='email' required name='email' value={formData.email} onChange={handleChange} placeholder='Email addresss' />
                    <input type='date' required name='date' value={formData.data} onChange={handleChange} />
                </div>
                <div className='form-c'>
                    <select name="class" required onChange={handleChange} >
                        <option defaultValue >Select class</option>
                        <option value='economy'>Economy class</option>
                        <option value='business'>Business class</option>
                    </select>
                </div>
                <div className='form-d'>
                    <input type='text' required name='adults' value={formData.adults} onChange={handleChange} placeholder='Adults' />
                    <input type='text' required name='children' value={formData.children} onChange={handleChange} placeholder='Children' />
                </div>
                <div className='form-e'>
                    <Link to='/'>
                        <span>Home</span>
                    </Link>

                    <button type='submit' className='confirm'>Confirm</button>
                </div>
            </form>
        </motion.div>
    )
}

export default Form;
