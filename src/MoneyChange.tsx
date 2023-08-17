import React, { useState } from 'react';
import './App.css';

type FilterType = 'all' | 'rubles' | 'dollars';

export const MoneyChange = () => {
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

  let [filter, setFilter] = useState<FilterType>('all');

  let currentMoney = money;
  if (filter === 'rubles') {
    currentMoney = money.filter(
      (filteredMoney) => filteredMoney.banknots === 'RUBLS'
    );
  } else if (filter === 'dollars') {
    currentMoney = money.filter(
      (filteredMoney) => filteredMoney.banknots === 'Dollars'
    );
  }

  const onClickHandler = (btnName: FilterType) => {
    setFilter(btnName);
  };

  return (
    <div>
      <ul>
        {currentMoney.map((objectFromMoneyArr, index) => {
          return (
            <li key={index}>
              <span>{objectFromMoneyArr.banknots}</span>
              <span>{objectFromMoneyArr.value}</span>
              <span>{objectFromMoneyArr.number}</span>
            </li>
          );
        })}
      </ul>
      <div style={{ marginLeft: '40px' }}>
        <button onClick={() => onClickHandler('all')}>All</button>
        <button onClick={() => onClickHandler('rubles')}>Rubles</button>
        <button onClick={() => onClickHandler('dollars')}>Dollars</button>
      </div>
    </div>
  );
};
