import React, { useReducer, useRef, useState, useTransition } from "react";
import CustomInput from "./components/CustomInput";

function App() {
  const [value, setValue] = useState("red");
  const inputRef = useRef()

  return (
    <>
      <div className="container">
        <CustomInput ref={inputRef} value={value} onChange={e => setValue(e.target.value)} />
        <br />
        <button onClick={() => inputRef.current.alertHi()}>Focus</button>
      </div>
    </>
  );
}

export default App;
