import React from 'react';

type PropsType = {
  truck1: string;
  // tasks: Array<TaskType>;
  task: TaskType[];
};

type TaskType = {
  id: number;
  title: string;
  isDone: boolean;
};

export const TODOList = (props: PropsType) => {
  return (
    <div>
      <h3>{props.truck1}</h3>
      <div>
        <input />
        <button>+</button>
      </div>
      <ul>
        {props.task.map((el) => {
          return (
            <li>
              <input type="checkbox" checked={el.isDone} />{' '}
              <span>{el.title}</span>
            </li>
          );
        })}
        {/* <li>
          <input type="checkbox" checked={props.task[0].isDone} />{' '}
          <span>{props.task[0].title}</span>
        </li>
        <li>
          <input type="checkbox" checked={props.task[1].isDone} />{' '}
          <span>{props.task[1].title}</span>
        </li>
        <li>
          <input type="checkbox" checked={props.task[2].isDone} />{' '}
          <span>{props.task[2].title}</span>
        </li> */}
      </ul>
      <div>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
    </div>
  );
};
