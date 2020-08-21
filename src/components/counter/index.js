import React, { useState } from "react";
import "./style.css";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="counter">
      <p>{counter}</p>
    </div>
  );
};

export default Counter;
