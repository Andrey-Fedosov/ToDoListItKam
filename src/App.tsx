import React, { useState } from 'react';
import './App.css';
// import { TODOList } from './TODOList';
// import { ButtonLesson } from './ButtonLesson';
// import { UseStateLesson } from './UseStateLesson';
import { MoneyChange } from './MoneyChange';
// import { TopCar } from './TopCars';
// import { NewComponent } from './NewComponent';

// import { BookStoreInfo } from './BookStoreInfo';

function App() {
  /*   const truck = 'what to learn';
  const truck2 = 'what to learn2'; */

  /*   const tasks1 = [
    { id: 1, title: 'HTML&CSS', isDone: true },
    { id: 2, title: 'JS', isDone: true },
    { id: 3, title: 'ReactRouter', isDone: false },
    { id: 4, title: 'ReactJS', isDone: false },
    { id: 5, title: 'ReactJS', isDone: true },
    { id: 6, title: 'ReactJS', isDone: false },
  ];
  const tasks2 = [
    { id: 1, title: 'Hello world', isDone: true },
    { id: 2, title: 'I am Happy', isDone: false },
    { id: 3, title: 'Yo', isDone: false },
    { id: 4, title: 'A-Yo man', isDone: false },
    { id: 5, title: 'Yo-yo', isDone: false },
    { id: 6, title: 'Yo-yo-yo', isDone: false },
  ]; */

  /* const students = [
    {
      name: 'John',
      age: 20,
      id: 67,
      isMarried: true,
    },
    {
      name: 'Jane',
      age: 21,
      id: 46,
      isMarried: false,
    },
    {
      name: 'Mary',
      age: 22,
      id: 72,
      isMarried: false,
    },
    {
      name: 'Peter',
      age: 23,
      id: 78,
      isMarried: true,
    },
    {
      name: 'Susan',
      age: 24,
      id: 41,
      isMarried: false,
    },
    {
      name: 'David',
      age: 25,
      id: 45,
      isMarried: true,
    },
    {
      name: 'Elizabeth',
      age: 26,
      id: 76,
      isMarried: false,
    },
    {
      name: 'Robert',
      age: 27,
      id: 33,
      isMarried: false,
    },
    {
      name: 'Michael',
      age: 28,
      id: 98,
      isMarried: true,
    },
    {
      name: 'Jessica',
      age: 29,
      id: 68,
      isMarried: false,
    },
  ]; */

  /*  let bookList = [
    {
      title: "Harry Potter and the Philosopher's Stone",
      author: 'J.K. Rowling',
      yearPublished: 1997,
      price: 19.99,
    },
    {
      title: 'The Lord of the Rings',
      author: 'J.R.R. Tolkien',
      yearPublished: 1954,
      price: 29.99,
    },
    {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      yearPublished: 1960,
      price: 15.99,
    },
    // ... additional books
  ]; */

  /*   const topCars = [
    { manufacturer: 'BMW', model: 'm5cs' },
    { manufacturer: 'Mercedes', model: 'e63s' },
    { manufacturer: 'Audi', model: 'rs6' },
  ]; */

  const [moneyArray, setMoney] = useState([
    { banknots: 'Dollars', value: 100, number: ' a1234567890' },
    { banknots: 'Dollars', value: 50, number: ' z1234567890' },
    { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
    { banknots: 'Dollars', value: 100, number: ' e1234567890' },
    { banknots: 'Dollars', value: 50, number: ' c1234567890' },
    { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
    { banknots: 'Dollars', value: 50, number: ' x1234567890' },
    { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
  ]);

  return (
    <div className="App">
      {/*       <TODOList truck1={truck} task={tasks1} />
      <TODOList truck1={truck2} task={tasks2} /> */}
      {/* <NewComponent students={students} /> */}
      {/* <BookStoreInfo bookList={bookList} /> */}
      {/* <TopCar carList={topCars} /> */}
      {/* <ButtonLesson /> */}
      {/* <UseStateLesson /> */}
      <MoneyChange wallet={moneyArray} />
    </div>
  );
}

export default App;
