import React from 'react';

type CarListPropsType = {
  carList: CarItemPropsType[];
};

type CarItemPropsType = {
  manufacturer: string;
  model: string;
};

export const TopCar = (props: CarListPropsType) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Number</th>
            <th>Manufacture</th>
            <th>Model</th>
          </tr>
        </thead>
        <tbody>
          {props.carList.map((car, index) => {
            return (
              <tr>
                <td> {`${index + 1}`} </td>
                <td> {`${car.manufacturer}`} </td>
                <td> {`${car.model}`} </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
