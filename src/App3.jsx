import React, { useState, useCallback } from 'react';

function Child({ handleClick }) {
  console.log('Child component rendered');

  return <button onClick={handleClick}>Click me</button>;
}

const MemoizedChild = React.memo(Child);

function App() {
  const [count, setCount] = useState(0);

  const [otherState, setOtherState] = useState(false);

  const handleClick = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>

      <MemoizedChild handleClick={handleClick} />

      <button onClick={() => setOtherState(!otherState)}>
        Toggle Other State
      </button>
    </div>
  );
}

export default App;
