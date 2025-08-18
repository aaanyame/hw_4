import React, { useEffect, useState } from "react";
import './timer.css';

function Timer() {
    const [time, setTime] = useState(new Date());
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    return (
        <div>
            <h2>Текущее время:</h2>
            <p>{time.toLocaleTimeString()}</p>
        </div>
    )
}

export default Timer;