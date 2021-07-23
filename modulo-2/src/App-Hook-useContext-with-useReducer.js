import { useReducer, createContext, useContext, useRef } from 'react';
import P from 'prop-types';
import './App.css';

// actions.js
export const actions = {
  CHENGE_TITLE: 'CHENGE_TITLE',
};

// data.js
export const globalState = {
  title: 'O titulo do contexto!!!',
  body: 'O body do contexto',
  counter: 0,
};

// reducer.js
export const reducer = (state, action) => {
  switch (action.type) {
    case actions.CHENGE_TITLE: {
      console.log('Mudar titulo');
      return { ...state, title: action.payload };
    }
  }

  return { ...state };
};

// AppContext.js
export const Context = createContext();
export const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, globalState);

  const change_title = (payload) => {
    dispatch({ type: actions.CHENGE_TITLE, payload });
  };

  return (
    <Context.Provider value={{ state, change_title }}>
      {children}
    </Context.Provider>
  );
};

AppContext.propTypes = {
  children: P.node,
};

// H1/index.js
export const H1 = () => {
  const context = useContext(Context);
  const inputRef = useRef();

  return (
    <>
      <h1 onClick={() => context.change_title(inputRef.current.value)}>
        {context.state.title}
      </h1>
      <input type="text" ref={inputRef} />
    </>
  );
};

// App.js
function App() {
  return (
    <AppContext>
      <div>
        <H1 />
      </div>
    </AppContext>
  );
}

export default App;
