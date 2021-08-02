import { useCounterContext } from '../../context/CounterContext';
import { Button } from '../../components/Button';
import { Heading } from '../../components/Heading';

export const Home = () => {
  // eslint-disable-next-line
  const [state, actions] = useCounterContext();

  const handleError = async () => {
    actions
      .asyncError()
      .then((r) => console.log(r))
      .catch((e) => console.error(e.name));
  };

  return (
    <div>
      <Heading />
      <div>
        <Button onButtonClick={actions.increase}>Increase</Button>
        <Button onButtonClick={actions.decrease}>Decrease</Button>
        <Button onButtonClick={actions.reset}>Reset</Button>
        <Button onButtonClick={() => actions.setCounter({ counter: 10 })}>set 10</Button>
        <Button onButtonClick={() => actions.setCounter({ counter: 100 })}>set 100</Button>
        <Button disabled={state.loading} onButtonClick={actions.asyncIncrease}>
          Async Increase
        </Button>
        <Button disabled={state.loading} onButtonClick={handleError}>
          Async Error
        </Button>
      </div>
    </div>
  );
};
