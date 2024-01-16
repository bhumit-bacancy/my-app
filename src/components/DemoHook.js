import React, { useEffect, useState, useMemo, useRef } from "react";

export default function DemoHook() {
  const [name, setName] = useState('')
  const prevName = useRef()
  // const inputFocus = useRef()
  // const counter = useRef(0)

  // useEffect(() => {
  //   counter.current = counter.current + 1
  // })

  // function focus() {
  //   inputFocus.current.focus()
  // }

  useEffect(() => {
    prevName.current = name
  }, [name])
  
  return (
    <>
      <input value={name} onChange={e => setName((e.target.value))} />
      <div>My Name is {name} and prev value was: {prevName.current}</div>
      {/* <button onClick={focus}>Focus</button> */}
      {/* <div>Rendered {counter.current} times</div> */}
    </>
  );
}

