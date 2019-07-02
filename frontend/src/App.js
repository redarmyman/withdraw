import React from 'react';
import logo from './logo.svg';
import EntryForm from './EntryForm'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <EntryForm />
        </p>
      </header>
    </div>
  );
}

export default App;
