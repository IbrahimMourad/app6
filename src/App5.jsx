import React from 'react';
import { useWindowSize } from './hooks/useWindowSize';
const App5 = () => {
  const [width, height] = useWindowSize();
  return (
    <>
      <div style={{ width, height, backgroundColor: 'red' }}>width:{width}</div>
      {/* <div>height:{height}</div> */}
    </>
  );
};

export default App5;
