import React from 'react';
import { Link } from 'react-router-dom';

const Place = ({ area, selected }) => {
    return (
        <div className='place'>
            <div className='place-a'>
                <img src={`../img/${area.image}`} alt={area.location} />
            </div>
            <div className='place-b'>
                <h4>{area.location}, {area.country}</h4>
                <Link  to='/overview'>
                    <button onClick={() => selected(area.id)}>Lets go</button>
                </Link>
            </div>
        </div>
    )
}

export default Place;