import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyReactComponent from './MyReactComponent'

const myHeader = React.createElement (
  'h1',
  {className: 'myHeader'},
  'Hello from createElement!!!'
)

function App() {
  return (
    <div className="App">
      {myHeader}
      <MyReactComponent/>
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
    </div>
  );
}

export default App;
