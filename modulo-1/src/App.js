import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      name: 'João Vitor',
      counter: 0
    }
  }

  // Sem arrowFunction é necessario fazer o bind
  handleClick() {
    this.setState({ name: 'Jose' })
  }

  handleAClick = (event) => {
    event.preventDefault()
    const { counter } = this.state
    this.setState({counter: counter + 1})
  }

  render() {
    const { name, counter } = this.state;


    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p onClick={this.handleClick}>
            {name}
          </p>
          <p >
            {counter}
          </p>
          <a 
            onClick={this.handleAClick}
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Link
          </a>
        </header>
      </div>
    );

  }
}


// function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
// }

export default App;
