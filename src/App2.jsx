import React, { useState, useMemo } from 'react';

function ExpensiveCalculationComponent({ num }) {
  /*  const expensiveCalculation = (number) => {
    console.log('Calculating...');
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      result += number;
    }
    return result;
  }; */

  const memoizedValue = useMemo(() => {
    console.log('Calculating...');

    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      result += num;
    }
    return result;
  }, [num]);

  return (
    <div>
      {/* <p>Result: {expensiveCalculation(num)}</p> */}
      <p>Result: {memoizedValue}</p>
    </div>
  );
}

function App() {
  const [num, setNum] = useState(1);
  const [otherState, setOtherState] = useState(false);

  return (
    <div>
      <ExpensiveCalculationComponent num={num} />
      <button onClick={() => setNum(num + 1)}>Increment</button>
      <button onClick={() => setOtherState(!otherState)}>
        Toggle Other State
      </button>
    </div>
  );
}

export default App;
