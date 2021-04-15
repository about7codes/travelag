import React from 'react'
import Place from './Place';

const Places = ({ areas, selected }) => {
    // console.log(areas)
    
    return (
        <div className='places'>
            {
                areas.map(area => (
                    <Place key={area.id} area={area} selected={selected} />
                ))
            }
        </div>
    )
}

export default Places;
