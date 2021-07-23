import { AppContext } from './context/AppContext/index';
import { Div } from './components/Div';
import './App.css';

function App() {
  return (
    <AppContext>
      <Div />
    </AppContext>
  );
}

export default App;
