import React from 'react';
import logo from './globe.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Cori Garrison
        </p>
        <a
          className="App-link"
          href="https://www.dictionary.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Words
        </a>
      </header>
    </div>
  );
}

export default App;
