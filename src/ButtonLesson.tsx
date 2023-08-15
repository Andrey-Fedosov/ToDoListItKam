import React from 'react';

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

  return (
    <>
      {/*       <button
        onClick={() => {
          return alert('button is pressed');
        }}
      >
        My first button - 1
      </button> */}
      <button onClick={onClickHandler()}>My second button - 1</button>
      <button onClick={mySubscriber}>My second button - 1</button>
    </>
  );
};
