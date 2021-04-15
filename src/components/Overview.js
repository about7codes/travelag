import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

const Overview = ({ location, containerVariants }) => {
    // console.log(location)
    const history = useHistory()
    useEffect(() => {
        if(location === undefined){
            history.push('/');
        }
        
    }, [])
    return (
        <motion.div className='overview'
            variants={containerVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
        >
            <div className='ov-a'>
                <h2>{location.location} <span>Travel Guide</span></h2>
                <h4>{location.country}</h4>
            </div>
            <div className='ov-b'>
                <img src={`../img/${location.image}`} alt={location.location} />
            </div>
            <div>
                <p>{location.overview}</p>
            </div>
            <div className='ov-btns'>
                <Link to='/'>
                    <span>Back</span>
                </Link>
                <Link to='/application'>
                    <button className='start' onClick={() => localStorage.clear()}>Start</button>
                </Link>
            </div>
        </motion.div>
    )
}

export default Overview;
