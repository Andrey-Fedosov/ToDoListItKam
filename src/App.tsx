import React from "react";
import { useState } from "react";
import "./App.css";
import { TODOList, filterValuePropsType } from "./components/TODOList";
import { v1 } from "uuid";

type todolistsPropsType = {
  id: string;
  title: string;
  filter: filterValuePropsType;
};

function App() {
  const listName1 = "what to learn";
  const listName2 = "what to learn2";
  // const [filter, setFilter] = useState("all");
  const [status, setStatus] = useState(false);

  const tasks1 = [
    { id: v1(), title: "HTML&CSS", isDone: true },
    { id: v1(), title: "JS", isDone: true },
    { id: v1(), title: "ReactRouter", isDone: false },
    { id: v1(), title: "ReactJS", isDone: false },
    { id: v1(), title: "ReactJS", isDone: true },
    { id: v1(), title: "ReactJS", isDone: false },
  ];

  const [tasks, setTasks] = useState(tasks1);

  const tasks2 = [
    { id: v1(), title: "Hello world", isDone: true },
    { id: v1(), title: "I am Happy", isDone: false },
    { id: v1(), title: "Yo", isDone: false },
    { id: v1(), title: "A-Yo man", isDone: false },
    { id: v1(), title: "Yo-yo", isDone: false },
    { id: v1(), title: "Yo-yo-yo", isDone: false },
  ];

  const changeFilter = (
    filterValue: filterValuePropsType,
    todolistId: string
  ) => {
    let todolist = todolists.find((tl) => tl.id === todolistId);
    if (todolist) {
      todolist.filter = filterValue;
      setTodoLists([...todolists]);
    }
  };

  const deleteTask = (taskId: string) => {
    return setTasks(tasks.filter((t) => t.id !== taskId));
  };

  const addTask = (title: string) => {
    const newTask = { id: v1(), title: title, isDone: false };
    setTasks([newTask, ...tasks]);
  };

  const changeStatus = (taskId: string, isDone: boolean) => {
    let [changingTask] = tasks.filter((t) => t.id === taskId);
    if (changingTask) {
      changingTask.isDone = isDone;
      setTasks([...tasks]);
    }
  };

  /*   switch (filter) {
    case "active":
      taskToDisplay = taskToDisplay.filter((t) => t.isDone === false);

      break;
    case "complete":
      taskToDisplay = taskToDisplay.filter((t) => t.isDone === true);

      break;
  } */

  // if (filter === "active") {
  //   taskToDisplay = taskToDisplay.filter((t) => t.isDone === false);
  // }
  // if (filter === "complete") {
  //   taskToDisplay = taskToDisplay.filter((t) => t.isDone === true);
  // }

  let [todolists, setTodoLists] = useState<Array<todolistsPropsType>>([
    { id: v1(), title: "what to learn", filter: "active" },
    { id: v1(), title: "what to buy", filter: "complete" },
  ]);

  return (
    <div className="app">
      {todolists.map((tl) => {
        let taskToDisplay = tasks;
        if (tl.filter === "active") {
          taskToDisplay = taskToDisplay.filter((t) => t.isDone === false);
        }
        if (tl.filter === "complete") {
          taskToDisplay = taskToDisplay.filter((t) => t.isDone === true);
        }

        return (
          <TODOList
            key={tl.id}
            id={tl.id}
            listName={tl.title}
            taskList={taskToDisplay}
            deleteTask={deleteTask}
            addTask={addTask}
            changeFilter={changeFilter}
            changeStatus={changeStatus}
            filter={tl.filter}
          />
        );
      })}
    </div>
  );
}

export default App;
