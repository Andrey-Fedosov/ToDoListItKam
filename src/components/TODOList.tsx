import React, { ChangeEvent, FocusEvent, KeyboardEvent, useState } from "react";
import { Button } from "./Button";

export type filterValuePropsType = "all" | "complete" | "active";

type taskListPropsType = {
  id: string;
  title: string;
  isDone: boolean;
};

type todolistPropsType = {
  key: string;
  id: string;
  listName: string;
  taskList: taskListPropsType[];
  deleteTask: (taskId: string, taskListId: string) => void;
  addTask: (title: string, taskListId: string) => void;
  changeFilter: (filterValue: filterValuePropsType, todolistId: string) => void;
  changeStatus: (taskId: string, isDone: boolean, taskListId: string) => void;
  filter: string;
  deleteTodolist: (todolistId: string) => void;
};

export const TODOList = (props: todolistPropsType) => {
  const [title, setTitle] = useState("");
  const [error, setError] = useState<string | null>(null);
  //adding and removal functionality
  const deleteTaskBtnHandler = (id: string) => {
    props.deleteTask(id, props.id);
  };

  const addTaskBtnHandler = (title: string) => {
    if (title.trim() === "") {
      setError("task shouldnt be empty");
      return;
    } else {
      props.addTask(title, props.id);

      setTitle("");
    }
  };

  const changeFilterHandler = (
    filter: filterValuePropsType,
    todolistId: string
  ) => {
    props.changeFilter(filter, todolistId);
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
    setError("");
  };

  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (e.currentTarget.value.trim() === "") {
        setError("task shouldnt be empty");
        return;
      } else {
        props.addTask(title, props.id);
        setTitle("");
      }
    }
  };

  return (
    <div>
      <Button
        btnName="delete list"
        callback={() => {
          props.deleteTodolist(props.id);
        }}
      />

      <h2>{props.listName}</h2>

      <input
        onChange={
          /* (e: ChangeEvent<HTMLInputElement>) => {
          setTitle(e.currentTarget.value);
          setError("") */ onChangeHandler
        }
        value={title}
        onKeyDown={
          /* (e: KeyboardEvent<HTMLInputElement>) => {
          if (e.key === "Enter") {
            if (e.currentTarget.value.trim() === "") {
              setError("task shouldnt be empty");
              return;
            } else {
              props.addTask(title);
              setTitle("");
            }
          }
        } */
          onKeyPressHandler
        }
        className={error ? "error" : ""}
        //?how to add onblur without bugs
        // onBlur={(e: FocusEvent<HTMLInputElement>) => {
        //   props.addTask(title);
        //   setTitle("");
        // }}
      />
      <Button btnName="+" callback={() => addTaskBtnHandler(title)} />
      {error && <p className="error-message">{error}</p>}

      <ul>
        {props.taskList.map((t) => {
          const statusChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
            props.changeStatus(t.id, e.currentTarget.checked, props.id);
          };
          return (
            <li key={t.id} className={t.isDone ? "is-done" : ""}>
              <Button btnName="X" callback={() => deleteTaskBtnHandler(t.id)} />
              {t.title} <span> </span>{" "}
              <input
                type="checkbox"
                checked={t.isDone}
                onChange={statusChangeHandler}
              />
            </li>
          );
        })}
      </ul>

      <Button
        className={props.filter === "all" ? "active-filter" : ""}
        btnName="All"
        callback={() => {
          changeFilterHandler("all", props.id);
        }}
      />
      <Button
        className={props.filter === "complete" ? "active-filter" : ""}
        btnName="Complete"
        callback={() => {
          changeFilterHandler("complete", props.id);
        }}
      />
      <Button
        className={props.filter === "active" ? "active-filter" : ""}
        btnName="Active"
        callback={() => {
          changeFilterHandler("active", props.id);
        }}
      />
    </div>
  );
};
