import React from 'react'
import Place from './Place';

const Places = ({ areas, selected }) => {
    // console.log(areas)
    
    return (
        <>
            <div className='head-main'>
                <h1>Welcome to Travel AG</h1>
                <h4>Choose your destination: </h4>
            </div>
            <div className='places'>
                
                {
                    areas.map(area => (
                        <Place key={area.id} area={area} selected={selected} />
                    ))
                }
            </div>
        </>
    )
}

export default Places;
