import React, { useCallback, useReducer, useState } from "react";
import useLocalStorage from "./components/useLocalStorage";
import useUpdateLogger from "./components/useUpdateLogger";

function App() {
  const [name, setName] = useLocalStorage('name', '');
  useUpdateLogger(name)
  return (
    <>
      <div className="container">
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </div>
    </>
  );
}

export default App;
