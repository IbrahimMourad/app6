import React, { useState } from 'react';

function Child2({ handleClick }) {
  console.log('Child component rendered');

  return <button onClick={handleClick}>Click me</button>;
}

const MemoizedChild2 = React.memo(Child2);

function App2() {
  const [count, setCount] = useState(0);

  const [otherState, setOtherState] = useState(false);

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>

      <MemoizedChild2 handleClick={handleClick} />

      <button onClick={() => setOtherState(!otherState)}>
        Toggle Other State
      </button>
    </div>
  );
}

export default App2;
