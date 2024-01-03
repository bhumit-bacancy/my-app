import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));

  };

  const handleSummarize = () => {
    setChars(text.length);
    setWords(text.split(" ").length);
  };

  const [text, setText] = useState("Enter text here");
  const [words, setWords] = useState(0);
  const [chars, setChars] = useState(0);

  // text = "agjhgvhjsd"; //wrong way to change value
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            value={text}
            onChange={handleOnChange}
            rows={8}
          />
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpCase}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowerCase}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>
          Remove Extra Space
        </button>
        <button className="btn btn-primary" onClick={handleSummarize}>
          summarize
        </button>
      </div>
      <div className="container my-4">
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words, {text.length} characters.</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
