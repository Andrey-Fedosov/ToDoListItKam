import React from 'react';

type NewCompType = {
  students: Array<StudentsPropsType>;
  // students: StudentsPropsType[];
};

type StudentsPropsType = {
  name: string;
  age: number;
  id: number;
  isMarried: boolean;
};

export const NewComponent = (props: NewCompType) => {
  return (
    <div>
      <ul>
        {props.students.map((el, index) => {
          return (
            <li key={index}>
              {`${el.name} (id: ${el.id}) is ${el.age} years old. ${
                el.isMarried ? 'married' : 'single'
              }`}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
