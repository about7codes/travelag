import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Confirm = ({ data, containerVariants }) => {
    // console.log(data);
    return (
        <motion.div className='confirm-box'
            variants={containerVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
        >
            <h4 className='head'>Complete - Review your application</h4>
            <div className='confirm'>
                <div className='confirm-a'>
                    <span>First name: </span>
                    <span>{data.firstName}</span>
                </div>
                <div className='confirm-b'>
                    <span>Last name: </span>
                    <span>{data.lastName}</span>
                </div>
            </div>
            <div className='confirm'>
                <div className='confirm-a'>
                    <span>Email: </span>
                    <span>{data.email}</span>
                </div>
                <div className='confirm-b'>
                    <span>Travel date: </span>
                    <span>{data.date}</span>
                </div>
            </div>
            <div className='confirm'>
                <div className='confirm-a'>
                    <span>Destination: </span>
                    <span>{`${data.city}, ${data.country}`}</span>
                </div>
                <div className='confirm-b'>
                    <span>Class: </span>
                    <span>{data.class} class</span>
                </div>
            </div>
            <div className='confirm'>
                <div className='confirm-a'>
                    <span>Adults: </span>
                    <span>{data.adults}</span>
                </div>
                <div className='confirm-b'>
                    <span>Children: </span>
                    <span>{data.children}</span>
                </div>
            </div>
            <div className='confirm-btn'>
                <Link to='/application'>
                    <span>Back</span>
                </Link>
                <Link to='/final'>
                    <button className='confirm'>Finish</button>
                </Link>
            </div>
        </motion.div>
    )
}

export default Confirm;
