import React, { useState } from "react";
import './Counter.css';

function Counter() {
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
        setCount(count + 1);
    };
    const handleDecrement = () => {
        setCount(count - 1);
    };

    return (
        <div className="Counter">
            <h2>Счетчик: {count} </h2>
            <button onClick={handleIncrement}>Увеличить</button>
            <button onClick={handleDecrement}>Уменьшить</button>
        </div>
    )
}

export default Counter;