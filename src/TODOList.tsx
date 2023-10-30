import React from "react";

type PropsType = {
  tasklist: string;
  // tasks: Array<TaskType>;
  task: TaskType[];
  deleteTask: (taskId: number) => void;
};

type TaskType = {
  id: number;
  title: string;
  isDone: boolean;
};

export const TODOList = (props: PropsType) => {
  return (
    <div>
      <h3>{props.tasklist}</h3>
      <div>
        <input />
        <button>+</button>
      </div>
      <ul>
        {props.task.map((el) => {
          return (
            <li>
              <input type="checkbox" checked={el.isDone} />{" "}
              <span>{el.title}</span>
              <button onClick={() => props.deleteTask(el.id)}>x</button>
            </li>
          );
        })}
      </ul>
      <div>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
    </div>
  );
};
