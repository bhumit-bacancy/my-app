import React, { useState } from "react";

export default function DemoHook() {
  const [state, setState] = useState({ count: 4, theme: "blue " });
  const number = state.count;
  const theme = state.theme;

  const decrementCount = () => {
    setState((prevState) => {
      return { ...prevState, count: prevState.count - 1, theme: 'green' };
    });
  };
  return (
    <div className="container">
      <button onClick={decrementCount}>-</button>
      <span>
        {number}: {theme}
      </span>
      <button
        onClick={() => {
          setState((prevState) => {
            return { ...prevState, count: prevState.count + 1 };
          });
        }}
      >
        +
      </button>
    </div>
  );
}
