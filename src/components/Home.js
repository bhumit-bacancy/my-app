import React, { useState } from 'react'
import NavBar from "./NavBar";
import TextForm from "./TextForm";

export default function Home() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <div className="container my-2">
        <TextForm heading="Enter the text to analyze" />
      </div>
    </>
  )
}
