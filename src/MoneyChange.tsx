import React, { useState } from 'react';
import './App.css';
// import { Button } from './Button';

// const moneyArray = [
//   { banknots: 'Dollars', value: 100, number: ' a1234567890' },
//   { banknots: 'Dollars', value: 50, number: ' z1234567890' },
//   { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
//   { banknots: 'Dollars', value: 100, number: ' e1234567890' },
//   { banknots: 'Dollars', value: 50, number: ' c1234567890' },
//   { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
//   { banknots: 'Dollars', value: 50, number: ' x1234567890' },
//   { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
// ];

/* console.log(
    moneyArray.filter((m) => {
      return m.banknots === 'RUBLS';
    })
    );
    console.log(
      moneyArray.filter((m) => {
        return m.banknots === 'Dollars';
      })
      );
      console.log(
        moneyArray.filter((m) => {
          return m.banknots;
        })
        ); */

export const MoneyChange = () => {
  // let filteredArray: any = [];
  const [money, setMoney] = useState([
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
    <ul>
      {money.map((objectFromMoneyArr) => {
        return (
          <li>
            <span>{objectFromMoneyArr.banknots}</span>
            <span>{objectFromMoneyArr.value}</span>
            <span>{objectFromMoneyArr.number}</span>
          </li>
        );
      })}
    </ul>
  );
};
