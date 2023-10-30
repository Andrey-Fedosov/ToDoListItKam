import React, { useState } from "react";
import "./App.css";
import { TODOList } from "./TODOList";

function App() {
  const tasklist = "what to do";

  const [tasks, setTasks] = useState([
    { id: 1, title: "HTML&CSS", isDone: true },
    { id: 2, title: "JS", isDone: true },
    { id: 3, title: "ReactRouter", isDone: false },
    { id: 4, title: "ReactJS", isDone: false },
    { id: 5, title: "ReactJS", isDone: true },
    { id: 6, title: "ReactJS", isDone: false },
  ]);

  const deleteTask = (taskId: number) => {
    setTasks(tasks.filter((t) => t.id !== taskId));
  };

  return (
    <div className="App">
      <TODOList tasklist={tasklist} task={tasks} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
