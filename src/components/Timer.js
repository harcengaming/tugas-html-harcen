import React from 'react'
import Moment from 'react-moment';
import 'moment-timezone'; 
import { useState, useEffect } from 'react';
import '../components/Timer.css'
import { ReactComponent as ClockIcon } from '../images/clock.svg';
import { ReactComponent as CalenderIcon } from '../images/calendar.svg';


function Timer() {

    const date = new Date();
    
    const [dateState, setDateState] = useState(new Date());
    useEffect(() => {
           setInterval(() => setDateState(new Date()), 1000);
    }, []);

    return (
        <div>
            <Moment></Moment>
            
            <br />
            <Moment format='MMMM Do YYYY, h:mm:ss a'>{date}</Moment>
            <br />
            <Moment format='LLLL'>{date}</Moment>
            
            
            <br />
            <div className="icon-realtime">
                
                <h1 className='realtime'>
                <CalenderIcon width="50" height="auto" />
                <Moment format='dddd'>{date}</Moment><span>,</span>
                {' '}
                    {dateState.toLocaleDateString('en-GB', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                    })}
                </h1>
                
                <h1>
                <ClockIcon width="50" height="auto"  />
                <span> Pukul : </span>
                    {dateState.toLocaleString('en-US', {
                        hour: 'numeric',
                        minute: 'numeric',
                        second: 'numeric',
                        hour12: false,
                    })}
                    <span> WIB</span>
                </h1>
            </div>
            
        </div>
    )
}

export default Timer
