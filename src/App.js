import React, { useCallback, useEffect, useReducer, useState } from "react";

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log(count)
  }, [count])
  return (
    <>
      <div className="container">
        <button onClick={() => setCount(c => c + 1)}>Increment</button>
        <div>{count}</div>
      </div>
    </>
  );
}

export default App;
