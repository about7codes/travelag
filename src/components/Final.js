import React from 'react';
import { Link } from 'react-router-dom';

const Final = ({ data }) => {
    console.log(data);
    return (
        <div className='final'>
            <div className='final-inner'>
                <p>
                    Thank you <span>{`${data.firstName} ${data.lastName}`} </span> 
                    for booking with us. We wish you a safe journey to <span>{`${data.city}, ${data.country}`}</span> on <span>{data.date}</span>.
                </p>
                <Link to='/'>
                    <span className='book'>Book again</span>
                </Link>
            </div>
        </div>
    )
}

export default Final;
