import React from "react";

type buttonPropsType = {
  btnName: string;
  callback: () => void;
  className?: string;
};

export function Button(props: buttonPropsType) {
  const btnOnClickHandler = () => {
    props.callback();
  };
  return (
    <>
      <button onClick={btnOnClickHandler}>{props.btnName}</button>
    </>
  );
}
