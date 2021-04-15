import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

const Overview = ({ location }) => {
    // console.log(location)
    const history = useHistory()
    useEffect(() => {
        if(location === undefined){
            history.push('/');
        }
        
    }, [])
    return (
        <div className='overview'>
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
                    <button className='start'>Start</button>
                </Link>
            </div>
        </div>
    )
}

export default Overview;
