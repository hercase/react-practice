import React, { useContext } from "react";
import "./style.css";
import CounterContext from "../../context/counter-context";

const Counter = () => {
  const { counter } = useContext(CounterContext);

  return (
    <div className="counter">
      <p>{counter}</p>
    </div>
  );
};

export default Counter;
