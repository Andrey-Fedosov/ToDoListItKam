import React from 'react';
import './App.css';

type TaskCompType = {
  data: DataPropsType;
};

type TasksPropsType = {
  taskId: number;
  title: string;
  isDone: boolean;
};

type DataPropsType = {
  title: string;
  tasks: TasksPropsType[];
  students: string[];
};

export function Tasks(props: TaskCompType) {
  return (
    <div className="taskBox">
      <h3> {props.data.title}</h3>
      <ul>
        {props.data.tasks.map((t) => {
          return (
            <li key={t.taskId}>
              <p> {t.title} </p>
              <input type="checkbox" checked={t.isDone}></input>
            </li>
          );
        })}
      </ul>
      <p>Student list</p>
      <ul>
        {props.data.students.map((s) => {
          return <li>{s}</li>;
        })}
      </ul>
    </div>
  );
}
