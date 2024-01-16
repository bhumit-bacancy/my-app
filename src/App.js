import React, { useReducer, useState, useTransition } from "react";
import List from "./components/List";

function App() {
  const [input, setInput] = useState("");

  function handleChange(e) {
    setInput(e.target.value);
  }
  return (
    <>
      <div className="container">
        <input type="text" value={input} onChange={handleChange} />
        <List input={input} />
      </div>
    </>
  );
}

export default App;
