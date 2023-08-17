import React, { useState } from 'react';
import { Button } from './Button';

type WalletType = {
  wallet: BanknotPropsType[];
};

type BanknotPropsType = {
  banknots: string;
  value: number;
  number: string;
  ReactElement:<any> 
};

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

export const MoneyChange = (props: WalletType) => {
  // let filteredArray: any = [];
  const [filter, setFilter] = useState('all');
  const onClickHandler = (btnName: string) => {
    setFilter(btnName);
    console.log(filter);
  };

  let filteredArray = props.wallet.filter((el) => {
    return el.banknots;
  });

  if (filter === 'rubles') {
    return (filteredArray = props.wallet.filter((el) => {
      return el.banknots === 'RUBLS';
    }));
  } else if (filter === 'dollars') {
    return (filteredArray = props.wallet.filter((el) => {
      return el.banknots === 'Dollars';
    }));
  } else if (filter === 'all') {
    filteredArray = props.wallet.filter((el) => {
      return el.banknots;
    });
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
