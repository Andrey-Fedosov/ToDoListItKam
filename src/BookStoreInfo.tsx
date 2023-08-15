import React from 'react';

type booklistPropsType = {
  bookList: bookPropsType[];
};

type bookPropsType = {
  title: string;
  author: string;
  yearPublished: number;
  price: number;
};

export const BookStoreInfo = (props: booklistPropsType) => {
  return (
    <>
      <h2>Book store</h2>
      <ul>
        {props.bookList.map((book, index) => {
          return (
            <li key={index}>
              {`${book.title} (author: ${book.author}) was published in ${book.yearPublished}. Now its price is ${book.price} pounds`}
            </li>
          );
        })}
      </ul>
    </>
  );
};

//* there is a task for practise with map method (generated by ai)
/* 
Task: Extract and format data from a list of objects
Let's say we have an array of objects that represent books. Each object has properties: title, author, yearPublished and price. Your task is to create a function that extracts title and price, and formats them into a string.

Here's the book data: */

/* let bookList = [
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

// Your function should return an array of strings that follow this format: "<title> costs $<price>". Here's an example of the output:

// [
/*    "Harry Potter and the Philosopher's Stone costs $19.99",
    "The Lord of the Rings costs $29.99",
    "To Kill a Mockingbird costs $15.99",
    // ... additional formatted book prices
] */

/* You'll need to use the .map() function to iterate over the bookList array, extract the title and price properties from each book, and format them into a string. The .map() method should return a new array that contains these formatted strings.

Remember, in TypeScript, you can also define the type of your data to ensure type safety. Define a Book interface for the book objects and use it to type the bookList array.

Good luck! */
