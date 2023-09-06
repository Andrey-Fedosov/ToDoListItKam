import React from "react";

type taskListPropsType = {
  id: number;
  title: string;
  isDone: boolean;
};

type todolistPropsType = {
  listName: string;
  taskList: taskListPropsType[];
};

export const TODOList = (props: todolistPropsType) => {
  return (
    <div>
      <h2>{props.listName}</h2>
      <input />
      <button>+</button>

      <ul>
        {props.taskList.map((t) => {
          return (
            <li key={t.id}>
              <button>X</button>
              {t.title} <span> </span>{" "}
              <input type="checkbox" checked={t.isDone} />
            </li>
          );
        })}
      </ul>
      <button>All</button>
      <button>Complete</button>
      <button>Active</button>
    </div>
  );
};
