import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greeter from './components/Greeter';

function App() {
  return (
    <div className="App">
      <Greeter person="Vedat" />
      <Greeter person="Sedat" />
      <Greeter person="Jack" />
    </div>
  );
}

export default App;
