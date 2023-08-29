import React, { useState } from "react";
import "./../App.css";

type FilterValueType = "all" | "active" | "complete";

type TaskListPropsType = {
  id: number;
  task: string;
  isDone: boolean;
};

type TodolistPropsType = {
  title: string;
  tasksList: TaskListPropsType[];
  removeTask: (id: number) => void;
  filterList: (value: FilterValueType) => void;
};

export function Todolist(props: TodolistPropsType) {
  return (
    <div>
      <h3>{props.title}</h3>
      <div>
        <input />
        <button>+</button>
      </div>
      <ul>
        {props.tasksList.map((el, index) => {
          return (
            <li key={index}>
              <button onClick={() => props.removeTask(el.id)}>X</button>
              <input type="checkbox" checked={el.isDone} />{" "}
              <span>{el.id}.</span>
              <span>{el.task}</span>
            </li>
          );
        })}
      </ul>
      <div>
        <button onClick={() => props.filterList("all")}>All</button>
        <button onClick={() => props.filterList("active")}>Active</button>
        <button onClick={() => props.filterList("complete")}>Completed</button>
      </div>
    </div>
  );
}
