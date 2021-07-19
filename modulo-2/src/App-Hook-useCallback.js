import P from 'prop-types';
import './App.css';
import { useState, useEffect, useCallback } from 'react';
import React from 'react';

const Button = React.memo(function Button({ increment }) {
  console.log('filho');
  return <button onClick={() => increment(10)}>+</button>;
});

Button.propTypes = {
  increment: P.func,
};

function App() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = useCallback((num) => {
    setCounter((c) => c + num);
  }, []);

  console.log('pai');

  return (
    <div className="App">
      <h1>Contador 1: {counter}</h1>
      <Button increment={incrementCounter} />
    </div>
  );
}

export default App;
