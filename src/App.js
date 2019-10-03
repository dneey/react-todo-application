import React from "react";
import "./App.css";
import Task from "./components/Task";

function App() {
  return (
    <div className="container">
      <h1 className="pb-4 pt-4 text-center bg-info text-white">
        Todo Application
      </h1>
      <Task></Task>
    </div>
  );
}

export default App;
