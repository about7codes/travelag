import { motion } from 'framer-motion';
import React from 'react'
import Place from './Place';


// const containerVariants = {
//     hidden: {
//         opacity: 0
//     },
//     visible: {
//         opacity: 1,
//         transition: { delay: 1, duration: 1 }
//     },
//     exit: {
//         opacity: 0,
//         transition: { ease: 'easeInOut' }
//     }
// }


const Places = ({ areas, selected, containerVariants }) => {
    // console.log(areas)
    
    return (
        <div className='places-container'>
            <motion.div className='head-main' initial='hidden' animate='visible' variants={{
                hidden: {
                    scale: 0.8,
                    opacity: 0
                },
                visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                        delay: .4
                    }
                }
            }}>
                <h1>Welcome to Travel AG</h1>
                <h4>Choose your destination: </h4>
            </motion.div>
            <motion.div className='places' 
                variants={containerVariants}
                initial='hidden'
                animate='visible'
                exit='exit'
            >
                
                {
                    areas.map(area => (
                        <Place key={area.id} area={area} selected={selected} />
                    ))
                }
            </motion.div>
        </div>
    )
}

export default Places;
