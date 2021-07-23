import { useContext } from 'react';
import { GlobalContext } from '../../context/AppContext/index';

export const P = () => {
  const theContext = useContext(GlobalContext);
  const {
    contextState: { body, counter },
    contextState,
    setState,
  } = theContext;

  return (
    // <p
    //   onClick={() => setState({ ...contextState, counter: counter + 1 })}
    // >
    <p onClick={() => setState((s) => ({ ...s, counter: s.counter + 1 }))}>
      {body}
    </p>
  );
};
