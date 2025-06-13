export const sum = (a, b) => a + b;

// App.js
import React, { useState } from 'react';

function App() {
  const [result, setResult] = useState(null);

  const loadMathLib = () => {
    import('./utils')
      .then((module) => {
        const sumResult = module.sum(2, 3);  // Lazy-loaded math library
        setResult(sumResult);
      })
      .catch((err) => {
        console.error('Failed to load math library:', err);
      });
  };

  return (
    <div>
      <h1>Dynamic Import Example</h1>
      <button onClick={loadMathLib}>Load Math Library and Calculate</button>
      {result !== null && <p>Result: {result}</p>}
    </div>
  );
}

export default App;