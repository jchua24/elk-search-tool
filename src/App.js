import logo from './logo.svg';
import './App.css';

import React from 'react';
import ReactDOM from 'react-dom';

import SearchFilters from "./components/SearchFilters"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <SearchFilters> </SearchFilters> 
      </header>

     
    </div>
  );
}

export default App;
