import React, { useState } from "react";
import "./App.css";
import { TODOList } from "./TODOList";

function App() {
  const truck1 = "what to learn";
  const truck2 = "what to learn2";

  const tasks1 = [
    { id: 1, title: "HTML&CSS", isDone: true },
    { id: 2, title: "JS", isDone: true },
    { id: 3, title: "ReactRouter", isDone: false },
    { id: 4, title: "ReactJS", isDone: false },
    { id: 5, title: "ReactJS", isDone: true },
    { id: 6, title: "ReactJS", isDone: false },
  ];
  const tasks2 = [
    { id: 1, title: "Hello world", isDone: true },
    { id: 2, title: "I am Happy", isDone: false },
    { id: 3, title: "Yo", isDone: false },
    { id: 4, title: "A-Yo man", isDone: false },
    { id: 5, title: "Yo-yo", isDone: false },
    { id: 6, title: "Yo-yo-yo", isDone: false },
  ];

  return (
    <div className="App">
      <TODOList />
    </div>
  );
}

export default App;
