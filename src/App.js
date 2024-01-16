import React, { useCallback, useReducer, useState } from "react";
import List from "./components/List";

function App() {
  const [number, setNumber] = useState(1);
  const [dark, setdDark] = useState(false);

  const getItems = useCallback((incrementer) => {
    return [parseInt(number) + incrementer, parseInt(number) + 1+ incrementer, parseInt(number) + 2+ incrementer];
  }, [number])

  const theme = {
    backgroundColor: dark ? "#333" : "#FFF",
    color: dark ? "#FFF" : "#333",
  };
  return (
    <>
      <div className="container">
        <div style={theme}>
          <input
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <button onClick={() => setdDark((prevDark) => !prevDark)}>
            Toggle Theme
          </button>
          <List getItems={getItems} />
        </div>
      </div>
    </>
  );
}

export default App;
