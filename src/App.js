import React from "react";
import "./styles.css";
import { CounterContextProvider } from "./context/counter-context";

// Components
import Counter from "./components/counter";
import CounterControls from "./components/counter-controls";

export default function App() {
  return (
    <CounterContextProvider>
      <div className="App">
        <h1>React with Context</h1>
        <small>by Hernan Case</small>
        <Counter />
        <CounterControls />
      </div>
    </CounterContextProvider>
  );
}
