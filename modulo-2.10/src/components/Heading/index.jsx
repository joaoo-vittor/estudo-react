import { useCounterContext } from '../../context/CounterContext';

export const Heading = () => {
  // eslint-disable-next-line
  const [state, actions] = useCounterContext();

  return <h1>{state.counter}</h1>;
};
