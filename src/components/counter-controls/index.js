import React from "react";
import "./style.css";

const CounterControls = () => {
  return (
    <div className="counter__controls">
      <button className="button button--green">+</button>
      <button className="button button--red">-</button>
    </div>
  );
};

export default CounterControls;
