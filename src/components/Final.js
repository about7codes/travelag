import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Final = ({ data, containerVariants }) => {
    
    return (
        <motion.div className='final'
            variants={containerVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
        >
            <div className='final-inner'>
                <p>
                    Thank you <span>{`${data.firstName} ${data.lastName}`} </span> 
                    for booking with us. We wish you a safe journey to <span>{`${data.city}, ${data.country}`}</span> on <span>{data.date}</span>.
                </p>
                <Link to='/'>
                    <span className='book'>Book again</span>
                </Link>
            </div>
        </motion.div>
    )
}

export default Final;
