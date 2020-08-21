import React, { useContext } from "react";
import CounterContext from "../../context/counter-context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

import "./style.css";

const CounterControls = () => {
  const { counter, setCounter } = useContext(CounterContext);

  return (
    <div className="counter__controls">
      <button
        className="button button--green"
        onClick={() => setCounter(counter + 1)}
      >
        <FontAwesomeIcon icon={faPlus} size="xs" />
      </button>
      <button
        className="button button--red"
        onClick={() => setCounter(counter - 1)}
      >
        <FontAwesomeIcon icon={faMinus} size="xs" />
      </button>
    </div>
  );
};

export default CounterControls;
