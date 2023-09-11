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
  const listName2 = "what to listen";
  // const [filter, setFilter] = useState("all");
  const [status, setStatus] = useState(false);

  let taskList1Id = v1();
  let taskList2Id = v1();

  // const [tasks, setTasks] = useState(tasks1);

  let [todolists, setTodoLists] = useState<Array<todolistsPropsType>>([
    { id: taskList1Id, title: "what to learn", filter: "all" },
    { id: taskList2Id, title: "what to listen", filter: "all" },
  ]);
  const [allTaskObj, setAllTaskObj] = useState({
    [taskList1Id]: [
      { id: v1(), title: "HTML&CSS", isDone: true },
      { id: v1(), title: "JS", isDone: true },
      { id: v1(), title: "ReactRouter", isDone: false },
      { id: v1(), title: "ReactJS", isDone: false },
      { id: v1(), title: "ReactJS", isDone: true },
      { id: v1(), title: "ReactJS", isDone: false },
    ],

    [taskList2Id]: [
      { id: v1(), title: "Hello world", isDone: true },
      { id: v1(), title: "I am Happy", isDone: false },
      { id: v1(), title: "Mrs Jackson", isDone: false },
    ],
  });

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

  const deleteTask = (taskId: string, taskListId: string) => {
    let tasks = allTaskObj[taskListId]; //& 4 convinient work create variable that get from object array with tasks by its key Id (tasklistId)
    let filteredTasks = tasks.filter((t) => t.id !== taskId); //& get filteredTasks array that has no contain task item with taskId (via filter method)
    allTaskObj[taskListId] = filteredTasks; //& initialize array with tasks we are working (allTaskObj[taskListId] as  filtered array (filteredTasks))
    setAllTaskObj({ ...allTaskObj }); //& using useState hook we put shallow copy (we get it using {...allTaskObj}) in setAllTaskObj() to start rerender
  };

  const addTask = (title: string, taskListId: string) => {
    let tasks = allTaskObj[taskListId]; //& 4 convinient work create variable that get from object array with tasks by its key Id (tasklistId)
    const newTask = { id: v1(), title: title, isDone: false }; //& that is how new task should look like
    let newTasks = [newTask, ...tasks]; //& 4 convinient work create variable that contains updated task array with new task ()
    allTaskObj[taskListId] = newTasks; //& initialize array with tasks we are working (allTaskObj[taskListId] as  new task array (newTasks))
    setAllTaskObj({ ...allTaskObj }); //& using useState hook we put shallow copy (we get it using {...allTaskObj}) in setAllTaskObj() to start rerender
  };

  const changeStatus = (
    taskId: string,
    isDone: boolean,
    taskListId: string
  ) => {
    let tasks = allTaskObj[taskListId];
    let [changingTask] = tasks.filter((t) => t.id === taskId);
    if (changingTask) {
      changingTask.isDone = isDone;
      // allTaskObj[taskListId] = [...task];
      setAllTaskObj({ ...allTaskObj });
    }
  };

  const deleteTodolist = (todolistId: string) => {
    todolists = todolists.filter((tl) => tl.id !== todolistId);
    setTodoLists(todolists);
    delete allTaskObj[todolistId];
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

  return (
    <div className="app">
      {todolists.map((tl) => {
        let taskToDisplay = allTaskObj[tl.id];
        if (tl.filter === "active") {
          taskToDisplay = allTaskObj[tl.id].filter((t) => t.isDone === false);
        }
        if (tl.filter === "complete") {
          taskToDisplay = allTaskObj[tl.id].filter((t) => t.isDone === true);
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
            deleteTodolist={deleteTodolist}
          />
        );
      })}
    </div>
  );
}

export default App;
