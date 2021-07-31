import { useState, Children, cloneElement, createContext, useContext } from 'react';

const s = {
  style: { fontSize: '60px' },
};

// const Parent = ({ children }) => {
//   return Children.map(children, (child) => {
//     const newChild = cloneElement(child, { ...s });
//     return newChild;
//   });
// };

const TurnOnOffContext = createContext();

const TurnOnOff = ({ children }) => {
  const [isOn, setIsOn] = useState(false);
  const onTurn = () => setIsOn((s) => !s);

  return <TurnOnOffContext.Provider value={{ isOn, onTurn }}>{children}</TurnOnOffContext.Provider>;
  // return Children.map(children, (child) => {
  //   const newChild = cloneElement(child, {
  //     isOn,
  //     onTurn,
  //   });

  //   return newChild;
  // });
};

const TurnedOn = ({ children }) => {
  const { isOn } = useContext(TurnOnOffContext);
  return isOn ? children : null;
};
const TurnedOff = ({ children }) => {
  const { isOn } = useContext(TurnOnOffContext);
  return isOn ? null : children;
};

const TurnButton = ({ ...props }) => {
  const { isOn, onTurn } = useContext(TurnOnOffContext);
  return <button onClick={onTurn}>Turn {isOn ? 'OFF' : 'ON'}</button>;
};

export const Home = () => {
  return (
    <TurnOnOff>
      <div>
        <TurnedOn>Coisas do On.</TurnedOn>
        <TurnedOff>Coisas do Off.</TurnedOff>
        <TurnButton />
      </div>
    </TurnOnOff>
  );
};
