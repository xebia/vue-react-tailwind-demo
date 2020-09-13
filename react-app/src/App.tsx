import React from "react";
import "twin.macro";
import Button from "./Button";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1 tw="text-4xl font-bold mb-4">React example</h1>
      <Button>Button</Button>
    </div>
  );
}

export default App;
