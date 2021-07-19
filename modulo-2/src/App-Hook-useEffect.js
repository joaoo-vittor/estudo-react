import './App.css';
import { useState, useEffect } from 'react';

const eFn = () => {
  console.log('h1 clicado');
};

function App() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  // componentDidUpdate - executa toda vez que o componente atualiza
  // useEffect(() => {
  //   console.log('componentDidUpdate');
  // });

  // componentDidMount - executa uma vez
  // useEffect(() => {
  //   console.log('componentDidMount');
  // }, []);
  useEffect(() => {
    document.querySelector('h1')?.addEventListener('click', eFn);

    // componentWillUnmount - Limpeza
    return () => {
      document.querySelector('h1')?.removeEventListener('click', eFn);
    };
  }, []);

  // componentDidMount (Com dependência) - executa toda vez que a dependencia mudar
  useEffect(() => {
    console.log('Contador 1:', counter, 'Contador 2:', counter2);
  }, [counter, counter2]);

  return (
    <div className="App">
      <p>2</p>
      <h1>
        Contador 1: {counter} | Contador 2: {counter2}
      </h1>
      <button onClick={() => setCounter(counter + 1)}>+ (1)</button>
      <button onClick={() => setCounter2(counter2 + 1)}>+ (2)</button>
    </div>
  );
}

export default App;
