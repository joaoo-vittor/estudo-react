import { useContext } from 'react';
import { GlobalContext } from '../../context/AppContext/index';

// eslint-disable-next-line
export const H1 = () => {
  const theContext = useContext(GlobalContext);
  const {
    contextState: { title, counter },
  } = theContext;
  return (
    <h1>
      {title} {counter}
    </h1>
  );
};
