import React from 'react';

export default function Conditional2(props) {
  return (
    <div>
        <p>Car Name: {props.carInfo.name}</p>
        <p>Price: {props.carInfo.price}</p>
    </div>
  );
}