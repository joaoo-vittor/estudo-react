import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [reverse, setReverse] = useState(false);
  const [counter, setCounter] = useState(0);
  const reverseClass = reverse ? 'App-logo-reverse' : '';

  const handleClickReverse = () => {
    setReverse(!reverse);
  };

  const handleClickUp = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const handleClickDown = () => {
    setCounter((counter) => counter - 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />

        <h1>Contador: {counter}</h1>

        <button type="button" onClick={handleClickUp}>
          Up
        </button>
        <br />
        <button type="button" onClick={handleClickDown}>
          Down
        </button>
        <br />
        <button type="button" onClick={handleClickReverse}>
          Reverse
        </button>
      </header>
    </div>
  );
}

export default App;
