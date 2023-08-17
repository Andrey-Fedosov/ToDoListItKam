import React from 'react';
import { Button } from './Button';

export const ButtonLesson = () => {
  /*   const myFirstSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
    alert(`Hello i'm Andy`);
  };
  const mySubscriber = () => {
    alert(`Hello i'm Ivan`);
  }; */

  const onClickHandler = (name: string) => {
    console.log(`hello i'm ${name}`);
  };
  /* 
  const foo1 = () => {
    console.log(100200);
  };

  const foo2 = (num: number) => {
    console.log(num);
  }; */

  const ButtonFoo1 = (name: string, age: number) => {
    console.log(`i am ${name}, ${age}`);
  };
  const ButtonFoo2 = (name: string, age: number) => {
    console.log(`i am ${name}, ${age}`);
  };
  const ButtonFoo3 = () => {
    console.log(`i am stupid button`);
  };
  return (
    <>
      {/*       <button
        onClick={() => {
          return alert('button is pressed');
        }}
      >
        My first button - 1
      </button> */}

      {/* <button onClick={() => onClickHandler('Andy')}>
        My second button - 1
      </button>
      <button onClick={() => onClickHandler('Mandy')}>
        My second button - 2
      </button>
      <button onClick={() => onClickHandler('Huendi')}>
        My second button - 3
      </button> */}
      {/* <button onClick={mySubscriber}>My second button - 1</button> */}

      {/* <button onClick={foo1}>1</button>
      <button onClick={() => foo2(100200)}>2</button> */}

      {/*Universal button */}

      <Button name="channel 1" callBack={() => ButtonFoo1('Vasya', 21)} />
      <Button name="channel 2" callBack={() => ButtonFoo2('Petya', 45)} />
      <Button
        name={"i'm stupid button"}
        // callBack={() => console.log("i'm stupid button")}
        callBack={ButtonFoo3}
      />
    </>
  );
};
