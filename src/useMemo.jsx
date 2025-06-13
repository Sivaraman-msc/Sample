import React, { useState, useMemo } from 'react';

export default function UseMemo() {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(5);

  // Heavy calculation
  const squared = useMemo(() => {
    console.log('Calculating square...');
    return num * num;
  }, [num]);

  return (
    <div>
      <p>Square of {num} is {squared}</p>
      <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
      <button onClick={() => setNum(num + 1)}>
        Change Number (Current: {num})
      </button>
    </div>
  );
}