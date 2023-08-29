import React, { useState } from "react";
import "./App.css";
import { Todolist } from "./components/Todolist";

type FilterValueType = "all" | "active" | "complete";

function App() {
  const tasks = [
    { id: 1, task: "HTML", isDone: true },
    { id: 2, task: "JS", isDone: false },
    { id: 3, task: "React", isDone: false },
    { id: 4, task: "CSS", isDone: true },
  ];

  const [tasksArray, setTasksArray] = useState(tasks);
  // const tasks2 = [
  //   { id: 1, task: "Brooklyn ZOO", isDone: true },
  //   { id: 2, task: "Mrs Jackson", isDone: false },
  //   { id: 3, task: "Shimmy Yeah", isDone: true },
  // ];
  // const tasks3 = [
  //   { id: 1, task: "Troy", isDone: true },
  //   { id: 2, task: "Fight club", isDone: false },
  //   { id: 3, task: "Big Lebowski", isDone: true },
  // ];

  const removeTask = (id: number) => {
    const arrayToDisplay = tasksArray.filter((el) => el.id !== id);
    setTasksArray(arrayToDisplay);
  };
  const [filter, setFilter] = useState("all");
  let taskListToDisplay = tasksArray;

  if (filter === "complete") {
    taskListToDisplay = tasksArray.filter((el) => el.isDone === true);
    // setTasksArray(taskListToDisplay);
  }
  if (filter === "active") {
    taskListToDisplay = tasksArray.filter((el) => el.isDone === false);
    // setTasksArray(taskListToDisplay);
  }

  const filterList = (value: FilterValueType) => {
    setFilter(value);
  };

  return (
    <div className="App">
      <Todolist
        title="what to do"
        tasksList={taskListToDisplay}
        removeTask={removeTask}
        filterList={filterList}
        // filterList={filterList}
      />
      {/* <Todolist title="what to hear" tasksList={tasks2} /> */}
      {/* <Todolist title="what to see" tasksList={tasks3} /> */}
    </div>
  );
}

export default App;
