import React, { Component } from "react";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = React.useState("");
  const [debounceInput, setDebounceInput] = React.useState(inputValue);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceInput(inputValue);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
    
  }, [inputValue]);

  return (
    <>
      <h1>Debounce</h1>

      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="type here..."
      />

      <h2>Normal Text: {inputValue}</h2>
      <h2>Debounce Text: {debounceInput}</h2>
    </>
  );
}

export default App;
