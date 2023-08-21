import React from 'react';
// import { changeFilter } from './App';

type PropsType = {
  taskName: string;
  // tasks: Array<TaskType>;
  task: TaskType[];
  deleteTask: (id: number) => void;
  changeFilter: Function;
  // filterTask: (btnName: string) => void;
  // btn: ButtonPropsType;
};

type TaskType = {
  id: number;
  title: string;
  isDone: boolean;
};

// type ButtonPropsType = {
//   btnName: string;
//   callBack: () => void;
// };

// function Button(props: ButtonPropsType) {
//   const onClickHandler = () => {
//     props.callBack();
//   };
//   return <button onClick={onClickHandler}>{props.btnName}</button>;
// }

export const TODOList = (props: PropsType) => {
  return (
    <div>
      <h3>{props.taskName}</h3>
      <div>
        <input />
        <button>+</button>
      </div>
      <ul>
        {props.task.map((el) => {
          return (
            <li>
              <input type="checkbox" checked={el.isDone} />
              <span>{el.title}</span>

              {/* <Button
                callback={props.btn.callBack.deleteTask(el.id)}
                buttonId={el.id}
                btnName="X"
              /> */}

              <button onClick={() => props.deleteTask(el.id)}>x</button>
            </li>
          );
        })}
      </ul>
      <div>
        <button onClick={changeFilter('all')}>All</button>
        <button onClick={changeFilter('active')}>Active</button>
        <button onClick={changeFilter('complete')}> Completed</button>
      </div>
    </div>
  );
};
