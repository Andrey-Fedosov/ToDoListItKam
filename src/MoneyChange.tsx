import React, { useState } from 'react';
import { Button } from './Button';

type WalletType = {
  wallet: BanknotPropsType[];
};

type BanknotPropsType = {
  banknots: string;
  value: number;
  number: string;
};

export const MoneyChange = (props: WalletType) => {
  const [filter, setFilter] = useState('all');

  const onClickHandler = (btnName: string) => {
    setFilter(btnName);
    // console.log(filter);
  };

  let filteredArray = props.wallet.filter((el) => el.banknots);

  if (filter === 'rubles') {
    filteredArray = props.wallet.filter((el) => {
      return el.banknots === 'RUBLS';
    });
  } else if (filter === 'dollars') {
    filteredArray = props.wallet.filter((el) => {
      return el.banknots === 'Dollars';
    });
  } else if (filter === 'all') {
    filteredArray = props.wallet.filter((el) => el.banknots);
  }

  return (
    <>
      <ul>
        {filteredArray.map((b: BanknotPropsType, index: number) => {
          return (
            <li key={index}>
              <span>{`${b.value} ${b.banknots} with number ${b.number}`}</span>
            </li>
          );
        })}
      </ul>
      <div style={{ marginLeft: '30px', marginTop: '30px' }}>
        <Button name="all" callBack={() => onClickHandler('all')} />
        <Button name="rubles" callBack={() => onClickHandler('rubles')} />
        <Button name="dollars" callBack={() => onClickHandler('dollars')} />
      </div>
    </>
  );
};
