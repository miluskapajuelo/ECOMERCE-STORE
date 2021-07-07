import React, { useState, useEffect } from "react";

function useCounter() {
    const initialState = () =>
      Number(window.localStorage.getItem("count") || null);
    const [count, setCount] = useState(initialState);
  
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
  
    useEffect(() => window.localStorage.setItem("count", count), [count]);
  
    return { count, increment, decrement };
  }
  
  export default function Counter() {
    const { count, increment, decrement } = useCounter(5, 2);
  
    return (
      <div>
        <div className="counter">{count}</div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    );
  }
  