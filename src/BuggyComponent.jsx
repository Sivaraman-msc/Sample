import React from 'react';

function BuggyComponent() {
  throw new Error("I crashed!");
  return( <p>This won't render</p>);
}

export default BuggyComponent;