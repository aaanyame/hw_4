import React, { useEffect, useState } from "react";
import './Timer.css';

function Timer() {
    const [time, setTime] = useState(new Date());
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    return (
        <div className="Timer">
            <h2>Текущее время:</h2>
            <p>{time.toLocaleTimeString()}</p>
        </div>
    )
}

export default Timer;