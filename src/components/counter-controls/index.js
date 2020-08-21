import React, { useContext } from "react";
import CounterContext from "../../context/counter-context";
import "./style.css";

const CounterControls = () => {
  const { counter, setCounter } = useContext(CounterContext);

  return (
    <div className="counter__controls">
      <button
        className="button button--green"
        onClick={() => setCounter(counter + 1)}
      >
        <i className="fa fa-plus" aria-hidden="true"></i>
      </button>
      <button
        className="button bWutton--red"
        onClick={() => setCounter(counter - 1)}
      >
        <i className="fa fa-minus" aria-hidden="true"></i>
      </button>
    </div>
  );
};

export default CounterControls;
