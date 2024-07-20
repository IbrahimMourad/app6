import React, { useEffect, useCallback, useState } from 'react';

const Example = () => {
  const [otherState, setOtherState] = useState(false);

  const fn = () => {
    console.log('hello');
    console.log('world');
  };

  useEffect(() => {
    console.log('fresh render');
    fn();
  }, [fn]);

  return (
    <div>
      Hiii{' '}
      <button onClick={() => setOtherState(!otherState)}>
        Toggle Other State
      </button>
    </div>
  );
};

export default Example;
