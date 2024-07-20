import './App.css';
import WordCount from './components/WordCount';
import { useState } from 'react';
function App() {
  const [first, setFirst] = useState('1');
  return (
    <div className='App'>
      <button onClick={() => setFirst((prev) => prev + 1)}>
        {' '}
        clicked {first}
      </button>

      <button onClick={() => setFirst('hello')}>hello {first}</button>
      <WordCount text={first} />
    </div>
  );
}

export default App;
