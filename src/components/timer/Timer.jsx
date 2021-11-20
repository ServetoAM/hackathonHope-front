import React, { useEffect, useRef, useState } from 'react'
import './Timer.css';

function Timer() {
    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');

    let interval = useRef();

    const startTimer = () => {
        const countdownDate = new Date('December, 2021 17:00').getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60) / 1000));

            if(distance < 0) {
                clearInterval(interval.current)
            } else {
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds)
            }
        }, 1000)
    };

    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval.current)
        };
    })
    
    return (
        <div className="Timer">
            <h2 className='timer_title'>Prochain évènement : Master Tour Undercity</h2>
            <div className='deadline_container'>
                <p className='timer_block'><span className='timer_number'>{timerDays} </span>jours</p>
                <p className='timer_block'><span className='timer_number'>{timerHours}</span> heures</p>
                <p className='timer_block'><span className='timer_number'>{timerMinutes}</span> minutes</p>
                <p className='timer_block'><span className='timer_number'>{timerSeconds}</span> secondes</p>
            </div>
        </div>
    )
}

export default Timer